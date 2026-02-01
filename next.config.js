/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect www to non-www (canonical domain)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.pray4me.app',
          },
        ],
        destination: 'https://pray4me.app/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig