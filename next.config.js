// module.exports = {
//   images: {
//     domains: ['images.microcms-assets.io'],
//   },
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
};
