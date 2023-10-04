/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en-US', 'es'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
}

module.exports = nextConfig
