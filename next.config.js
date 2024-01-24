// module.exports = {
//   images: {
//     domains: ['images.microcms-assets.io'],
//   },
// };

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-next.microcms.io/api/v1/',
      },
    ],
  },
};
