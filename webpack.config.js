const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/", // ¡Aquí está el cambio importante!
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 4000,
    historyApiFallback: true, // Evita que el servidor devuelva HTML en lugar de JS
    hot: true, // Habilita recarga en caliente
    devMiddleware: {
      publicPath: "/", // ¡Aquí también corregimos!
    },
    open: true, // Opcional: abre automáticamente el navegador
  },
};
