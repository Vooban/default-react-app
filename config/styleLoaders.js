'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Generate loaders for standalone style files
module.exports = function(production) {
  // generate loader string to be used with extract text plugin
  function generateLoaders() {
    const options = { sourceMap: true };
    const loaders = [].slice
      .call(arguments)
      .map(loader => `${loader}-loader`)
      .map(loader => ({ loader, options }));

    // Extract CSS when in production
    return production ? ExtractTextPlugin.extract({ use: loaders }) : ['style-loader'].concat(loaders);
  }

  const loaders = {
    css: generateLoaders('css', 'postcss'),
    postcss: generateLoaders('css', 'postcss'),
    scss: generateLoaders('css', 'postcss', 'sass')
  };

  return Object.keys(loaders).map(ext => ({
    test: new RegExp('\\.' + ext + '$'),
    use: loaders[ext]
  }));
};
