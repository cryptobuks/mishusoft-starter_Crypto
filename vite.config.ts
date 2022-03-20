/**
 * ViteJS's configuration file for build and publish
 *
 * @package    MishusoftDevelopment
 * @subpackage webpack
 * @author     Al Amin Ahamed <alamin.rohita@hotmail.com>
 * @copyright  2021 Al Amin Ahamed
 **/

// import default configuration for webpack bundle builder for mishusoft project
const defaultConfig = require("./Utils/builder/vite/mishusoft.vite.config");

export default defaultConfig(import.meta, {
    common: {
        colors: "./sass/includes/common/colors.scss",
    },
    app: {
        "themes/mishusoft": "./sass/themes/mishusoft.scss",
        browser: "./typescripts/mishusoft/browser.ts",
        insights: "./typescripts/tracker.ts",
        installer: "./typescripts/installer.ts",
        readystate: "./typescripts/readystate.ts",
        "framework/current": ["./typescripts/app.ts", "./sass/app.scss"],
        "framework/v4": ["./typescripts/app-v4.ts", "./sass/app-v4.scss"],
        "framework/v3": ["./typescripts/app-v3.ts", "./sass/app-v3.scss"],
        loader: ["./typescripts/loader.ts", "./sass/loader.scss"],
    },
    framework: {
        embedded: "./sass/embedded.scss",
        resources: "./sass/resources.scss",
        loader: ["./typescripts/loader.ts", "./sass/loader.scss"],
    },
    webfonts: {
        "noto-sans": "./webfonts/noto-sans.scss",
        "saira-stencil-one": "./webfonts/saira-stencil-one.scss",
        "solaiman-lipi": "./webfonts/solaiman-lipi.scss",
        "source-sans-pro": "./webfonts/source-sans-pro.scss",
    },
});
