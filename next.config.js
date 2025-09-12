/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  //output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_DATABASE_URL:
      process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    NEXT_PUBLIC_SENDMAIL: process.env.NEXT_PUBLIC_SENDMAIL,
  },
  reactStrictMode: true,
  distDir: ".next",
  async redirects() {
    return [
      {
        source: "/services/commercial-cleaning-for-bars-pubs-clubs",
        destination: "/services/commercial-cleaning-bars-pubs-clubs",
        permanent: true,
      },
      {
        source: "/services/commercial-cleaning-for-restaurants-diners-cafes",
        destination: "/services/commercial-cleaning-restaurants-diners-cafes",
        permanent: true,
      },
      {
        source: "/services/commercial-businesses",
        destination: "/services/commercial-cleaning-commercial-businesses",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
