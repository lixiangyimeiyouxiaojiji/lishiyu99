var webpack = require('webpack');
var path = require('path');
var projectRoot = path.resolve(__dirname, '../');
var utils = require('./bin/utils');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require("config");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var less = require('less');
// var HtmlWebpackPlugin = require('html-webpack-plugin');


var definePlugin = new webpack.DefinePlugin({
  __config__: JSON.stringify(config)
});

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    // avoid webpack trying to shim process
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader"
        )
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('imgs/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10&minetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10&minetype=image/svg+xml'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/js', to: 'vendor/js' },
      { from: 'src/assets/css', to: 'vendor/css' },
      { from: 'src/assets/fonts', to: 'vendor/fonts' },
      { from: 'src/assets/image', to: 'vendor/image' },
      { from: 'node_modules/bootstrap/dist', to: 'vendor/bootstrap' },
      { from: 'node_modules/jquery/dist', to: 'vendor/jquery' },
      { from: 'node_modules/element-ui/lib', to: 'vendor/element-ui' },
      { from: 'node_modules/webuploader/dist', to: 'vendor/webuploader' },
      { from: 'node_modules/less/dist', to: 'vendor/less' }
    ]),
    new webpack.ProvidePlugin({
      'Moment': 'moment',
      "$": "jquery",
      "_": "underscore"
    }),
    definePlugin
    // ,new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
    //   favicon:'./src/assets/image/logo.png', //favicon路径
    //   template:'./src/index.html',    //html模板路径
    //   filename: "./index.html",
    //   title: "FAIISearch",
    //   inject:true,    //允许插件修改哪些内容，包括head与body
    //   hash:true,    //为静态资源生成hash值
    //   minify:{    //压缩HTML文件
    //     removeComments:true,    //移除HTML中的注释
    //     collapseWhitespace:true    //删除空白符与换行符
    //   }
    // })
  ],
  vue: {
    loaders: ExtractTextPlugin.extract("vue-style!css"),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devServer: {
    port: 3010,
    contentBase: "./",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: false,
    grogress: true
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  // 开启source-map，webpack有多种source-map，在官网文档可以查到
  devtool: 'source-map'
};
