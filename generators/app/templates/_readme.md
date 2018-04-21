## Notes for developers
---

- This project does not utilize bower components and instead utilize npm packages. If you add a front end package via npm you will need to add entries at following places.
    - Add a `import` statement in `src/app/index.vendor.js` This will include js code
    - If you need to include css file then add a `import` statement in `src/app/index.vendor.js` with path pointing to the css file inside `node_modules` directory. For example see index.vendor.js it has few css files already included.
- To start development server run `npm start`
- To build code for release run `npm build`. This will produce final code in `dist` directory at root level.
- When adding node_modules add `--save` only to those modules which are actucally required for production. Dev only packages should be included with `--save-dev` option.
- To add a new angular module run `yo ta-angular-webpack-jest:feature MODULE_NAME` . This will create a new folder in `src/app/modules/` directory.
    - After adding a new module using above command in order to actually include it add a import statement in `src/app/index.vendor.js` and add a line for angular's dependency injection system so that your angular app is aware of the new module's dependency. For example see `loginModule` in index.vendor.js
- To run unit tests **once** execute `npm test`
- To run unit tests **which rerun on change** execute `npm test:live`
    - We use [Jest](https://facebook.github.io/jest/) for unit testing instead of Karma,mocha,chai,sinon etc. So kindly check out the docs for any issues. Few sample unit tests are already written for common services and main module that comes by default with this generator.
    - Jest currently watches `src/app` and `assets/js` directory and runs unit tests in files named as `**.spec.js`


