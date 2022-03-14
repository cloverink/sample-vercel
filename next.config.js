/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    foo: process.env.FOO,
    start_server: new Date().toISOString()
  },
  distDir: 'build',
}

module.exports = nextConfig
