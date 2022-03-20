// External dependencies
import {defineConfig} from "vite";
import copy from "rollup-plugin-copy";

// export default configuration for vite use
// https://laravel-vite.innocenzi.dev/guide/quick-start.html
export default defineConfig({
    plugins: [
        // Copy pre- and post-build files
        copy({
            targets: [
                {src: "resources/img/logos/*", dest: "public/logos"},
                {src: "resources/img/logos/favicon.ico", dest: "public"},
                {
                    src: "public/build/assets/service-worker.*.js",
                    dest: "public",
                    rename: (name, extension) => `${name.split(".")[0]}.${extension}`,
                    transform: (contents) => contents.toString().replace(/\.\//g, "./build/assets/"),
                },
            ],
            hook: "writeBundle",
            // verbose: true,
        }),
    ],
});
