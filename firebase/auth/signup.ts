import firebase_app from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { UserTypes } from '@/types/Auth';

const auth = getAuth(firebase_app);

export default async function signUp({ email, password }: UserTypes) {
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
}
