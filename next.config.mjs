/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "images.pexels.com", // Add unsplash.com to the allowed domains
      },
      {
        protocol: "http",
        hostname: "localhost", // Add unsplash.com to the allowed domains
      },
      {
        protocol: "https",
        hostname: "nandakishore695.github.io", // Add unsplash.com to the allowed domains
      }
    ]
  },
  //  output: "export",
};
export default nextConfig;