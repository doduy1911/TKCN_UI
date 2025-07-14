const nextConfig = {
  images: {
    domains: ["*"], //All Domain
    remotePatterns: [{ protocol: 'https', hostname: '*' }] //All domain
  },
}

module.exports = nextConfig