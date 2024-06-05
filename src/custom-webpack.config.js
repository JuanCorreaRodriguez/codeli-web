// const CompressionPlugin = require("compression-webpack-plugin");
// const BrotliPlugin = require("brotli-webpack-plugin");
//
// module.exports = {
//   plugins: [
//     new BrotliPlugin({
//       asset: '[fileWithoutExt].[ext].br',
//       test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
//       threshold: 0,
//       minRatio: 0.8,
//     }),
//     new CompressionPlugin({
//       filename: '[path][base].br',
//       algorithm: 'brotliCompress',
//       test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
//       threshold: 10240,
//       minRatio: 0.8,
//       deleteOriginalAssets: false,
//     }),
//   ],
// };
//
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new BrotliPlugin(),
  ],
};
