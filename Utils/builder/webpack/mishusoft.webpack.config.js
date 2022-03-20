/**
 * Webpack's configuration file for build and publish
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Al Amin Ahamed <alamin.rohita@hotmail.com>
 * @copyright  2021 Al Amin Ahamed
 **/

// External dependencies
const { resolve, join } = require("path");
const { ProgressPlugin, Configuration } = require("webpack");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
// const FontPreloadPlugin = require("webpack-font-preload-plugin");

const PROJECT_ROOT = resolve(__dirname, "../../../");

module.exports = (env, filesList) => {
    // Required directories list
    const sourceAssetsPath = join(PROJECT_ROOT, "./resources");
    const sourceImagesPath = join(sourceAssetsPath, "./media/images");
    const storageAssetsPath = join(PROJECT_ROOT, "./storages/resource/assets");
    const frameworkAssetsPath = join(PROJECT_ROOT, "./storages/resource/framework");

    // Plugin process set to parallel
    const jobQueue = {
        parallel: true,
    };

    // ts loader default configuration
    const tsLoaderDefaultConfig = {
        loader: "ts-loader",
        options: {
            transpileOnly: true,
        },
    };

    // Default common configuration for all product
    const __common = (product) => {
        return {
            mode: "production",
            context: sourceAssetsPath,
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
                // resolve alias path
                alias: {
                    "@/resources": resolve(PROJECT_ROOT, "./resources/"),
                },
            },
            // Add target
            target: ["web", "browserslist"],
            plugins: [
                new ProgressPlugin(),
                new RemoveEmptyScriptsPlugin(),
                new MiniCssExtractPlugin({
                    filename: `${product === "webfonts" ? "" : "css/"}[name].css`,
                    chunkFilename: `${product === "webfonts" ? "" : "css/"}[id].css`,
                }),
                // new FontPreloadPlugin(), // make comment in for current development
            ],
            optimization: {
                chunkIds: "named",
            },
            experiments: {
                // lazyCompilation: true,
                outputModule: true,
            },
        };
    };

    // Default entries and output configuration for all product
    const __commonFiles = (product) => {
        return {
            // Runtime libraries
            entry: filesList.common,
            output: {
                // path: join(__dirname, "./storages/app/assets"), // The output directory as an absolute path.
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
                hotUpdateChunkFilename: "js/[name].[fullhash].hot-update.js", // js/filename.[fullhash].hot-update.js
                assetModuleFilename: (info) => {
                    //"webfonts/[name][ext]", // webfonts/filename.(ttf|oet|woff|woff2)
                    if (product === "webfonts") {
                        return info.filename.replace("webfonts/", "");
                    }
                    /*else {
                        return info.filename.replace("Assets/", "");
                    }*/
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

    const fullPath = (storage, additional) => {
        return join(storage, additional);
    };

    const sourceFullPath = (additional) => {
        return fullPath(sourceImagesPath, additional);
    };

    const frameworkAssetsFullPath = (additional) => {
        return fullPath(frameworkAssetsPath, additional);
    };

    const __commonAdditional = {
        // Common configuration for applications
        app: {
            plugins: [
                new CopyWebpackPlugin({
                    patterns: [
                        {
                            /*copy webfont files from sources directory*/
                            from: join(sourceAssetsPath, "./media"),
                            to: join(storageAssetsPath, "../media"),
                        },
                    ],
                }),
            ],
        },
        // Common configuration for framework
        framework: {
            plugins: [
                new CopyWebpackPlugin({
                    patterns: [
                        {
                            /*copy social media icons files from sources directory*/
                            from: join(sourceImagesPath, "./icons/social-media"),
                            to: join(frameworkAssetsPath, "./images/icons/social-media"),
                        },
                        {
                            /*copy icons files from sources directory*/
                            from: join(sourceImagesPath, "./icons/default"),
                            to: join(frameworkAssetsPath, "./images/icons"),
                        },
                        {
                            /*copy loader files from sources directory*/
                            from: join(sourceImagesPath, "./loaders"),
                            to: join(frameworkAssetsPath, "./images/loaders"),
                        },
                        {
                            /*copy logos files from sources directory*/
                            from: join(sourceAssetsPath, "./media/logos"),
                            to: join(frameworkAssetsPath, "./logos"),
                        },
                    ],
                }),
            ],
        },
    };

    const __entriesAndOutput = {
        // Entries and output configuration for applications
        app: (product) => {
            return {
                entry: {
                    ...__commonFiles(product).entry,
                    ...filesList.app,
                },
                output: {
                    path: resolve(PROJECT_ROOT, "./storages/resource/assets"),
                    ...__commonFiles(product).output,
                },
            };
        },
        // Entries and output configuration for framework
        framework: (product) => {
            return {
                ...__commonAdditional.framework,
                entry: {
                    ...__commonFiles(product).entry,
                    ...filesList.framework,
                },
                output: {
                    path: resolve(PROJECT_ROOT, "./storages/resource/framework"),
                    ...__commonFiles(product).output,
                },
            };
        },
        // Entries and output configuration for webfonts
        webfonts: (product, target) => {
            if (target === "app") {
                return {
                    entry: filesList.webfonts,
                    output: {
                        path: resolve(PROJECT_ROOT, "./storages/resource/assets/webfonts"),
                        ...__commonFiles(product).output,
                    },
                };
            } else {
                // Destruct file from repository
                const { "saira-stencil-one": SairaStencilOne } = filesList.webfonts;

                return {
                    entry: { "saira-stencil-one": SairaStencilOne },
                    output: {
                        path: resolve(PROJECT_ROOT, "./storages/resource/framework/webfonts"),
                        ...__commonFiles(product).output,
                    },
                };
            }
        },
    };

    const __defaultPlay = {
        // Default production configuration for all product
        production: {
            module: {
                rules: [
                    {
                        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                        test: /\.tsx?$/,
                        use: [
                            tsLoaderDefaultConfig,
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
                minimizer: [new TerserJSPlugin(jobQueue), new CssMinimizerPlugin(jobQueue)],
            },
            plugins: [
                // https://www.npmjs.com/package/npm-check-updates
                // https://github.com/raineorshine/npm-check-updates
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminMinify,
                        options: {
                            // Lossless optimization with custom option
                            // Feel free to experiment with options for better result for you
                            plugins: [
                                ["gifsicle", { interlaced: true }],
                                ["jpegtran", { progressive: true }],
                                ["optipng", { optimizationLevel: 5 }],
                            ],
                        },
                    },
                }),
            ],
        },
        // Default development configuration for all product
        development: {
            name: "tests",
            mode: "development",
            devtool: "inline-source-map",
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: [
                            tsLoaderDefaultConfig,
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
        },
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
            optimization:
                typeof _additional.optimization === "undefined"
                    ? {
                          ..._default.optimization, // default optimization for dynamic product
                      }
                    : {
                          ..._default.optimization, // default optimization for dynamic product
                          ..._additional.optimization, // additional optimization for dynamic product
                      },
            name: `${product}-${workflow}`, // workflow name for dynamic product
        };
    };

    // Webpack compiler assistant
    /**
     * @param {{mode, product, target}} environment
     * @return Configuration
     */
    const webpackRun = (environment) => {
        const { product, mode, target } = environment;
        const { production, development } = __defaultPlay;

        // all common configuration
        const _default = __common(product);
        let configuration = _default;

        if (product === "app") {
            // create default configuration for application
            const __default = {
                ..._default, // all common configuration
                ...__commonAdditional.app, // app common configuration
                ...__entriesAndOutput.app(product), // app files configuration
                plugins: [
                    ..._default.plugins, // all common plugins
                    ...__commonAdditional.app.plugins, // app common plugins
                ],
            };

            if (mode === "production") {
                configuration = dynamicConfigurationAll(__default, production, "application", "production");
            } else {
                configuration = dynamicConfigurationAll(__default, development, "application", "build");
            }
        } else if (product === "framework") {
            // create default configuration for framework
            const __default = {
                ..._default, // all common configuration
                ...__commonAdditional.framework, // framework common configuration
                ...__entriesAndOutput.framework(product), // framework files configuration
                plugins: [
                    ..._default.plugins, // all common plugins
                    ...__commonAdditional.framework.plugins, // framework common plugins
                ],
            };

            if (mode === "production") {
                configuration = dynamicConfigurationAll(__default, production, "framework", "production");
            } else {
                configuration = dynamicConfigurationAll(__default, development, "framework", "build");
            }
        } else if (product === "webfonts") {
            // create default configuration for framework
            const __default = {
                ..._default, // all common configuration
                ...__entriesAndOutput.webfonts(product, target), // webfonts files configuration
            };

            if (mode === "production") {
                configuration = dynamicConfigurationAll(__default, production, "webfonts", "production");
            } else {
                configuration = dynamicConfigurationAll(__default, development, "webfonts", "build");
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
