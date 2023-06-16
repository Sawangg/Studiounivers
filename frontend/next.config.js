/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["localhost"],
    },
    output: "standalone",
};

module.exports = nextConfig;
