/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    DATABASE_ID: process.env.DATABASE_ID,
    POSTS_COLLECTION_ID: process.env.POSTS_COLLECTION_ID,
    COMMENTS_COLLECTION_ID: process.env.COMMENTS_COLLECTION_ID,
    VOTES_COLLECTION_ID: process.env.VOTES_COLLECTION_ID,
    COMMUNITIES_COLLECTION_ID: process.env.COMMUNITIES_COLLECTION_ID,
  },
};

require('dotenv').config();

module.exports = nextConfig;