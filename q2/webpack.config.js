import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
    devtool: "source-map",
    mode: "development",
    entry: path.resolve("src/index.ts"), // DIT IS DE DEFAULT DU SMAG WEGGELATEN WORDEN
    /**
     * Wil je andere entrypoints, dan index.ts? Dat kan zo:
     *  entry: {
     *     home: path.resolve('./home.ts'),
     *     about:  path.resolve('./about.ts'),
     *     contact:  path.resolve('./contact.js'),
     *   },
     */
    plugins: [
        new HtmlWebpackPlugin({template: './src/html/index.html'}),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        hot: false,
        static: {
            directory: path.resolve("dist")
        },
        open: true,
    },
    resolve: {
        extensions: [".ts", ".js"],
        extensionAlias: {'.js': ['.js', '.ts']}
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    //"style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {test: /\.html?$/i, use: ['html-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, type: "asset"},
            {test: /\.(woff2?|eot|ttf|otf)$/i, type: "asset"}

        ]
    },
    output: {
        clean: true
    },
};

export default config;