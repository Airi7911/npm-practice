const path = require("path"); // pathモジュールを読み込む
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: 
    "./src/js/index.js",
  output: {
    filename: "./src/js/main.js",
    path: path.resolve(__dirname, "./dist"),
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
  
  module: {
    rules: [
      {
        //拡張子 .scss、.sass、css を対象
        test: /\.(scss|sass|css)$/i, 
        // 使用するローダーの指定（後ろから順番に適用される）
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ], 
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      title: "Try webpack",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
  ],
};
