/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains:['www.google.co.il','psytonik.dj']
  }
}

module.exports = nextConfig
