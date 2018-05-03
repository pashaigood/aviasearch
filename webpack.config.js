const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const { ImageminWebpackPlugin } = require("imagemin-webpack");

const Paths = { SRC: 'src', DIST: 'dist', ASSETS: 'assets' }//require('./src/config/paths');
const isDevelopment = process.env.NODE_ENV !== 'production'
const extracter = isDevelopment
  ? (loaders) => loaders
  : (loaders) => ExtractTextPlugin.extract({fallback: loaders[0], use: loaders.slice(1)})

const commonConfig = {
  entry: ['index.scss', 'index.js'],
  devtool: 'source-map',
  cache: true,
  context: path.resolve(Paths.SRC),
  output: {
    path: path.resolve(Paths.DIST),
    filename: 'index.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: JSON.stringify(process.env.PORT || false),
      DEBUG: JSON.stringify(process.env.DEBUG || false),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(`${Paths.SRC}/index.html`),
      inject: true,
      minify: isDevelopment ? false : [
        "removeComments",
        "removeCommentsFromCDATA",
        "removeCDATASectionsFromCDATA",
        "collapseWhitespace",
        "conservativeCollapse",
        "removeAttributeQuotes",
        "useShortDoctype",
        "keepClosingSlash",
        "minifyJS",
        "minifyCSS",
        "removeScriptTypeAttributes",
        "removeStyleTypeAttributes",
      ].reduce(function (minimizeOptions, name) {
        minimizeOptions[name] = true
        return minimizeOptions
      }, {})
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true,
      disable: isDevelopment
    }),
    new ProgressBarPlugin()
  ].filter(Boolean),
  resolve: {
    modules: [Paths.SRC, 'assets', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: [/src/],
        loader: 'html-loader',
        options: {
          attrs: [':src', 'link:href'],
          minimize: !isDevelopment
        }
      },
      {
        test: /\.jsx?$/,
        include: [/src/],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.s?css$/,
        include: [/src/],
        use: extracter([
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '__[hash:base64:5]',
            }
          },
          'postcss-loader',
          'sass-loader'
        ])
      },
      {
        test: /\.s?css$/,
        include: [/assets/, /node_modules/],
        use: extracter([
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ])
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          isDevelopment ? 'file-loader?name=assets/images/[name].[ext]' : {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "assets/fonts/[name].[ext]"
        },
      }
    ]
  }
};

const devConfig = Object.assign({}, commonConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: Paths.DIST,
    compress: true,
    port: 1234
  }
});

const prodConfig = Object.assign({}, commonConfig, {
  mode: 'production',
  plugins: [].concat(commonConfig.plugins)
});

prodConfig.plugins.unshift(new webpack.HashedModuleIdsPlugin());
prodConfig.plugins.push(
  new PurifyCSSPlugin({
    moduleExtensions: ['.html', '.js'],
    minimize: true,
    purifyOptions: {info: true, whitelist: ['*__*', '*btn*']},
    paths: glob.sync(path.join(__dirname, 'src/**/*.{html,js}'))
  }),
  new ImageminWebpackPlugin({
    // cache: true,
    imageminOptions: {
      plugins: [
        require('imagemin-gifsicle')(),
        require('imagemin-jpegtran')(),
        require('imagemin-optipng')(),
        require('imagemin-pngquant')({
          quality: '95-100'
        }),
        require('imagemin-svgo')()
      ]
    }
  })
)

module.exports = isDevelopment ? devConfig : prodConfig