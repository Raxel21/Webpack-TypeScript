// Plugin para poder exportar los archivos html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Plugin para poder extraer el css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // Archivo principal con los imports 
  entry: './src/src/app.ts',
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  module: {
    rules: [
      {
        // Sass for webpack
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // Carpeta de destino y nombre del archivo
  output: {
    // Constante dirname para obtener la ruta absoluta de la carpeta
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}