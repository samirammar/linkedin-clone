/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'linkedin.com',
      "static.licdn.com",
      "static-exp1.licdn.com",
      "images.fastcompany.net",
      'rb.gy',
      'poe.com'
    ],
  },
}

module.exports = nextConfig
