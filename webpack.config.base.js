const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // __dirname is a global in node that contains the current directory
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // regex matches any file that ends with .js
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['@babel/preset-env', {
            targets: [
              'last 2 versions',
              'not dead',
              'not < 2%',
              'not ie 11', // drops support for IE11 browser
            ],
            useBuiltIns: 'entry'
          }], '@babel/preset-react'],
          plugins: [
            'react-hot-loader/babel', 
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import']
        }
      },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}