var Metalsmith    = require('metalsmith');
var markdown      = require('metalsmith-markdown');
var layouts       = require('metalsmith-layouts');
var permalinks    = require('metalsmith-permalinks');
var assets        = require('metalsmith-assets');
var browserSync   = require('metalsmith-browser-sync');
var webpack       = require('metalsmith-webpack2');

Metalsmith(__dirname)
  .metadata({
    title: "Mesosphere",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./pages')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(assets({
    source: 'assets',
    destination: 'assets',
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials',
  }))
  .use(webpack('./webpack.config.js'))
  .use(browserSync({
    server : 'build',
    files  : [
      'pages/**/*.md',
      'layouts/**/*.html',
      'partials/**/*.html',
      'scss/**/*.scss',
      'js/**/*.js',
    ]
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });