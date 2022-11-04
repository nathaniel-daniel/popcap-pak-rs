const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        alias: {
            svelte: path.dirname(require.resolve('svelte/package.json'))
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, ".."),
            outDir: path.resolve(__dirname, "pkg"),
        }),
        // Have this example work in Edge which doesn't ship `TextEncoder` or
        // `TextDecoder` at this time.
        new webpack.ProvidePlugin({
          TextDecoder: ['text-encoding', 'TextDecoder'],
          TextEncoder: ['text-encoding', 'TextEncoder']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: {
                            dev: !prod
                        },
                        emitCss: prod,
                        hotReload: !prod
                    }
                }
            },
            {
                // required to prevent errors from Svelte on Webpack 5+
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            }
        ],
    },
    mode,
    experiments: {
        asyncWebAssembly: true
   }
};