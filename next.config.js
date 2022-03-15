/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: "edge",
    concurrentFeatures: true,
    serverComponents: true,
  },
}

module.exports = nextConfig
