module.exports = {
  default: {
    require: [
      "src/step-definitions/*.ts",
      "src/hooks/*.ts"
    ],
    format: ["progress"],
    requireModule: ["ts-node/register"]
  }
};
