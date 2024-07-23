/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
},
basePath: process.env.NODE_ENV === 'production' ? '/FaceApp' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/FaceApp/' : '',
};

export default nextConfig;
