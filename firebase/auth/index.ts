import firebase_app from '@/firebase/config';
import { UserType } from '@/types/Auth';
import {
  signOut as authSignout,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(firebase_app);

export const signUp = async ({ email, password }: UserType) => {
  let result = null,
    errorSignUp = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    errorSignUp = e.code;
    if (e.code === 'auth/email-already-in-use') {
      errorSignUp = 'Email already in use';
    }
  }

  return { result, errorSignUp };
};

export const signOut = async () => {
  try {
    await authSignout(auth);
  } catch (error: any) {
    throw new Error(`User can't be signed out`);
  }
};

export const signIn = async ({ email, password }: UserType) => {
  let result = null,
    errorSignIn = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (e: any) {
    errorSignIn = e.code;
  }

  return { result, errorSignIn };
};
