import { account } from './appwrite';
import { ID } from 'appwrite';

export async function signUp(email: string, password: string, name: string) {
  try {
    const user = await account.create(ID.unique(), email, password, name);
    await account.createEmailSession(email, password);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function signIn(email: string, password: string) {
  try {
    return await account.createEmailSession(email, password);
  } catch (error) {
    throw error;
  }
}

export async function signOut() {
  try {
    return await account.deleteSession('current');
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}