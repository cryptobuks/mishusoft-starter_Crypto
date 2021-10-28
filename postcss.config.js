module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("cssnano"),
    require("autoprefixer"),
    require("postcss-nested"),
  ],
};
