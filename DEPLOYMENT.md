# Guide de Déploiement - ONEX Technology

## 🎯 Options de Déploiement

Votre site Next.js peut être déployé de 3 façons selon votre type d'hébergement EX2.

---

## Option 1 : Hébergement Mutualisé cPanel (Export Statique)

⚠️ **Limitation** : Cette méthode fonctionne uniquement si votre site n'utilise pas de fonctionnalités serveur (API routes, ISR, SSR). Notre site utilise principalement du contenu statique, donc c'est compatible.

### Étape 1 : Modifier la configuration Next.js

Créez le fichier `next.config.ts` avec l'export statique :

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

### Étape 2 : Build du site en mode statique

```bash
cd /Users/yassinerogui/Projects/sites-web/web-onex-technology.com
npm run build
```

Cela créera un dossier `out/` avec tous les fichiers statiques.

### Étape 3 : Upload via FTP

1. Connectez-vous à votre cPanel EX2
2. Ouvrez le **Gestionnaire de fichiers** ou utilisez **FileZilla**
3. Naviguez vers le dossier `public_html` (ou `www`)
4. Uploadez TOUT le contenu du dossier `out/` (pas le dossier lui-même)

**Structure finale sur le serveur :**
```
public_html/
├── index.html
├── blog/
│   ├── index.html
│   └── ia-generative-ccaas-gadget-ou-revolution/
│       └── index.html
├── _next/
├── images/
└── assets/
```

### Étape 4 : Configuration du domaine

1. Dans cPanel, allez dans **Domaines** ou **Addon Domains**
2. Pointez votre domaine vers `public_html`
3. Activez le **SSL/TLS** (Let's Encrypt gratuit)

---

## Option 2 : VPS/Serveur Dédié (Déploiement Node.js Complet)

✅ **Avantages** : Fonctionnalités complètes Next.js (SSR, API routes, ISR)

### Prérequis

- Accès SSH au serveur
- Node.js 18+ installé
- PM2 pour la gestion des processus
- Nginx ou Apache comme reverse proxy

### Étape 1 : Upload du projet sur le serveur

```bash
# Sur votre machine locale
cd /Users/yassinerogui/Projects/sites-web/web-onex-technology.com
git init
git add .
git commit -m "Initial commit"

# Puis pushez sur GitHub/GitLab
# OU uploadez via SFTP
```

### Étape 2 : Configuration serveur

```bash
# Connexion SSH
ssh user@votre-serveur-ex2.com

# Installation des dépendances
cd /var/www/web-onex-technology.com
npm install --production

# Build du projet
npm run build

# Installation de PM2
npm install -g pm2

# Lancement de l'application
pm2 start npm --name "onex-technology" -- start
pm2 save
pm2 startup
```

### Étape 3 : Configuration Nginx (Reverse Proxy)

Créez `/etc/nginx/sites-available/onex-technology.com` :

```nginx
server {
    listen 80;
    server_name onex-technology.com www.onex-technology.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Activez le site :
```bash
sudo ln -s /etc/nginx/sites-available/onex-technology.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Étape 4 : SSL avec Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d onex-technology.com -d www.onex-technology.com
```

---

## Option 3 : Vercel (Recommandé - Gratuit et Optimisé)

✅ **Meilleur choix** : Créé par l'équipe Next.js, déploiement automatique, SSL gratuit, CDN mondial

### Étape 1 : Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub/GitLab

### Étape 2 : Pushez votre code sur GitHub

```bash
cd /Users/yassinerogui/Projects/sites-web/web-onex-technology.com

# Initialiser Git si pas déjà fait
git init
git add .
git commit -m "Initial commit ONEX Technology"

# Créer un repo sur GitHub, puis :
git remote add origin https://github.com/votre-username/web-onex-technology.git
git branch -M main
git push -u origin main
```

### Étape 3 : Importer sur Vercel

1. Sur Vercel, cliquez **"New Project"**
2. Importez votre repo GitHub
3. Vercel détecte automatiquement Next.js
4. Cliquez **"Deploy"**

### Étape 4 : Configurer votre domaine EX2

1. Sur Vercel, allez dans **Settings > Domains**
2. Ajoutez votre domaine : `onex-technology.com`
3. Vercel vous donnera des DNS à configurer

4. Sur votre panel EX2 :
   - Type: **CNAME**
   - Nom: **www**
   - Valeur: **cname.vercel-dns.com**

   - Type: **A**
   - Nom: **@**
   - Valeur: **76.76.21.21** (IP Vercel)

### Étape 5 : Déploiements automatiques

Chaque fois que vous pushez sur GitHub, Vercel déploie automatiquement !

```bash
# Faire une modification
git add .
git commit -m "Update content"
git push

# → Déploiement automatique en 30 secondes !
```

---

## 🔧 Préparation avant déploiement

### 1. Mettre à jour les URLs de production

Créez `.env.production` :

```env
NEXT_PUBLIC_SITE_URL=https://onex-technology.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@onex-technology.com
```

### 2. Optimiser les images

Placez vos vraies images dans `public/images/blog/` :
- `ia-ccaas.jpg`
- `migration-connect.jpg`
- `erreurs-migration.jpg`

### 3. Vérifier le build local

```bash
npm run build
npm start

# Testez sur http://localhost:3000
# Vérifiez toutes les pages :
# - http://localhost:3000
# - http://localhost:3000/blog
# - http://localhost:3000/blog/ia-generative-ccaas-gadget-ou-revolution
```

### 4. Analyser la taille du bundle

```bash
npm run build

# Vérifiez que le total est < 500KB pour les performances
```

---

## 📊 Comparaison des Options

| Critère | Export Statique (cPanel) | VPS Node.js | Vercel |
|---------|--------------------------|-------------|--------|
| **Coût** | Inclus avec hébergement | 5-20€/mois | Gratuit |
| **Performance** | Bon | Très bon | Excellent (CDN mondial) |
| **Facilité** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **SSL** | Gratuit (Let's Encrypt) | Gratuit | Gratuit |
| **API Routes** | ❌ Non | ✅ Oui | ✅ Oui |
| **ISR/SSR** | ❌ Non | ✅ Oui | ✅ Oui |
| **Déploiements** | Manuel (FTP) | PM2 | Automatique |
| **Analytics** | À installer | À installer | Inclus |

---

## 🚀 Ma Recommandation

### Pour démarrer rapidement : **Vercel** (Option 3)
- Gratuit
- Déploiement en 5 minutes
- Performances optimales
- SSL automatique
- Vous gardez votre domaine EX2

### Si vous voulez utiliser EX2 :
- **Hébergement mutualisé** → Option 1 (Export statique)
- **VPS/Dédié** → Option 2 (Node.js)

---

## 🆘 Besoin d'aide ?

**Questions à me poser :**

1. Quel type d'hébergement avez-vous chez EX2 ?
   - [ ] Hébergement mutualisé (cPanel)
   - [ ] VPS
   - [ ] Serveur dédié

2. Avez-vous accès SSH ?
   - [ ] Oui
   - [ ] Non (seulement FTP/cPanel)

3. Préférez-vous :
   - [ ] Utiliser EX2 uniquement pour le domaine + Vercel pour l'hébergement
   - [ ] Tout héberger sur EX2

Répondez à ces questions et je vous guiderai étape par étape pour le déploiement !
