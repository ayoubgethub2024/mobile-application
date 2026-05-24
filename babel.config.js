// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // keep this as the LAST plugin
      'react-native-reanimated/plugin',
    ],
  };
};
