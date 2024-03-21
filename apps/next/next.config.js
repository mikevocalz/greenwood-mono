const { withExpo } = require('@expo/next-adapter')
const { DefinePlugin } = require('webpack')
  const { withGluestackUI } = require('@gluestack/ui-next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
    async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false,
      },
    ];
  },
  reactStrictMode: false,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'rb.gy',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
            {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
    'expo-router',
    'react-native-svg',
    'nativewind',
    'react-native-css-interop',
    '@expo/html-elements',
    '@expo/vector-icons',
    'react-native-vector-icons',
    'styled-components',
    'react-native-reanimated-carousel',
    'react-responsive-carousel',
    '@gluestack-ui/themed', 
    '@gluestack-style/react',
    'expo-linear-gradient',
    '@gluestack-ui/nativewind-utils',
    'react-native-table-component'
  ],


webpack(config, options) {
     config.module.rules.push({
      test: /\.(ttf|png|jpg|jpeg|svg|pdf)$/,
      loader: 'url-loader', // or directly file-loader
    })

    // Mix in aliases
    if (!config.resolve) {
      config.resolve = {}
    }

     config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Alias direct react-native imports to react-native-web
      'react-native$': 'react-native-web',
      // Alias internal react-native modules to react-native-web
      'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
      'react-native/Libraries/vendor/emitter/EventEmitter$':
        'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
      'react-native/Libraries/EventEmitter/NativeEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter',
      '@expo/vector-icons': 'react-native-vector-icons',
      'react-native-webview': 'react-native-web-webview',
    }

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve?.extensions ?? []),
    ]



    return config
  },
}

//module.exports = withExpo(nextConfig)
  module.exports = withGluestackUI(nextConfig);
