// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true, // Remove when page directory is gone
    swcMinify: true,
    i18n,
    images: {
        domains: ["localhost"],
    },
};

module.exports = nextConfig;
