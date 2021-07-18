const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
          //       {
          //   test: /\.(png|svg|jpg|gif|woff2|woff)$/,
          //   loader: 'file-loader'
          // },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|ico)$/,
        type: 'asset/resource',
      },
      
      // {
      //   test: /\.(png|jpg|gif|ico|svg)$/,
      //   use: [
      //     {

      //       // чтобы картинки грузились можно так, либо добавить .default в html
      //       loader: 'file-loader',
      //       options: {
      //         name: './images/[name].[ext]',
      //         esModule: false
      //       },
      //     },
      //   ]
      // },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
}