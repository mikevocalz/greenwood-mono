const path = require('path');
const gluestackStyleResolver = require('@gluestack-style/babel-plugin-styled-resolver');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ]
    ],
    plugins: [
      [
        gluestackStyleResolver,
        {
          configPath: path.resolve(__dirname, './gluestack-style.config.js'), // Specify the path of the config file
        },
      ],
       [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'solito/image': 'solito/image/expo',
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}