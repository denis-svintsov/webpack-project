const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
let target = 'web'

if (process.env.NODE_ENV === 'production') {
   mode = 'production',
      target = 'browserslist'
}

module.exports = {
   mode: mode,
   target: target,

   output: {
      assetModuleFilename: "img/[hash][ext][query]",
      clean: true,
   },

   module: {
      rules: [
         {
            test: /\.(png|jpe?g|gif|svg)/i,
            type: 'asset',
         },
         {
            test: /\.(s[ac]|c)ss$/i,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: { publicPath: '' },
               },
               "css-loader",
               "postcss-loader",
               "sass-loader"
            ]
         },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         }
      ]
   },

   plugins: [
      new MiniCssExtractPlugin()
   ],

   resolve: {
      extensions: [".js", ".jsx"]
   },

   devtool: 'source-map',

   devServer: {
      hot: true,
      static: {
         directory: './dist',
      },
   }
}