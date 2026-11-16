# Serveur local pour Revizz (ASCII uniquement). Utilisez Lancer-Revizz.bat pour le demarrer.
# Il ne sert que les fichiers de ce dossier, et seulement sur cet ordinateur (localhost).
param([switch]$NoOpen)
$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath($PSScriptRoot).TrimEnd('\') + '\'
$mime = @{
  '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
  '.json'='application/json; charset=utf-8'; '.png'='image/png'; '.webmanifest'='application/manifest+json'; '.svg'='image/svg+xml'; '.ico'='image/x-icon'
}
$listener = $null; $port = 0
foreach ($p in 8765..8775) {
  try {
    $l = New-Object System.Net.HttpListener
    $l.Prefixes.Add("http://localhost:$p/")
    $l.Start()
    $listener = $l; $port = $p; break
  } catch { }
}
if (-not $listener) { Write-Host 'Impossible de demarrer le serveur (ports 8765 a 8775 occupes).'; Read-Host 'Appuyez sur Entree'; exit 1 }

$url = "http://localhost:$port/"
Write-Host "Revizz est lance : $url"
Write-Host 'Fermez cette fenetre pour arreter Revizz.'
if (-not $NoOpen) {
  # Fenetre "application" d'Edge : pas de barre d'adresse. Sinon, navigateur par defaut.
  try { Start-Process msedge -ArgumentList "--app=$url" } catch { Start-Process $url }
}
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ($rel -eq '') { $rel = 'index.html' }
    $full = [System.IO.Path]::GetFullPath((Join-Path $root $rel))
    $ext = [System.IO.Path]::GetExtension($full).ToLower()
    if ($full.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -and $mime.ContainsKey($ext) -and (Test-Path -LiteralPath $full -PathType Leaf)) {
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $ctx.Response.ContentType = $mime[$ext]
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.Headers.Add('Cache-Control', 'no-cache')
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
    }
  } catch {
    $ctx.Response.StatusCode = 500
  } finally {
    $ctx.Response.Close()
  }
}
