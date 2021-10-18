import { validate } from 'schema-utils';


// schema for options object
const schema = {
    type: 'object',
    properties: {
        test: {
            type: 'string',
        },
    },
};


export default class HelloWorldPlugin {
    constructor(options = {}) {
        validate(schema, options, {
            name: 'Hello World Plugin',
            baseDataPath: 'options',
        });
    }

    apply(compiler) {
        // Tap into compilation hook which gives compilation as argument to the callback function
        compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
            // Now we can tap into various hooks available through compilation
            compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
                console.log('Assets are being optimized.');
            });
        });
    }
}
