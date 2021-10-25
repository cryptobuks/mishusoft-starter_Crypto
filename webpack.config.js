/**
 * Webpack configuration file for build and publish
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Al-Amin Ahamed <alamin.rohita@hotmail.com>
 * @copyright  2021 Al-Amin Ahamed (ABN 77 084 670 600)
 **/

const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const FontPreloadPlugin = require("webpack-font-preload-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const sourceAssetsPath = path.join(__dirname, "./sources/Assets");
const sourceImagesPath = path.join(sourceAssetsPath, "./media/images");
const storageAssetsPath = path.join(__dirname, "./storages/app/assets");
const frameworkViewPath = path.join(__dirname, "./storages/framework/views");

//https://stackoverflow.com/questions/49168478/how-to-use-multiple-configuration-files-in-webpack

module.exports = (env) => {
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
            // Load postcss.
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
          test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
          type: "asset/resource",
          generator: {
            filename: "../webfonts/[name].[hash][ext][query]",
          },
        },
      ],
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
    },
    //externals: 'lodash',
    plugins: [
      new CleanWebpackPlugin(),
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
      webfonts: "./Assets/sass/webfonts.scss",
      colors: "./Assets/sass/includes/common/colors.scss",
    },
    output: {
      // path: path.join(__dirname, "./storages/app/assets"),
      filename: "js/[name].js",
      chunkFilename: "js/[id].runtime.bundle.js",
      library: "MishusoftRuntime",
      scriptType: "module",
      clean: true,
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
      minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
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
            from: path.join(storageAssetsPath, "../webfonts"),
            to: path.join(storageAssetsPath, "./webfonts"),
          },
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
          {
            /*copy webfont files from sources directory*/
            from: path.join(frameworkViewPath, "../webfonts"),
            to: path.join(frameworkViewPath, "./webfonts"),
          },
        ],
      }),
    ],
  };

  // Entries and output configuration for applications
  const applicationFilesConfiguration = {
    entry: {
      ...commonFilesConfiguration.entry,
      /**
       * Stylesheet for themes
       */
      "mishusoft-theme": "./Assets/sass/theme-mishusoft.scss",

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
      path: path.join(__dirname, "./storages/app/assets"),
      ...commonFilesConfiguration.output,
    },
  };

  // Entries and output configuration for framework
  const frameworkFilesConfiguration = {
    ...frameworkCommonConfiguration,
    entry: {
      ...commonFilesConfiguration.entry,
      // Stylesheet for embedded application support
      embedded: "./Assets/sass/embedded.scss",
      resources: "./Assets/sass/resources.scss",
    },
    output: {
      path: path.join(__dirname, "./storages/framework/views"),
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
