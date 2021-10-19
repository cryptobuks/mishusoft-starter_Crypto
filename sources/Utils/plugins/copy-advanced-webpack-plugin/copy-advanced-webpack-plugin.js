const {access, readFile, copyFile, stat} = require('fs/promises')
const {constants, statSync, read} = require('fs');
const {validate} = require('schema-utils');
const schema = require('./options.json');
const pLimit = require('./p-limit')
//const {readFile} = require("./utils/promisify");

class CopyAdvancedPlugin {
    constructor(options = [])
    {
        validate(schema, options, {
            name: "Copy Advanced Plugin",
            baseDataPath: "options",
        });


        this.patterns = options.patterns;
        this.options = options.options || {};
    }

    // Define `apply` as its prototype method which is supplied with compiler as its argument
    apply(compiler)
    {
        const pluginName = this.constructor.name;
        //const limit = pLimit(this.options.concurrency || 100);
        console.log(pluginName)
        //console.log(limit)

        // Specify the event hook to attach to
        compiler.hooks.done.tap(pluginName, async(compilation, callback) => {
            //const logger = compilation.getLogger("copy-advanced-webpack-plugin");
            //const cache = compilation.getCache("CopyAdvancedWebpackPlugin");

            console.log('This is an example plugin!');
            //console.log(logger)
            //console.log(cache)


            //console.log(compilation)
            //console.log(compilation.output)
            //console.log(stats.compilation)
            //console.log(stats.compilation.name)
            //console.log(compilation.compilation.compiler.name)
            //console.log(compilation.compilation.compiler.outputPath)
            console.log(compiler.webpack.sources)

            console.log(this.patterns)
            console.log(this.options)



            //console.log(stats.compilation.outputPath)
            if (this.patterns.length > 0) {
                this.patterns.map(
                    async function (pattern) {
                        console.log(pattern)
                        const copyFrom = pattern.from;
                        const copyTo = pattern.to;

                        try {
                            await copyFile(copyFrom, copyTo);
                            console.log(`${copyFrom} was copied to ${copyTo}`);

                            //console.log(stat(copyFrom));
                            //console.log(stat(copyTo));
                        } catch (e) {
                            console.log(`The file(${copyFrom}) could not be copied`);
                            console.log(e);
                        }
                    }
                )
            }

        });
    }
}

    module.exports = CopyAdvancedPlugin;