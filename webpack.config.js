/**
 * Call node path module.
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Mishusoft System Inc <products@mishusoft.com>
 * @copyright  2021 Mishusoft System Inc (ABN 77 084 670 600)
 **/

const path = require('path');

const CopyWebpackPlugin       = require('copy-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); /*webpack 4*/
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); /*webpack 5*/
const TerserJSPlugin          = require('terser-webpack-plugin');
const {CleanWebpackPlugin}    = require('clean-webpack-plugin');
const JavaScriptObfuscator    = require('webpack-obfuscator');

//const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries"); /*webpack 4*/
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HtmlWebpackPlugin = require("html-webpack-plugin"); /*webpack 5*/

/*required path declare*/
const DOCUMENT_ROOT    = path.resolve(__dirname);
const WEBPACK_SRC_ROOT = path.join(DOCUMENT_ROOT, './Sources');

/*static sources destinations*/
const WEBPACK_STATIC_ASSETS_SRC_ROOT = path.join(DOCUMENT_ROOT, './Sources/Assets');
/* const WEBPACK_STATIC_MEDIA_SRC_ROOT = path.join(DOCUMENT_ROOT, './Sources/Assets/media');*/
/*webpack output destinations*/
/*export direct to production*/
const ASSETS_PATH = path.join(DOCUMENT_ROOT, './storages/app/assets');
/*const MEDIA_PATH = path.join(DOCUMENT_ROOT, './Storages/0/media');*/

const commonConfig = {
    mode: 'production',
    context: WEBPACK_SRC_ROOT,
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    // Minify compiled css files.
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS.
                    "css-loader",
                    // Load postcss.
                    "postcss-loader",
                    // Compiles Sass to CSS.
                    "sass-loader",
                ]},
            {
                test: /\.(png|jpg|gif)$/, /*test: /\.(svg|png|jpg|gif)$/,*/
                use: {
                    loader: 'file-loader',
                    options: {
                        // Set output file name.
                        name: '[name].[ext]',
                        // Set output directory.
                        outputPath: 'images/'
                    }
                }},
            {
                test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../webfonts/'
                    }
                }}]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    /*externals: nodeModules,*/
    plugins: [
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin(
            {
                patterns: [
                /*copy webfonts file from sources directory*/
                {from: WEBPACK_STATIC_ASSETS_SRC_ROOT + '/webfonts/', to: ASSETS_PATH + '/webfonts/[name].[ext]'},
                ]
            }
        ),
        /*webpack 4*/
        //new FixStyleOnlyEntriesPlugin(),
        /*webpack 5*/
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].css',
                chunkFilename: 'css/[id].css'
            }
        ),

        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],

    //Enable debug mode
    stats: {
        preset: 'normal',
        errorDetails: true,
        colors: true,
    },
    devServer: {
        contentBase: [path.join(DOCUMENT_ROOT, 'public_html_themes'),path.join(DOCUMENT_ROOT, 'assets'),],
        compress: true,
        port: 9000,
        stats: 'errors-only',
    },
}

const commonFileConfig = {
    ...commonConfig,
    entry: {

        // Themes developments
        index: './Assets/themes/index.js',

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
        'browser': ['./Assets/typescripts/browser.ts'],

        /**
         * Javascript serviceworker framework
         */
        'pwa': ['./Assets/typescripts/pwa.ts'], /*build serviceworker module for background mode support*/
        'sw': ['./Assets/typescripts/service-worker.ts'], /*build serviceworker module for background mode support*/

        /**
         * Javascript framework for application
         */

        'installer': ['./Assets/typescripts/installer.ts'], /*build mishusoft installer module for installation mode support*/

        'app-js': ['./Assets/typescripts/mishusoft.ts',/*'./Assets/sass/themes/mishusoft.scss'*/], /*build mishusoft css framework supporter module for ui support*/
        'app-js-v3': ['./Assets/typescripts/runtime/v3.ts',/*'./Assets/sass/v3/v3.scss'*/],/*build js and stylesheet v3 module for application support*/
        'app-js-v4': ['./Assets/typescripts/runtime/v4.ts',/*'./Assets/sass/v4/v4.scss'*/], /*build js and  stylesheet v4 module for application support*/

        /**
         * Special javascript framework for application
         */

        'monitor': ['./Assets/typescripts/tracker.ts'], /*build monitor module for monitor visitor's activities*/
        'emergency': ['./Assets/typescripts/runtime/v3/emergency.ts'], /*build emergency module for emergency mode support*/



        // CSS developments
        /**
         * CSS framework for application
         */
        /**
         * Build stylesheet for embedded application support
         */
        'app': [
            './Assets/sass/common/font-face.scss',
            './Assets/sass/common/colors.scss',
            './Assets/sass/app.scss',
        ],

        /**
         * Build stylesheet v3 module for application support
         */
        'app-ui-v3': [
            './Assets/sass/common/colors.scss',
            './Assets/sass/v3/v3.scss',
            './Assets/sass/v3/common.scss',
            './Assets/sass/v3/includes.scss',
            './Assets/sass/v3/runtime-includes.scss',
            './Assets/sass/v3/backup-old.version.scss',
        ],

        /**
         * Build stylesheet v4 module for application support
         */
        'app-ui-v4': [
            './Assets/sass/common/colors.scss',
            './Assets/sass/v4/v4.scss',
            './Assets/sass/v4/common.scss',
            './Assets/sass/v4/includes.scss',
            './Assets/sass/v4/runtime-includes.scss',
            './Assets/sass/v4/backup-old.version.scss',
        ],

        /**
         * Build mishusoft theme css framework supporter module for ui support
         */
        'mishusoft-theme': [
            './Assets/sass/themes/mishusoft.scss',
            './Assets/sass/themes/mishusoft/responsive.scss',
        ],
        /**
         * Build font face css framework supporter module for ui support
         */
        'font-face': [
            './Assets/sass/common/font-face.scss',
        ],
        /**
         * Build font face css framework supporter module for ui support
         */
        'colors': [
            './Assets/sass/common/colors.scss',
        ],


    },
    output: {
        path: ASSETS_PATH,
        filename: 'js/[name].js',
        clean: true,
    }
};

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
                },],
                exclude: /node_modules/
        },
        ]
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            //new OptimizeCSSAssetsPlugin({}), /*webpack 4*/
            new CssMinimizerPlugin(), /*webpack 5*/
        ]
    },
    plugins: [
        ...commonFileConfig.plugins,
        new JavaScriptObfuscator(
            {
                rotateStringArray: true
            }
        )
    ]
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
                            debug: true
                        },
                        verbose: false
                    }
                },],
                exclude: /node_modules/
        },
        ]
    }
}

module.exports  = (env) => {
    let configs = []
    if (env && env.target === 'production') {
        configs.push({...prodConfig, name: 'production'})
    } else {
        configs.push({...testConfig, name: 'development'})
    }

    return configs;
};