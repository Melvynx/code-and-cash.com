const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/club',
        destination: '/subscribe',
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
