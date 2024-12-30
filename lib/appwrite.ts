import { Account, Client, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Replace with your Appwrite endpoint
  .setProject('YOUR_PROJECT_ID'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const DATABASE_ID = 'YOUR_DATABASE_ID';
export const POSTS_COLLECTION_ID = 'posts';
export const COMMENTS_COLLECTION_ID = 'comments';
export const VOTES_COLLECTION_ID = 'votes';
export const COMMUNITIES_COLLECTION_ID = 'communities';