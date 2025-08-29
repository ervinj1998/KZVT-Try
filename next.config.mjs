/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/KZVT-Try',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig