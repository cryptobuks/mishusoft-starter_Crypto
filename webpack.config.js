const path = require('path');

/*required path declare*/
const MS_DOCUMENT_ROOT = path.resolve(__dirname);
const MS_WEBPACK_SRC_ROOT = path.join(MS_DOCUMENT_ROOT, './Sources');

/*static sources destinations*/
const MS_WEBPACK_STATIC_ASSETS_SRC_ROOT = path.join(MS_DOCUMENT_ROOT, './Sources/Assets');
const MS_WEBPACK_STATIC_MEDIA_SRC_ROOT = path.join(MS_DOCUMENT_ROOT, './Sources/Assets/media');

/*webpack output destinations*/
/*export direct to production*/
const MS_ASSETS_PATH = path.join(MS_DOCUMENT_ROOT, './Storages/0/assets');
const MS_MEDIA_PATH = path.join(MS_DOCUMENT_ROOT, './Storages/0/media');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries"); /*webpack 4*/
//const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts'); /*webpack 5*/


const commonConfig = {
    mode: 'production',
    context: MS_WEBPACK_SRC_ROOT,
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    //minify compiled css files
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // load postcss
                    "postcss-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif)$/, /*test: /\.(svg|png|jpg|gif)$/,*/
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]', //set output file name
                        outputPath: 'images/' //set output directory
                    }
                }
            },
            {
                test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../webfonts/'
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    /*externals: nodeModules,*/
    plugins: [
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                /*copy webfonts file from sources directory*/
                {from: MS_WEBPACK_STATIC_ASSETS_SRC_ROOT + '/webfonts/', to: MS_ASSETS_PATH + '/webfonts/[name].[ext]'},

                /*
                * copy images and others media items file from sources directory
                * these command deprecated in latest update
                * */
                // {from: MS_WEBPACK_STATIC_MEDIA_SRC_ROOT + '/images/', to: MS_MEDIA_PATH + '/images/[name].[ext]'},
                // {from: MS_WEBPACK_STATIC_MEDIA_SRC_ROOT + '/logos/', to: MS_MEDIA_PATH + '/logos/'},
                // {from: MS_WEBPACK_STATIC_MEDIA_SRC_ROOT + '/users/', to: MS_MEDIA_PATH + '/users/'},
            ]
        }),
        new FixStyleOnlyEntriesPlugin(), /*webpack 4*/
        /*new RemoveEmptyScriptsPlugin(), //webpack 5*/
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        })
    ]
}

const commonFileConfig = {
    ...commonConfig,
    entry: {
        /**
         * browser identifier javascript framework
         * Collect information of visitor's
         * <ul>
         *     <li>ip</li>
         *     <li>browser</li>
         *     <li>device</li>
         *     <li>platform</li>
         * </ul>
         * */
        'browser': ['./Assets/typescripts/browser.ts'],

        /**
         * javascript serviceworker framework
         * */
        'pwa': ['./Assets/typescripts/pwa.ts'], /*build serviceworker module for background mode support*/
        'sw': ['./Assets/typescripts/service-worker.ts'], /*build serviceworker module for background mode support*/

        /**
         * javascript framework for application
         * */

        'installer': ['./Assets/typescripts/installer.ts'], /*build mishusoft installer module for installation mode support*/

        'app-js': ['./Assets/typescripts/mishusoft.ts',/*'./Assets/sass/themes/mishusoft.scss'*/], /*build mishusoft css framework supporter module for ui support*/
        'app-js-v3': ['./Assets/typescripts/runtime/v3.ts',/*'./Assets/sass/v3/v3.scss'*/],/*build js and stylesheet v3 module for application support*/
        'app-js-v4': ['./Assets/typescripts/runtime/v4.ts',/*'./Assets/sass/v4/v4.scss'*/], /*build js and  stylesheet v4 module for application support*/

        /**
         * special javascript framework for application
         * */

        'monitor': ['./Assets/typescripts/tracker.ts'], /*build monitor module for monitor visitor's activities*/
        'emergency': ['./Assets/typescripts/runtime/v3/emergency.ts'], /*build emergency module for emergency mode support*/

        /**
         * css framework for application
         * */
        'app-ui-v3': [
            './Assets/sass/common/colors.scss',
            './Assets/sass/v3/v3.scss',
            './Assets/sass/v3/common.scss',
            './Assets/sass/v3/includes.scss',
            './Assets/sass/v3/runtime-includes.scss',
            './Assets/sass/v3/backup-old.version.scss',
        ],/*build stylesheet v3 module for application support*/


        'app-ui-v4': [
            './Assets/sass/common/colors.scss',
            './Assets/sass/v4/v4.scss',
            './Assets/sass/v4/common.scss',
            './Assets/sass/v4/includes.scss',
            './Assets/sass/v4/runtime-includes.scss',
            './Assets/sass/v4/backup-old.version.scss',
        ], /*build stylesheet v4 module for application support*/

        /**
         * build mishusoft theme css framework supporter module for ui support
         * */
        'mishusoft-theme': [
            './Assets/sass/themes/mishusoft.scss',
            './Assets/sass/themes/responsive.scss',
        ],


    },
    output: {
        path: MS_ASSETS_PATH,
        filename: 'js/[name].js'
    },
};

const prodConfig = {
    ...commonFileConfig,
    module: {
        rules: [
            ...commonFileConfig.module.rules,
            {
                test: /\.ts$/,
                use: ['ts-loader', {
                    loader: 'webpack-preprocessor-loader',
                    options: {
                        params: {
                            ENV: 'production',
                            debug: false,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        ...commonFileConfig.plugins,
        new JavaScriptObfuscator({
            rotateStringArray: true
        })
    ],
};

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
                            debug: true,
                        },
                        verbose: false,
                    },
                },],
                exclude: /node_modules/,
            },
        ]
    },
}

module.exports = (env) => {
    let configs = []
    if (env && env.target === 'production') {
        configs.push({...prodConfig, name: 'production'})
    } else {
        configs.push({...testConfig, name: 'development'})
    }

    return configs;
};