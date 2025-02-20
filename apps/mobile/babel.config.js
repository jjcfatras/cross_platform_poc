module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [["react-native-unistyles/plugin", { debug: true }]],
    presets: ["babel-preset-expo"],
  };
};
