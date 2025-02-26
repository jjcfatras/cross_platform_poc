# Setting up Dev Environment

### Run Following Commands from Project Root

1. `nvm use`
2. `corepack enable`
3. `yarn`

## Using Web

### Launch Dev Server

```sh
yarn nx run web2:dev
```

## Using Mobile

#### Before you start be sure to follow setup instructions at https://docs.expo.dev/get-started/set-up-your-environment for Android and iOS using a development build. You will need Xcode and Android Studio installed to create builds.

### Create Development Build

```sh
yarn nx run mobile:run-ios
```

### Startup Existing Build

```sh
yarn nx run mobile:start
```
