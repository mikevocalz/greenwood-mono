module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      "react-native-reanimated/plugin",
   '@babel/plugin-proposal-export-namespace-from',
      [
        '@babel/plugin-proposal-private-property-in-object',
        {
          loose: true,
        },
      ],
      [
        '@babel/plugin-proposal-private-methods',
        {
          loose: true,
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
    ],
  };
};
