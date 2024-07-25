/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:"build",
    images: {
      unoptimized: true,
},
// basePath: process.env.NODE_ENV === 'production' ? '/FaceBook' : '',
// assetPrefix: process.env.NODE_ENV === 'production' ? '/FaceBook/' : '',
};

export default nextConfig;
