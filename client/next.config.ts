import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  /* config options here */
  images: {
    // TODO: remove
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
            {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'static.gamersclub.com.br',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
