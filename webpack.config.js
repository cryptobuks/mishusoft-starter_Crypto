/**
 * Call node path module.
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Mishusoft System Inc <products@mishusoft.com>
 * @copyright  2021 Mishusoft System Inc (ABN 77 084 670 600)
 **/``

const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const JavaScriptObfuscator = require('webpack-obfuscator')

const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
//const HtmlWebpackPlugin = require('html-webpack-plugin') /* webpack 5 */

//make web manifest file
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const FontPreloadPlugin = require("webpack-font-preload-plugin");



/* required path declare */
const DOCUMENT_ROOT = path.resolve(__dirname)
const WEBPACK_SRC_ROOT = path.join(DOCUMENT_ROOT, './Sources')

/* export direct to production */
const ASSETS_PATH = path.join(DOCUMENT_ROOT, './storages/app/assets')

const commonConfig = {
    mode: 'production',
    context: WEBPACK_SRC_ROOT,
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
        }]
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
        // new WebpackManifestPlugin({
        //     'basePath': 'assets/',
        //     'publicPath': 'assets/'
        // }),
        /*copy webfonts file from sources directory*/
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(DOCUMENT_ROOT, './storages/app/webfonts/'),
                to: path.join(DOCUMENT_ROOT, './storages/app/assets/webfonts/')
            },]
        }),
    ],
}

const commonFileConfig = {
    ...commonConfig,
    entry: {

        // Themes developments
        // index: './Assets/themes/index.js',

        // Typescripts developments
        /**
         * Browser identifier javascript framework
         * Collect information of visitor's
         * <ul>
         *     <li>ip</li>
         *     <li>browser</li>
         *     <li>device</li>
         *     <li>platform</li>
         * </ul>
         */
        browser: './Assets/typescripts/classes/browser.ts',

        /**
         * Javascript serviceworker framework
         */
        // 'pwa': ['./Assets/typescripts/pwa.ts'], /*build serviceworker module for background mode support*/
        'sw': './Assets/typescripts/trash/service-worker.ts', /*build serviceworker module for background mode support*/

        /**
         * Javascript framework for application
         */

        /* Build mishusoft installer module for installation mode support */
        'installer': './Assets/typescripts/installer.ts',

        /* Build module for runtime support */
        'readystate': './Assets/typescripts/readystate.ts',

        // 'readystate': {
        //     import: './Assets/typescripts/readystate.ts',
        //     dependOn: 'shared',
        // },

        'app-js':'./Assets/typescripts/mishusoft.ts',
        'app-js-v3': './Assets/typescripts/runtime-v3.ts',
        'app-js-v4': './Assets/typescripts/runtime-v4.ts',

        /**
         * Special javascript framework for application
         */
        /* build monitor module for monitor visitor's activities */
        monitor: './Assets/typescripts/tracker.ts',
        /* build emergency module for emergency mode support */
        // 'emergency': ['./Assets/typescripts/runtime/v3/emergency.ts'],

        // CSS developments
        /**
         * CSS framework for application
         */


        /**
         * Build font face css framework supporter module for ui support
         */
        'font-face': './Assets/sass/font-face.scss',
        /**
         * Build font face css framework supporter module for ui support
         */
        'colors': './Assets/sass/includes/common/colors.scss',


        /**
         * Build stylesheet for application loader
         */
        loader: './Assets/sass/loader.scss',


        /**
         * Build stylesheet for embedded application support
         */
        embedded: './Assets/sass/embedded.scss',
        resources: './Assets/sass/resources.scss',

        /**
         * Build stylesheet for application support
         */
        'app-ui-v3': './Assets/sass/app-v3.scss',
        'app-ui-v4': './Assets/sass/app-v4.scss',


        /**
         * Build stylesheet for themes
         */
        'mishusoft-theme': './Assets/sass/theme-mishusoft.scss',
    },
    output: {
        path: ASSETS_PATH,
        filename: 'js/[name].js',
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
            // new OptimizeCSSAssetsPlugin({}), /*webpack 4*/
            new CssMinimizerPlugin() /* webpack 5 */
        ],
    },
    plugins: [
        ...commonFileConfig.plugins,
        new JavaScriptObfuscator(
            {
                rotateStringArray: true
            }
        )
    ]
}

const testConfig = {
    ...commonFileConfig,
    name: 'tests',
    mode: 'development',
    devtool: 'source-map',
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
