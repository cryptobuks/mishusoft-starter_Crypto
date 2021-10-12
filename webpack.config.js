/**
 * Call node path module.
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Mishusoft System Inc <products@mishusoft.com>
 * @copyright  2021 Mishusoft System Inc (ABN 77 084 670 600)
 **/
``

const path = require('path')
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const JavaScriptObfuscator = require('webpack-obfuscator')


const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
//const HtmlWebpackPlugin = require('html-webpack-plugin') /* webpack 5 */

const FontPreloadPlugin = require("webpack-font-preload-plugin");


const commonConfig = {
    mode: 'production',
    context: path.join(__dirname, './sources'),
    module: {
        rules: [
            // compile sass, scss file
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    // Minify compiled css files.
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS.
                    'css-loader',
                    // Load postcss.
                    'postcss-loader',
                    // Compiles Sass to CSS.
                    'sass-loader'
                ]
        },
            //compile images
            {
                test: /\.(png|jpg|gif)$/, /* test: /\.(svg|png|jpg|gif)$/, */
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]'
                },
        },
            //compile webfonts
            {
                test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: '../webfonts/[name].[hash][ext][query]'
                },
        },
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    //externals: 'lodash',
    plugins: [
        new CleanWebpackPlugin(),
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new FontPreloadPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ /*copy webfonts file from sources directory*/
                from: path.join(__dirname, './storages/app/webfonts/'),
                to: path.join(__dirname, './storages/app/assets/webfonts/')
            }, { /*copy media from sources directory*/
                from: path.join(__dirname, './sources/Assets/media/'),
                to: path.join(__dirname, './storages/app/media/')
            }, { /*copy core css from compiled directory*/
                from: path.join(__dirname, './storages/app/assets/css/embedded.css'),
                to: path.join(__dirname, './storages/framework/views/css/embedded.css')
            }, { /*copy default logos from compiled directory*/
                from: path.join(__dirname, './storages/app/media/logos/'),
                to: path.join(__dirname, './storages/framework/views/logos/')
            }, { /*copy social logos from compiled directory*/
                from: path.join(__dirname, './storages/app/media/images/icons/social-media/'),
                to: path.join(__dirname, './storages/framework/views/images/icons/social-media/')
            },]
        }),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ],
}

const commonFileConfig = {
    ...commonConfig,
    entry: {
        // CSS bundlers

        // Runtime libraries
        webfonts: './Assets/sass/webfonts.scss',
        colors: './Assets/sass/includes/common/colors.scss',


        //Stylesheet for application loader
        loader: './Assets/sass/loader.scss',


        // Stylesheet for embedded application support
        embedded: './Assets/sass/embedded.scss',
        resources: './Assets/sass/resources.scss',

        /**
         * Stylesheet for themes
         */
        'mishusoft-theme': './Assets/sass/theme-mishusoft.scss',



        // Typescripts bundlers

        // Analyzers (browser and activity) framework
        browser: './Assets/typescripts/mishusoft/browser.ts',
        monitor: './Assets/typescripts/tracker.ts',

        // Worker (Web Service) framework
        sw: './Assets/typescripts/service-worker.ts', /*build serviceworker module for background mode support*/



        // Ui builders framework
        installer: './Assets/typescripts/installer.ts',


        // Preloader manager framework
        readystate: './Assets/typescripts/readystate.ts',


        // Core framework (Javascript and Stylesheet)
        framework: ['./Assets/typescripts/app.ts', './Assets/sass/app.scss',],
        framework_v3: ['./Assets/typescripts/app-v3.ts', './Assets/sass/app-v3.scss'],
        framework_v4: ['./Assets/typescripts/app-v4.ts', './Assets/sass/app-v4.scss'],
    },
    output: {
        path: path.join(__dirname, './storages/app/assets'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].runtime.bundle.js',
        library: 'MishusoftRuntime',
        scriptType: 'module',
        clean: true
    }
}

const prodConfig = {
    ...commonFileConfig,
    module: {
        rules: [
            ...commonFileConfig.module.rules,
            {
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                test: /\.tsx?$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'production',
                            debug: false
                        },
                        verbose: false
                    }
                }],
                exclude: /node_modules/
        }
        ]
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new CssMinimizerPlugin()
        ],
    },
    plugins: [
        ...commonFileConfig.plugins,
        new JavaScriptObfuscator({
            rotateStringArray: true
        })
    ]
}

const testConfig = {
    ...commonFileConfig,
    name: 'tests',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            ...commonFileConfig.module.rules,
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'development',
                            debug: true
                        },
                        verbose: false
                    }
                }],
                exclude: /node_modules/
        }
        ]
    }
}

module.exports = (env) => {
    const configs = []
    if (env && env.target === 'production') {
        configs.push({...prodConfig, name: 'production'})
    } else {
        configs.push({...testConfig, name: 'development'})
    }

    return configs
}
