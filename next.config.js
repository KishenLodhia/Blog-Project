/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        port: "",
        pathname: "/1m8",
      },
    ],
  },
};
