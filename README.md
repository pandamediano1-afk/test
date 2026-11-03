# Portfolio Angular

This is the Angular version of the portfolio. The earlier plain HTML version is still in the parent folder as a backup.

## 1. Install Node.js

Angular needs Node.js and npm. Download the current Node.js LTS installer from https://nodejs.org/en/download/ and install it with the default options. npm is included.

After installation, close and reopen VS Code. Open Terminal > New Terminal and check:

    node -v
    npm -v

Both commands should print version numbers. Angular 22 supports Node 22.22.3+, 24.15.0+, or 26.0.0+.

## 2. Install this project's packages

In the VS Code terminal, run:

    cd H:\portpolio\angular-app
    npm install

The first install needs an internet connection and can take a few minutes.

## 3. Run the site

Run:

    npm start

Angular opens the development site at http://localhost:4200. The Work page is at / and the Info page is at /info. Keep the terminal open while working. Press Ctrl+C there to stop the server.

If PowerShell says npm scripts are disabled or npm is not recognized, restart VS Code first. If needed, use npm.cmd instead:

    npm.cmd install
    npm.cmd start

## 4. Edit your portfolio

- Replace text, URLs, work samples, experience, and friends in src/app/portfolio-content.ts.
- Put your photos in public/assets.
- Set an image value to a path such as /assets/portrait.jpg.
- Change visual styling in src/styles.css.
- Work page markup is in src/app/work/work.component.html.
- Info page markup is in src/app/info/info.component.html.

The starter photos are temporary public images from the reference page. Replace them with your own before publishing.
