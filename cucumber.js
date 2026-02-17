module.exports = {
  default: {
    paths: ["src/features/**/*.feature"],
    require: [
      "src/step-definitions/*.ts",
      "src/hooks/*.ts"
    ],
    format: ["progress"],
    requireModule: ["ts-node/register"]
  }
};
