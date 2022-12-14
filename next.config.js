// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});
 
const nextConfig = withPWA({
  reactStrictMode: true,
});
 
module.exports = nextConfig;