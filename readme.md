[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

# React Starter
Opinionated React starter project.

## Technologies

* React
* Webpack 3
* Yarn

## DB
The project uses the json-server project as a backend. This serves a JSON Rest API from a db.json file.
```
yarn run db
```

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

## Links
### React
* [reactGo](https://github.com/reactGo/reactGo/tree/master/app)
* [React Redux Links](https://github.com/markerikson/react-redux-links)
* [React Training React Router](https://reacttraining.com/react-router/web/example/basic)
* [React Router and URLs](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually)
* [Styled Components](https://www.styled-components.com/)

### Webpack
* [Webpack Guides](https://webpack.js.org/guides)
* [SurviveJS Webpack](https://survivejs.com/webpack/)

### Other
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

## TODO:
* Heroku Deployment
* Real API
* 404 errors
* Direct links
* CircleCI
* Tests
* Webpack 4
* Sass
* Hot reloading