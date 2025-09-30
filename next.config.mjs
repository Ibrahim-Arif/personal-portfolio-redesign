/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "api.dicebear.com"], // 👈 whitelist your image host
  },
};

export default nextConfig;
