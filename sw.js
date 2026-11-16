/* Service worker de Revizz : permet d'ouvrir l'app sans connexion.
   Stratégie « réseau d'abord » : en ligne, on prend toujours la dernière version (et on la met en cache) ;
   hors ligne, on sert la copie en cache. Les appels à l'IA et les vidéos YouTube ne sont jamais mis en cache.
   Si vous ajoutez un fichier à l'app (ex. cours-4e.js), ajoutez-le à SHELL et augmentez VERSION. */
const VERSION = 'revizz-v3';
const SHELL = [
  './',
  'index.html',
  'cours-3e.js',
  'videos.js',
  'manifest.webmanifest',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true })
        .then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : undefined))
        .then(r => r || new Response('', { status: 504 })))
  );
});
