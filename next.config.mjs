/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: "/img/:path*",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
          ]
        },
        {
          source: "/thumbNail/:path*",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
          ]
        }
      ];
    }
  };
  
  export default nextConfig;
  