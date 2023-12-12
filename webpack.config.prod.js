const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
