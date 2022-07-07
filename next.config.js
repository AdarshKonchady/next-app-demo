/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        '/Users/Z001ZLM/Documents/Work/swc-console-replace-plugin/target/wasm32-wasi/release/console_replace.wasm',
      ],
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
