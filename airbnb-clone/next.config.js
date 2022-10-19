/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoia3lsam1rIiwiYSI6ImNsOWZlaHVkNTA1dWQzb2syMXRobG1yMzEifQ.rhfbaObycykEhdwk49dcOA",
  },
};

module.exports = nextConfig;
