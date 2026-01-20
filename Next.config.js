/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // CRITICAL for Netlify
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
