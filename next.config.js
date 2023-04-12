/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  output: "standalone",
};

module.exports = nextConfig;
