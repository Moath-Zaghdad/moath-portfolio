# React Portfolio & Resume Themes
This project was created as an assignment for a Web Development class.

## Demo
To see a demo of the running project visit [moath-portfolio.pages.dev](https://moath-portfolio.pages.dev/).

## Run the development server

First, install the dependencies:
``` shell
npm install
```

Then run the development server:
``` shell
npm run dev
```

## Deployment
Automatically deployed to Cloudflare pages.  
[See Docs for more info](https://developers.cloudflare.com/pages/)


## Directory Structure:
The `src` directory contains all core elements of the project, including pages, assets, components, and context files. Below is the project’s directory structure:
- `dist`: Compiled assets and main HTML file.
- `src`: Contains the core app files:
  - `assets`: Images and static files.
  - `components`: Reusable components like `Navbar` and `Link`.
  - `context`: Context for managing app navigation.
  - `pages`: Main pages like `HomePage`, `AboutMePage`, etc.
``` shell
> tree .
.
├── dist
│   ├── assets
│   └── index.html
├── index.html
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── MZ.svg
│   │   ├── MoathZaghdad.jpeg
│   │   ├── SvgEdit.png
│   │   └── uuid-backfill.png
│   ├── components
│   │   ├── Link.jsx
│   │   ├── Navbar.jsx
│   │   └── Route.jsx
│   ├── context
│   │   └── navigation.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       ├── AboutMePage.jsx
│       ├── ContactMePage.jsx
│       ├── HomePage.jsx
│       ├── ProjectsPage.jsx
│       └── ServicesPage.jsx
└── vite.config.js
```
