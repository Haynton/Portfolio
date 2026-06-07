# Portfolio — Anthony Quenet

Site portfolio personnel présentant mes projets et compétences en développement web.

🌐 [anthonyquenet.com](https://www.anthonyquenet.com)

## Stack technique

- HTML / CSS / JavaScript vanilla
- Tailwind CSS v4
- Déployé sur Vercel

## Structure du projet

```
├── assets/          # Images et ressources statiques
├── src/
│   ├── input.css    # Source Tailwind
│   └── output.css   # CSS généré (ne pas modifier directement)
├── index.html
├── 404.html
├── package.json
└── vercel.json
```

## Prérequis

- Node.js v18+
- Extension VS Code : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Installation

```bash
npm install
```

## Développement

Lancer Tailwind en mode watch dans un terminal :

```bash
npm run dev
```

Puis ouvrir `index.html` avec Live Server (clic droit → *Open with Live Server*).

Tailwind regénère `output.css` automatiquement à chaque modification, Live Server recharge le navigateur.

## Build (production)

```bash
npm run build
```

Génère un `output.css` minifié dans `src/`. Le déploiement sur Vercel se fait automatiquement à chaque push sur `main`.
