const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    context: path.join(__dirname, 'src'),
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}