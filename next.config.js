const { withContentlayer } = require("next-contentlayer");
const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/club",
        destination: "/subscribe",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(withPlausibleProxy(nextConfig));
