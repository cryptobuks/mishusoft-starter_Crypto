const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class HotHtmlWebpackCompiler {
    constructor(options = {}){
        this.sourcePath = options.sourcePath ? options.sourcePath : path.resolve(__dirname, '../../Sources/assets/pages');
        this.outputPath = options.outputPath ? options.outputPath : path.resolve(__dirname, '../../Packages/Lab/Modules')
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('HotHtmlWebpackCompiler', () => {
            console.log('The compiler is starting a new compilation...');
            const self = this;
            const DS = '/';
            const HtmlPagesFolder = '/views/pages/';
            if (self.sourcePath.length !== 0) {
                if (self.outputPath.length !== 0) {
                    let module = fs.readdirSync(path.resolve(__dirname, self.sourcePath));
                    module.length !== 0 ? module.forEach(function (__moduleName) {
                        console.log('Module : ' + __moduleName);
                        let controller = fs.readdirSync(path.resolve(__dirname, self.sourcePath + DS + __moduleName));
                        controller.length !== 0 ? controller.forEach(function (__controllerName) {
                            console.log('Controller : ' + __controllerName);
                            let method = fs.readdirSync(path.resolve(__dirname, self.sourcePath + DS + __moduleName + DS + __controllerName));
                            method.length !== 0 ? method.forEach(function (__methodFileName) {
                                console.log('Method : ' + __methodFileName);
                                console.log('FILE : ' + path.resolve(__dirname, self.sourcePath + DS + __moduleName + DS + __controllerName + DS + __methodFileName));
                                console.log('OUTPUT : ' + path.resolve(__dirname, self.outputPath + DS  + __moduleName + HtmlPagesFolder + __controllerName + DS + __methodFileName));
                                return new HtmlWebpackPlugin({
                                    inject: false,
                                    minify: true,
                                    filename: path.resolve(__dirname, self.outputPath + DS  + __moduleName + HtmlPagesFolder + __controllerName + DS + __methodFileName),
                                    template: path.resolve(__dirname, self.sourcePath + DS + __moduleName + DS + __controllerName + DS + __methodFileName),
                                }),
                                    console.log('Compiler processed\n\n');
                            }) : console.log('Dynamic file loading error. ERROR CODE: 404. REASON : DIRECTORY IS EMPTY.');
                        }) : console.log('Dynamic controller file loading error. ERROR CODE: 404. REASON : DIRECTORY IS EMPTY.');
                    }) : console.error('Dynamic module file loading error. ERROR CODE: 404. REASON : DIRECTORY IS EMPTY.');
                } else {
                    console.error('Output folder name not found');
                }
            } else {
                console.error('Source folder name not found');
            }
        })
    }
}

module.exports = HotHtmlWebpackCompiler