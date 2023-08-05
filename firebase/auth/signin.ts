import firebase_app from '../config';
import { signInWithEmailAndPassword, getAuth, User } from 'firebase/auth';
import { UserTypes } from '@/types/Auth';

const auth = getAuth(firebase_app);

export default async function signIn({ email, password }: UserTypes) {
  let result = null,
    errorSignIn = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (e: any) {
    errorSignIn = e.code;
  }

  return { result, errorSignIn };
}
