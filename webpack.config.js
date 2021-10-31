/**
 * Webpack configuration file for build and publish
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Al-Amin Ahamed <alamin.rohita@hotmail.com>
 * @copyright  2021 Al-Amin Ahamed
 **/

const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const FontPreloadPlugin = require("webpack-font-preload-plugin");
const webpack = require("webpack");

module.exports = (env) => {
    const sourceAssetsPath = path.resolve(__dirname, "./sources/Assets");
    const sourceImagesPath = path.join(sourceAssetsPath, "./media/images");
    const storageAssetsPath = path.resolve(__dirname, "./storages/app/assets");
    const frameworkViewPath = path.resolve(__dirname, "./storages/framework/views");

    // Default common configuration for all product
    const commonConfiguration = (product) => {
        return {
            mode: "production",
            context: path.join(__dirname, "./sources"),
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
                            "css-loader",
                            // postcss Loader.
                            "postcss-loader",
                            // Compiles Sass to CSS.
                            "sass-loader",
                        ],
                    },
                    {
                        //compile images
                        test: /\.(png|jpe?g|gif)$/ /* test: /\.(svg|png|jpg|gif)$/, */,
                        type: "asset/resource",
                        generator: {
                            filename: "images/[name][ext][query]",
                        },
                    },
                    {
                        //compile webfonts
                        test: /\.(ttf|otf|eot|svg|woff2?)$/,
                        // type: "asset/inline",
                        type: "asset/resource",
                    },
                ],
            },
            resolve: {
                // Add `.ts` and `.tsx` as a resolvable extension.
                extensions: [".tsx", ".ts", ".js"],
            },
            // Add target
            target: ["web", "browserslist"],
            plugins: [
                new webpack.ProgressPlugin(),
                new RemoveEmptyScriptsPlugin(),
                new MiniCssExtractPlugin({
                    filename: `${product === "webfonts" ? "" : "css/"}[name].css`,
                    chunkFilename: `${product === "webfonts" ? "" : "css/"}[id].css`,
                }),
                new FontPreloadPlugin(),
            ],
        };
    };

    // Default entries and output configuration for all product
    const commonFilesConfiguration = (product) => {
        return {
            entry: {
                // Runtime libraries
                colors: "./Assets/sass/includes/common/colors.scss",
            },
            output: {
                // path: path.join(__dirname, "./storages/app/assets"), // The output directory as an absolute path.
                filename: "js/[name].js", // js/filename.js
                chunkFilename: (info) => {
                    // js/[name].runtime.bundle.js
                    // js/filename.runtime.bundle.js
                    // console.log(pathinfo);
                    if (typeof info.chunk.id === "number") {
                        return `js/${info.chunk.id}.runtime.bundle.js`;
                    } else {
                        let filename = info.chunk.id.replace("Assets_typescripts_", "").replace("_ts", "").replace(/\_/g, ".");
                        return `js/${filename}.runtime.bundle.js`;
                    }
                },
                // hotUpdateChunkFilename: "js/[name].[fullhash].hot-update.js", // js/filename.[fullhash].hot-update.js
                assetModuleFilename: (info) => {
                    //"webfonts/[name][ext]", // webfonts/filename.(ttf|oet|woff|woff2)
                    if (product === "webfonts") {
                        return info.filename.replace("Assets/webfonts/", "");
                    } else {
                        return info.filename.replace("Assets/", "");
                    }
                },
                // library: "MishusoftRuntime",
                scriptType: "module", // This option allows loading asynchronous chunks with a custom script type, such as <script type="module" ...>.
                clean: true, // Clean the output directory before emit.
                //iife: true, // Tells webpack to add IIFE wrapper around emitted code.
                //module: true, // future version will be added
                strictModuleErrorHandling: true, //Handle error in module loading as per EcmaScript Modules spec at a performance cost.
            },
        };
    };

    // Default production configuration for all product
    const productionConfiguration = {
        module: {
            rules: [
                {
                    // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                            },
                        },
                        {
                            loader: "webpack-preprocessor-loader",
                            options: {
                                params: {
                                    ENV: "production",
                                    debug: false,
                                },
                                verbose: false,
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserJSPlugin({
                    parallel: true,
                }),
                new CssMinimizerPlugin({
                    parallel: true,
                }),
            ],
        },
        plugins: [
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran", { progressive: true }],
                        ["optipng", { optimizationLevel: 5 }],
                    ],
                },
            }),
        ],
    };

    // Default test configuration for all product
    const testConfiguration = {
        name: "tests",
        mode: "development",
        devtool: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                            },
                        },
                        {
                            loader: "webpack-preprocessor-loader",
                            options: {
                                params: {
                                    ENV: "development",
                                    debug: true,
                                },
                                verbose: false,
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
            ],
        },
    };

    // Common configuration for applications
    const applicationCommonConfiguration = {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        /*copy webfont files from sources directory*/
                        from: path.join(sourceAssetsPath, "./media"),
                        to: path.join(storageAssetsPath, "../media"),
                    },
                ],
            }),
        ],
    };

    // Common configuration for framework
    const frameworkCommonConfiguration = {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        /*copy webfont files from sources directory*/
                        from: path.join(sourceImagesPath, "./icons/social-media"),
                        to: path.join(frameworkViewPath, "./images/icons/social-media"),
                    },
                    {
                        /*copy webfont files from sources directory*/
                        from: path.join(sourceImagesPath, "./icons/default"),
                        to: path.join(frameworkViewPath, "./images/icons"),
                    },
                    {
                        /*copy webfont files from sources directory*/
                        from: path.join(sourceAssetsPath, "./media/logos"),
                        to: path.join(frameworkViewPath, "./logos"),
                    },
                ],
            }),
        ],
    };

    // Entries and output configuration for applications
    const applicationFilesConfiguration = (product) => {
        return {
            entry: {
                ...commonFilesConfiguration(product).entry,
                // Stylesheet for themes
                "themes/mishusoft": "./Assets/sass/themes/mishusoft.scss",

                // Typescripts bundlers

                // Analyzers (browser and activity) framework
                browser: "./Assets/typescripts/mishusoft/browser.ts",
                monitor: "./Assets/typescripts/tracker.ts",

                // Worker (Web Service) framework
                // sw: "./Assets/typescripts/service-worker.ts" /*build serviceworker module for background mode support*/,

                // Ui builders framework
                installer: "./Assets/typescripts/installer.ts",

                // Preloader manager framework
                readystate: "./Assets/typescripts/readystate.ts",

                // Core framework (Javascript and Stylesheet)
                "framework/current": ["./Assets/typescripts/app.ts", "./Assets/sass/app.scss"],
                "framework/v4": ["./Assets/typescripts/app-v4.ts", "./Assets/sass/app-v4.scss"],
                "framework/v3": ["./Assets/typescripts/app-v3.ts", "./Assets/sass/app-v3.scss"],

                //application loader
                loader: ["./Assets/typescripts/loader.ts", "./Assets/sass/loader.scss"],
            },
            output: {
                path: path.resolve(__dirname, "./storages/app/assets"),
                ...commonFilesConfiguration(product).output,
            },
        };
    };

    // Entries and output configuration for framework
    const frameworkFilesConfiguration = (target) => {
        return {
            ...frameworkCommonConfiguration,
            entry: {
                ...commonFilesConfiguration(target).entry,
                embedded: "./Assets/sass/embedded.scss",
                resources: "./Assets/sass/resources.scss",

                //application loader
                loader: ["./Assets/typescripts/loader.ts", "./Assets/sass/loader.scss"],
            },
            output: {
                path: path.resolve(__dirname, "./storages/framework/views"),
                ...commonFilesConfiguration(target).output,
            },
        };
    };

    // Entries and output configuration for webfonts
    const webfontsFilesConfiguration = (product, target) => {
        if (target === "app") {
            return {
                entry: {
                    "noto-sans": "./Assets/webfonts/noto-sans.scss",
                    "saira-stencil-one": "./Assets/webfonts/saira-stencil-one.scss",
                    "solaiman-lipi": "./Assets/webfonts/solaiman-lipi.scss",
                    "source-sans-pro": "./Assets/webfonts/source-sans-pro.scss",
                },
                output: {
                    path: path.resolve(__dirname, "./storages/app/assets/webfonts"),
                    ...commonFilesConfiguration(product).output,
                },
            };
        } else {
            return {
                entry: {
                    "saira-stencil-one": "./Assets/webfonts/saira-stencil-one.scss",
                },
                output: {
                    path: path.resolve(__dirname, "./storages/framework/views/webfonts"),
                    ...commonFilesConfiguration(product).output,
                },
            };
        }
    };

    const dynamicConfigurationAll = (_default, _additional, product, workflow) => {
        return {
            ..._default, // default configuration for dynamic product
            ..._additional, // additional configuration for dynamic product
            module: {
                rules: [
                    ..._default.module.rules, // default rules for dynamic product
                    ..._additional.module.rules, // additional rules for dynamic product
                ],
            },
            plugins:
                typeof _additional.plugins === "undefined"
                    ? [
                          ..._default.plugins, // default plugins for dynamic product
                      ]
                    : [
                          ..._default.plugins, // default plugins for dynamic product
                          ..._additional.plugins, // additional plugins for dynamic product
                      ],
            name: `${product}-${workflow}`, // workflow name for dynamic product
        };
    };

    // Webpack compiler assistant
    const webpackRun = (environment) => {
        let configuration = {};
        const { product, mode, target } = environment;

        // all common configuration
        const _default = commonConfiguration(product);

        if (product === "app") {
            // create default configuration for application
            const defaultConfiguration = {
                ..._default, // all common configuration
                ...applicationCommonConfiguration, // app common configuration
                ...applicationFilesConfiguration(product), // app files configuration
                plugins: [
                    ..._default.plugins, // all common plugins
                    ...applicationCommonConfiguration.plugins, // app common plugins
                ],
            };

            if (mode === "production") {
                configuration = dynamicConfigurationAll(defaultConfiguration, productionConfiguration, "application", "production");
            } else {
                configuration = dynamicConfigurationAll(defaultConfiguration, testConfiguration, "application", "build");
            }
        } else if (product === "framework") {
            // create default configuration for framework
            const defaultConfiguration = {
                ..._default, // all common configuration
                ...frameworkCommonConfiguration, // framework common configuration
                ...frameworkFilesConfiguration(product), // framework files configuration
                plugins: [
                    ..._default.plugins, // all common plugins
                    ...frameworkCommonConfiguration.plugins, // framework common plugins
                ],
            };

            if (mode === "production") {
                configuration = dynamicConfigurationAll(defaultConfiguration, productionConfiguration, "framework", "production");
            } else {
                configuration = dynamicConfigurationAll(defaultConfiguration, testConfiguration, "framework", "build");
            }
        } else if (product === "webfonts") {
            // create default configuration for framework
            const defaultConfiguration = {
                ..._default, // all common configuration
                ...webfontsFilesConfiguration(product, target), // webfonts files configuration
            };

            if (mode === "production") {
                configuration = dynamicConfigurationAll(defaultConfiguration, productionConfiguration, "webfonts", "production");
            } else {
                configuration = dynamicConfigurationAll(defaultConfiguration, testConfiguration, "webfonts", "build");
            }
        } else {
            console.error("Please set `product` value with environment variable");
        }

        return configuration;
    };

    if (Object.keys(env).includes("product")) {
        return webpackRun({
            product: env.product,
            mode: env.mode,
            target: env.target,
        });
    }

    return webpackRun({ product: "app", mode: "development" });
};
