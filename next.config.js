/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['rsakayichfjusnnhsmmj.supabase.co'],
  },
}

module.exports = nextConfig
