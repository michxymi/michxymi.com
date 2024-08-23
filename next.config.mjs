import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io', // Microlink Image Preview
        port: '',
      },
    ],
  },
};

export default withContentCollections(nextConfig);
