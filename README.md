# Revizz – Révise malin

Application de révision (CP → Terminale) : fiches, quiz notés sur 20, jeux, culture générale, vidéo récompense.
C'est une web app installable (PWA) : elle s'ajoute à l'écran d'accueil de l'iPhone et s'ouvre ensuite sans connexion.

## Utiliser sur l'ordinateur
Double-cliquez sur `Lancer-Revizz.bat`.

## Mettre en ligne sur GitHub Pages (sans rien installer)
1. Sur github.com, créez un dépôt **public** nommé `revizz` (bouton **New**), sans README.
2. Dans le dépôt vide, cliquez sur **uploading an existing file**, puis glissez-déposez **tout le contenu** du dossier
   (y compris le dossier `icons` et le fichier `.nojekyll`). Cliquez sur **Commit changes**.
3. Allez dans **Settings → Pages** : *Source* = **Deploy from a branch**, *Branch* = **main** / **(root)**, puis **Save**.
4. Après une à deux minutes, l'app est en ligne à l'adresse `https://VOTRE-PSEUDO.github.io/revizz/`.

## Installer sur iPhone
1. Ouvrez l'adresse ci-dessus dans **Safari**.
2. Touchez **Partager** (carré avec une flèche), puis **Sur l'écran d'accueil**, puis **Ajouter**.
3. Ouvrez Revizz depuis son icône. La clé API se saisit une fois, dans *Créer → Réglages de l'IA* ; elle reste sur le téléphone.

## Mettre à jour l'app
Remplacez les fichiers modifiés dans le dépôt GitHub (**Add file → Upload files**).
Si vous ajoutez un nouveau fichier (par exemple `cours-4e.js`), ajoutez-le aussi à la liste `SHELL` de `sw.js`
et passez `VERSION` à `revizz-v2` : c'est ce qui permet de l'utiliser hors ligne.

## Bon à savoir
- Hors ligne, tout fonctionne (fiches, cours d'exemple, quiz, jeux, culture), sauf la génération par l'IA et les vidéos.
- La progression est enregistrée sur chaque appareil. L'iPhone et l'ordinateur ne partagent pas leurs données.
- Aucune information personnelle ni clé API ne se trouve dans le code : vous pouvez publier le dépôt en public.
