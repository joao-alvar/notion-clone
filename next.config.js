/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['fagyilplsetpoomkcvkn.supabase.co'],
  },
}

module.exports = nextConfig
