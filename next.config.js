require("dotenv").config()

const nextConfig = {
  reactStrictMode: true,
  env: {
    foo: process.env.FOO,
    start_server: new Date().toISOString()
  }
}

module.exports = nextConfig
