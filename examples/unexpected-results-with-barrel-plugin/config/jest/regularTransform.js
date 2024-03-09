const babelJest = require("babel-jest").default;

module.exports = {
  process(sourceText, sourcePath, options) {
    const babelTransformer = babelJest.createTransformer({
      presets: [["@babel/preset-env"]],
      babelrc: false,
      configFile: false,
    });
    return babelTransformer.process(sourceText, sourcePath, options);
  },
};
