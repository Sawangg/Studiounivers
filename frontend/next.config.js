/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    swcMinify: true,
    images: {
        domains: ["localhost"],
    },
};

module.exports = nextConfig;
