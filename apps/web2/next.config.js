//@ts-check
const { withExpo } = require("@expo/next-adapter");
const { composePlugins, withNx } = require("@nx/next");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "expo",
    "@expo/next-adapter/react-native",
    "solito",
  ],
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withExpo,
];

module.exports = composePlugins(...plugins)(nextConfig);
