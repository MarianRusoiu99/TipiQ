// appwrite.ts
import { Account, Client, Databases, Storage } from "appwrite";
import dotenv from "dotenv";

dotenv.config();

if (
  !process.env.APPWRITE_ENDPOINT ||
  !process.env.APPWRITE_PROJECT_ID ||
  !process.env.APPWRITE_API_KEY
) {
  throw new Error("Missing Appwrite configuration in .env file");
}

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // Appwrite Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID) // Project ID
 
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const DATABASE_ID = process.env.DATABASE_ID!;
export const POSTS_COLLECTION_ID = process.env.POSTS_COLLECTION_ID!;
export const COMMENTS_COLLECTION_ID = process.env.COMMENTS_COLLECTION_ID!;
export const VOTES_COLLECTION_ID = process.env.VOTES_COLLECTION_ID!;
export const COMMUNITIES_COLLECTION_ID = process.env.COMMUNITIES_COLLECTION_ID!;
