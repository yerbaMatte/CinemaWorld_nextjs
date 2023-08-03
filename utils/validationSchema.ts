import { string, object } from 'yup';

export const validationSchema = object().shape({
  email: string().email('Invalid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
