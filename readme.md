[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

# React Starter
Opinionated React starter project.

## Technologies

* React
* Webpack 3
* Yarn

## Yarn
Add dependency
```
yarn add <dependency>
```

Add dev dependency
```
yarn add -D <dependency>
```

Remove dependency
```
yarn remove <dependency>
```

## Webpack 

* webpack.common.js: common configuration
* webpack.dev.js: dev configuration
* webpack.prod.js: prod configuration

## Running

_webpack-dev-server_: Node.js Express server, bundle files are written to memory

## Plugins

_clean-webpack-plugin_: cleans build folders before building

_define-plugin_: creates global constants at compile time

_uglify-js-plugin_: minifies JavaScript files

_occurrence-order-plugin_: assign module/chunk ids by occurrence count

_commons-chunk-plugin_: creates a separate chunk (file)

_html-webpack-plugin_: generates a HTML5 file that includes all Webpack bundles as script tags

_extract-text-webpack-plugin_: extracts texts from a bundle into a separate file

## Loaders

_babel-loader_: Webpack plugin for Babel

_css-loader_: allows importing css files

_file-loader_: allows importing files

_url-loader_: inline assets as base64 strings within bundle

_eslint-loader_: lints code

## TODO
* API call
* Prettier
* CircleCI Build
* Redux
* Routing
* Caching
* Webpack prod output

## Links
* [reactGo](https://github.com/reactGo/reactGo/tree/master/app)
* [Webpack Guides](https://webpack.js.org/guides)
* [SurviveJS Webpack](https://survivejs.com/webpack/)
* [Styled Components](https://www.styled-components.com/)