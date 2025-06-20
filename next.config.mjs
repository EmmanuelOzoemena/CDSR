/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      domains: ['dfdhniy1f6x3z.cloudfront.net'],
    },
    output: 'standalone',
    eslint: {
      ignoreDuringBuilds: true,
    },
}

export default nextConfig;
