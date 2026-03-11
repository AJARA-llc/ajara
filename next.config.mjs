/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/ajara" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
