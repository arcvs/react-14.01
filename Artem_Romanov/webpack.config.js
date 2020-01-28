const path = require("path"); // Подключаем модуль path
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
//Синтаксис экспорта кода из фалов в node
module.exports = {
    //Файл, с которого начинается сборка приложения, так же сюда прописана папка, в которой все хранится
    entry: path.resolve(__dirname, "src", "index.js"), // Свойство через запятую принимает строки и указывает правильный путь
    output: {
        //Точка выхода
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },   
        module: {
               rules: [
                   {
                       test: /\.(js|jsx)$/,
                       include: path.resolve(__dirname, "src"),
                       loader: 'babel-loader',
                       exclude: /node_modules/,
                       options: {
                         presets: ['@babel/env', '@babel/react'],
                         plugins: ["@babel/plugin-proposal-class-properties"]
                       }
                   },
                   {
                    // Лоадеры для обработки CSS файлов
                    test: /\.css$/,
                    loader: 'style-loader!css-loader',
                },
               ],
           }, 
    //Добавляем html
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
      ],
      resolve: {
      extensions: [".jsx", ".js",]
    }
 };
