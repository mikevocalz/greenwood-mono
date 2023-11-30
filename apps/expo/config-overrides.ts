module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.js$/,
    exclude: [
      '/node_modules[/\\](?!react-native-vector-icons)/',
      '/node_modules[/\\](?!react-native-pdf)/',
    ],
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configuration for compilation
        presets: [
          ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3' }],
          '@babel/preset-react',
          '@babel/preset-flow',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
        ],
      },
    },
  })

  return config
}