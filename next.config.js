/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible');

const nextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "vngdsgitgimaumyqaatn.supabase.co",
      "images.unsplash.com",
      "utfs.io",
    ],
  },
};

module.exports = withPlausibleProxy()(nextConfig);
