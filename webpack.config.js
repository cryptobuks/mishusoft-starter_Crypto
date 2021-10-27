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
  const frameworkViewPath = path.resolve(
    __dirname,
    "./storages/framework/views"
  );

  // Default common configuration for all product
  const commonConfiguration = {
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
          type: "asset/resource",
          // generator: {
          //   filename: "webfonts/[hash][ext][query]",
          // },
        },
      ],
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[id].css",
      }),
      new FontPreloadPlugin(),
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

  // Default entries and output configuration for all product
  const commonFilesConfiguration = {
    entry: {
      // Runtime libraries
      colors: "./Assets/sass/includes/common/colors.scss",
    },
    output: {
      // path: path.join(__dirname, "./storages/app/assets"), // The output directory as an absolute path.
      filename: "js/[name].js", // js/filename.js
      chunkFilename: "js/[name].runtime.bundle.js", // js/filename.runtime.bundle.js
      hotUpdateChunkFilename: "js/[name].[fullhash].hot-update.js", // js/filename.[fullhash].runhot-update.js
      assetModuleFilename: "webfonts/[name][ext]", // webfonts/filename.(ttf|oet|woff|woff2)
      // library: "MishusoftRuntime",
      scriptType: "module", // This option allows loading asynchronous chunks with a custom script type, such as <script type="module" ...>.
      clean: true, // Clean the output directory before emit.
      iife: false, // Tells webpack to add IIFE wrapper around emitted code.
      //module: true, // future version will be added
      strictModuleErrorHandling: true, //Handle error in module loading as per EcmaScript Modules spec at a performance cost.
    },
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
  };

  // Default test configuration for all product
  const testConfiguration = {
    name: "tests",
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            "ts-loader",
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
  const applicationFilesConfiguration = {
    entry: {
      ...commonFilesConfiguration.entry,
      // webfonts for application
      webfonts: "./Assets/sass/webfonts.scss",
      // Stylesheet for themes
      "theme/mishusoft": "./Assets/sass/theme-mishusoft.scss",

      // Typescripts bundlers

      // Analyzers (browser and activity) framework
      browser: "./Assets/typescripts/mishusoft/browser.ts",
      monitor: "./Assets/typescripts/tracker.ts",

      // Worker (Web Service) framework
      sw: "./Assets/typescripts/service-worker.ts" /*build serviceworker module for background mode support*/,

      // Ui builders framework
      installer: "./Assets/typescripts/installer.ts",

      // Preloader manager framework
      readystate: "./Assets/typescripts/readystate.ts",

      // Core framework (Javascript and Stylesheet)
      framework: ["./Assets/typescripts/app.ts", "./Assets/sass/app.scss"],
      framework_v3: [
        "./Assets/typescripts/app-v3.ts",
        "./Assets/sass/app-v3.scss",
      ],
      framework_v4: [
        "./Assets/typescripts/app-v4.ts",
        "./Assets/sass/app-v4.scss",
      ],

      //application loader
      loader: ["./Assets/typescripts/loader.ts", "./Assets/sass/loader.scss"],
    },
    output: {
      path: path.resolve(__dirname, "./storages/app/assets"),
      ...commonFilesConfiguration.output,
    },
  };

  // Entries and output configuration for framework
  const frameworkFilesConfiguration = {
    ...frameworkCommonConfiguration,
    entry: {
      ...commonFilesConfiguration.entry,
      webfonts: "./Assets/sass/webfonts.framework.scss",
      embedded: "./Assets/sass/embedded.scss",
      resources: "./Assets/sass/resources.scss",
    },
    output: {
      path: path.resolve(__dirname, "./storages/framework/views"),
      ...commonFilesConfiguration.output,
    },
  };

  // Webpack compiler assistant
  const webpackRun = (environment) => {
    let configuration = {};
    const { product, mode } = environment;

    if (product === "app") {
      // create default configuration for application
      const defaultConfiguration = {
        ...commonConfiguration, // all common configuration
        ...applicationCommonConfiguration, // app common configuration
        ...applicationFilesConfiguration, // app files configuration
        plugins: [
          ...commonConfiguration.plugins, // all common plugins
          ...applicationCommonConfiguration.plugins, // app common rules
        ],
      };

      if (mode === "production") {
        configuration = {
          ...defaultConfiguration, // default configuration for application
          ...productionConfiguration, // production configuration for application
          module: {
            rules: [
              ...defaultConfiguration.module.rules, // default rules for application
              ...productionConfiguration.module.rules, // production rules for application
            ],
          },
          name: "application-production", // job name for application
        };
      } else {
        configuration = {
          ...defaultConfiguration, // default configuration for application
          ...testConfiguration, // test configuration for application
          module: {
            rules: [
              ...defaultConfiguration.module.rules, // default rules for application
              ...testConfiguration.module.rules, // test rules for application
            ],
          },
          name: "application-build",
        };
      }
    } else if (product === "framework") {
      // create default configuration for application
      const defaultConfiguration = {
        ...commonConfiguration, // all common configuration
        ...frameworkCommonConfiguration, // app common configuration
        ...frameworkFilesConfiguration, // app files configuration
        plugins: [
          ...commonConfiguration.plugins, // all common plugins
          ...frameworkCommonConfiguration.plugins, // app common rules
        ],
      };

      if (mode === "production") {
        configuration = {
          ...defaultConfiguration, // default configuration for framework
          ...productionConfiguration, // production configuration for framework
          module: {
            rules: [
              ...defaultConfiguration.module.rules, // default rules for framework
              ...productionConfiguration.module.rules, // production rules for framework
            ],
          },
          name: "framework-production", // job name for framework
        };
      } else {
        configuration = {
          ...defaultConfiguration, // default configuration for framework
          ...testConfiguration, // test configuration for framework
          module: {
            rules: [
              ...defaultConfiguration.module.rules, // default rules for framework
              ...testConfiguration.module.rules, // test rules for framework
            ],
          },
          name: "framework-build", // job name for framework
        };
      }
    } else {
      console.error("Please set `product` value with environment variable");
    }

    return configuration;
  };

  if (Object.keys(env).includes("product")) {
    return webpackRun({ product: env.product, mode: env.mode });
  }

  return webpackRun({ product: "app", mode: "development" });
};
