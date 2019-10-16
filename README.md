# monorepo-React native-React Native for web

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
react-native-cli,
typescript,
mobx,
react-hooks,
react-native-web,
react-native-router
styled-components

## Monorepo Project Structure

Key Directories
./ --> monorepo root. Child projects are located in ./packages/\*\* subfolders.
./packages/common -> Library of common code used in both react-web and react-native build sources
./packages/rn-mobile -> "react native" project source
./packages/rn-web -> "react web" project source

Files & Settings
../packages/package.json -> where yarn workspaces are configured.
“private”:”true” -> don't publish to npm. (needed by yarn monorepo)

        “main”: “index.js"
        “workspaces”: [“packages/*”]  —> register child projects with yarn's workspace manager

## Available Scripts

In the project directory packages/rn-web, you can run:

### 'yarn start'

In order to run the mobile app navigate to packages/rn-mobile
and run:

### 'yarn start ios'

In the project directory packages/common, you can start the watch mode:

### 'yarn watch'

### `To-do`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment
