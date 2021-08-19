const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    
    // host: 'localhost',
    // index: 'index.html'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: "public", to: "./" },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html"
  })
  ],
  devtool: 'source-map'
};