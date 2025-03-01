/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "images.pexels.com", // Add unsplash.com to the allowed domains
      }
    ]
  },
  //  output: "export",
};
export default nextConfig;