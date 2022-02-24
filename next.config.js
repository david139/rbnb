/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://links.papareact.com/:path*',
      },
    ]
  },
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com']
  }
}

module.exports = nextConfig
