const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./initializer.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "initializer.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['public/index.html'])
  ],
};
