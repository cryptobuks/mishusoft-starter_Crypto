/**
 * Call node path module.
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Mishusoft System Inc <products@mishusoft.com>
 * @copyright  2021 Mishusoft System Inc (ABN 77 084 670 600)
 **/

const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const FontPreloadPlugin = require("webpack-font-preload-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyAdvancedPlugin = require("./sources/Utils/plugins/copy-advanced-webpack-plugin/src/index");
//const HelloWorldPlugin = require("./sources/Utils/hello-world-webpack-plugin");


const commonConfig = {
    mode: 'production',
    context: path.join(__dirname, './sources'),
    module: {
        rules: [
            {
                // compile sass, scss file
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
            {
                //compile images
                test: /\.(png|jpe?g|gif)$/, /* test: /\.(svg|png|jpg|gif)$/, */
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]'
                },
        },
            {
                //compile webfonts
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
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ["gifsicle", {interlaced: true}],
                    ["jpegtran", {progressive: true}],
                    ["optipng", {optimizationLevel: 5}],
                ],
            },
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { /*copy webfont files from sources directory*/
        //             from: path.join(__dirname, './storages/app/webfonts/'),
        //             to({ context, absoluteFilename }){
        //                 const frameworkViewFontsPath = path.join(__dirname, './storages/framework/views/webfonts');
        //                 if (/SairaStencilOne-Regular/.test(absoluteFilename)) {
        //                     /*copying to framework fonts directory*/
        //                     return Promise.resolve(
        //                         path.join(frameworkViewFontsPath, './SairaStencilOne-Regular.[contenthash][ext]')
        //                     );
        //                 }
        //                 /*copying to app assets directory*/
        //                 return Promise.resolve(path.join(__dirname, './storages/app/assets/webfonts'));
        //             },
        //     },
        //         { /*copy webfont files from sources directory*/
        //             from: path.join(__dirname, './sources/Assets/media/'),
        //             to({ context, absoluteFilename }){
        //                 const frameworkMediaPath = path.join(__dirname, './storages/framework/views');
        //                 if (/logos/.test(absoluteFilename)) {
        //                     if (/default/.test(absoluteFilename)) {
        //                         /*copying to default directory*/
        //                         return Promise.resolve(
        //                             path.join(frameworkMediaPath, './logos/default/[name][ext]')
        //                         );
        //                     }
        //                     /*copying to uncompressed directory*/
        //                     return Promise.resolve(
        //                         path.join(frameworkMediaPath, './logos/[name][ext]')
        //                     );
        //                 }
        //                 if (/social-media/.test(absoluteFilename)) {
        //                     /*copying to uncompressed directory*/
        //                     return Promise.resolve(
        //                         path.join(frameworkMediaPath, './images/icons/social-media/[name][ext]')
        //                     );
        //                 }
        //                 /*copying to app assets directory*/
        //                 return Promise.resolve(path.join(__dirname, './storages/app/media'));
        //             },
        //     },
        //         { /*copy stylesheet files from compiled assets directory*/
        //             from: path.join(__dirname, './storages/app/assets/css/'),
        //             to({ context, absoluteFilename }){
        //                 const frameworkStylesheetPath = path.join(__dirname, './storages/framework/views/css');
        //                 if (/(embedded|resources|webfonts|colors|loader)/.test(absoluteFilename)) {
        //                     /*copying to uncompressed directory*/
        //                     return Promise.resolve(
        //                         path.join(frameworkStylesheetPath, './[name][ext]')
        //                     );
        //                 }
        //                 /*copying to app assets directory*/
        //                 return Promise.resolve(path.join(__dirname, './backup'));
        //             },
        //     },
        //         { /*copy social logos from compiled directory*/
        //             from: path.join(__dirname, './storages/app/assets/js/loader.js'),
        //             to: path.join(__dirname, './storages/framework/views/js/loader.js')
        //     },
        //     ]
        // }),
        new CopyAdvancedPlugin({
            patterns : [
                { /*copy webfont files from sources directory*/
                    from: path.join(__dirname, './storages/app/webfonts/'),
                    to({ context, absoluteFilename }){
                        const frameworkViewFontsPath = path.join(__dirname, './storages/framework/views/webfonts');
                        if (/SairaStencilOne-Regular/.test(absoluteFilename)) {
                            /*copying to framework fonts directory*/
                            return Promise.resolve(
                                path.join(frameworkViewFontsPath, './SairaStencilOne-Regular.[contenthash][ext]')
                            );
                        }
                        /*copying to app assets directory*/
                        return Promise.resolve(path.join(__dirname, './storages/app/assets/webfonts'));
                    },
                },
                { /*copy webfont files from sources directory*/
                    from: path.join(__dirname, './sources/Assets/media/'),
                    to({ context, absoluteFilename }){
                        const frameworkMediaPath = path.join(__dirname, './storages/framework/views');
                        if (/logos/.test(absoluteFilename)) {
                            if (/default/.test(absoluteFilename)) {
                                /*copying to default directory*/
                                return Promise.resolve(
                                    path.join(frameworkMediaPath, './logos/default/[name][ext]')
                                );
                            }
                            /*copying to uncompressed directory*/
                            return Promise.resolve(
                                path.join(frameworkMediaPath, './logos/[name][ext]')
                            );
                        }
                        if (/social-media/.test(absoluteFilename)) {
                            /*copying to uncompressed directory*/
                            return Promise.resolve(
                                path.join(frameworkMediaPath, './images/icons/social-media/[name][ext]')
                            );
                        }
                        /*copying to app assets directory*/
                        return Promise.resolve(path.join(__dirname, './storages/app/media'));
                    },
                },
                { /*copy stylesheet files from compiled assets directory*/
                    from: path.join(__dirname, './storages/app/assets/css/'),
                    to({ context, absoluteFilename }){
                        const frameworkStylesheetPath = path.join(__dirname, './storages/framework/views/css');
                        if (/(embedded|resources|webfonts|colors|loader)/.test(absoluteFilename)) {
                            /*copying to uncompressed directory*/
                            return Promise.resolve(
                                path.join(frameworkStylesheetPath, './[name][ext]')
                            );
                        }
                        /*copying to app assets directory*/
                        return Promise.resolve(path.join(__dirname, './backup'));
                    },
                },
                { /*copy social logos from compiled directory*/
                    from: path.join(__dirname, './storages/app/assets/js/loader.js'),
                    to: path.join(__dirname, './storages/framework/views/js/loader.js')
                },
            ]
        }),
        //new HelloWorldPlugin({ options: true })
    ],
}

const commonFileConfig = {
    ...commonConfig,
    entry: {
        // CSS bundlers

        // Runtime libraries
        webfonts: './Assets/sass/webfonts.scss',
        colors: './Assets/sass/includes/common/colors.scss',


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

        //application loader
        loader: ['./Assets/typescripts/loader.ts','./Assets/sass/loader.scss'],
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
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                }, {
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
    }
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
