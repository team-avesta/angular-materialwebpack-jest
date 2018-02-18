# yo-angular-material-webpack-jest

This is a Yeaoman Generator for creating an opionated Angular 1.x seed project with following tools stack
- Angular Material (for angular 1.x)
- Jest for unit tests
- Webpack as module bundler with Babel for transpiling

### Install

##### Install required tools `yo`, and `webpack`:
```
npm install -g yo webpack
```

##### Install `generator-angular-webpack-es6`:
```
npm install -g generator-angular-webpack-es6
```

### Directory Layout

```shell

├── /config/                              # Build config
│   └── /webpack/                         # Webpack config files
│       ├── /environments/                # Webpack env dependent configs
│       └── global.js                     # Global webpack settings for all envs
├── /dist/                                # The folder for compiled output
├── /node_modules/                        # 3rd-party libraries and utilities
├── /src/                                 # Source folder
│   ├── /app/                             # Application code
│   │   ├── /components/                  # Shared UI components
│   │   │   └── /footer/                  # Footer shared component. Place footer's styles, directives, templates here
│   │   ├── /core/                        # Shared angular services/directives
│   │   │   ├── /directives/              # Shared directives
│   │   │   ├── /services/                # Shared services
│   │   │   └── /core.module.js           # Import of all core components should be here
│   │   ├── /pages/                       # All pages-dependent content should place here
│   │   │   ├── /main/                    # Main page
│   │   │   │   ├── /main.controller.js   # Main page Controller
│   │   │   │   ├── /main.html            # Main page template
│   │   │   │   ├── /main.module.js       # Main page module
│   │   │   │   └── /main.route.js        # Main page routes
│   │   │   └── /.../                     # Other pages...
│   │   ├── /index.bootstrap.js           # Entry point. Import internal and external modules and bootstrap (RUN) angular application
│   │   ├── /index.components.js          # Define all your custom components here
│   │   ├── /index.config.js              # Function that will be triggered in Angular's "config" phase
│   │   ├── /index.module.js              # Main application's module
│   │   ├── /index.routes.js              # Describe only "otherwise" and async routes here
│   │   ├── /index.run.js                 # Function that will be triggered in Angular's "run" phase
│   │   ├── /index.vendor.js              # Import all vendors and 3rd party plugins here
│   ├── /assets/                          # Static content
│   │   ├── /images/                      # Images
│   │   ├── /js/                          # Extra libs folder
│   │   └── /styles/                      # Styles folder
│   │       ├── /css/                     # CSS
│   │       └── /sass/                    # SASS
│   ├── favicon.ico                       # Application icon to be displayed in bookmarks
│   └── tpl-index.html                    # Template for html-webpack-plugin that will be transpiled into index.html in /dist
│── .babelrc                              # Babel config with presets and plugins
│── .gitignore                            # List of files to ignore by git
│── package.json                          # The list of project dependencies and NPM scripts
└── webpack.config.js                     # Bundling and optimization settings for Webpack
```

### Run

##### Create a new directory, and go into:
```
mkdir my-new-project && cd $_
```

##### Run `yo angular-webpack-es6`, and select desired technologies.
##### `npm start` or `npm run dev` - to start development server on http://localhost:8080.
##### `npm run build` - To make production-ready build run  after few moments you will see build id `dist` folder.

### Contribute

##### If you want to contribute:
> * Fork repository and clone project to your machine
> * Install npm packages and create new feature/fix branch
> * Link local project to be able install generator with `yo` from folder like from global installed package:
> ``` npm link ```
> * Make PR

#### Forked from [generator-angular-webpack-es6](https://www.npmjs.com/package/generator-angular-webpack-es6) project and customized according to our needs.