/** @type {import('next').NextConfig} */
const withTm = require('next-transpile-modules')(['three'])

const nextConfig = {
  ...withTm(),
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
