const HtmlWebpackPlugin = require('html-webpack-plugin'); // html file is inside public so we need some plugins to tell webpack where the html file is at.
const path = require('path');
module.exports = {
  entry: './src/client/index.js', // entry point is the app.js file in the client folder
  mode: 'development',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
