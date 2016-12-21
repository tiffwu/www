const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: getEntrySources([
    './src/index.js'
  ]),
  output: {
    path: __dirname + '/public',
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] }
    ]
  },
  plugins: getPlugins([
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([{ from: './src/images', to: 'images' }]),
    new CopyWebpackPlugin([{ from: './src/styles.css' }])
  ])
};

// for hot reload in the dev server
function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }
  return sources;
}

// minification + plugins for production
function getPlugins(plugins) {
  if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }));
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }
  return plugins;
}
