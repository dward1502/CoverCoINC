/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/sports", destination: "/industries/sports-venues", permanent: true },
      { source: "/casinos", destination: "/industries/casinos", permanent: true },
      { source: "/hotels", destination: "/industries/hospitality", permanent: true },
      { source: "/conventions", destination: "/industries/convention-centers", permanent: true },
      { source: "/concerts", destination: "/industries", permanent: true },
      { source: "/catalog", destination: "/products", permanent: true },
      { source: "/customize", destination: "/custom-process", permanent: true },
    ];
  },
};

export default nextConfig;
