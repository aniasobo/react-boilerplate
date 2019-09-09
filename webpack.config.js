const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // __dirname is a global in node that contains the current directory
    filename: 'app.bundle.js'
  }
}