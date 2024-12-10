const path = require("path"); // pathモジュールを読み込む
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./src/js/main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
  devServer: {
    port: 3000, // ポート番号
    static: "dist", // 静的ファイルを配布するディレクトリを指定
    open: true, // ブラウザを自動的に開くかどうか
    hot: true, // ホットリロードを有効に
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Try webpack",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
  ],
};
