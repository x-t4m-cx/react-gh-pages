## Install the gh-pages npm package

  npm install gh-pages --save-dev

## Add a homepage property to the package.json file

  {
    "name": "my-app",
    "version": "0.1.0",
  + "homepage": "https://{username}.github.io/react-gh-pages",
    "private": true,

## Add deployment scripts to the package.json file

  "scripts": {
  +   "predeploy": "npm run build",
  +   "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",

## Add a "remote" that points to the GitHub repository
  git remote add origin https://github.com/{username}/{repo-name}.git

## Push the React app to the GitHub repository

  npm run deploy
