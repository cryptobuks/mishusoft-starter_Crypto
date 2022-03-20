module.exports = {
    "common": {
        "colors": "./Assets/sass/includes/common/colors.scss"
    },
    "app": {
        "themes/mishusoft": "./Assets/sass/themes/mishusoft.scss",
        "browser": "./Assets/typescripts/mishusoft/browser.ts",
        "insights": "./Assets/typescripts/tracker.ts",
        "installer": "./Assets/typescripts/installer.ts",
        "readystate": "./Assets/typescripts/readystate.ts",
        "framework/current": ["./Assets/typescripts/app.ts", "./Assets/sass/app.scss"],
        "framework/v4": ["./Assets/typescripts/app-v4.ts", "./Assets/sass/app-v4.scss"],
        "framework/v3": ["./Assets/typescripts/app-v3.ts", "./Assets/sass/app-v3.scss"],
        "loader": ["./Assets/typescripts/loader.ts", "./Assets/sass/loader.scss"]
    },
    "framework": {
        "embedded": "./Assets/sass/embedded.scss",
        "resources": "./Assets/sass/resources.scss",
        "loader": ["./Assets/typescripts/loader.ts", "./Assets/sass/loader.scss"]
    },
    "webfonts": {
        "noto-sans": "./Assets/webfonts/noto-sans.scss",
        "saira-stencil-one": "./Assets/webfonts/saira-stencil-one.scss",
        "solaiman-lipi": "./Assets/webfonts/solaiman-lipi.scss",
        "source-sans-pro": "./Assets/webfonts/source-sans-pro.scss"
    }
};