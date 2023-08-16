'use client';

import React, { useState } from 'react';
import Image from 'next/legacy/image';
import bgLogo from '../../../public/images/bg-login.webp';
import { useForm } from 'react-hook-form';
import { UserType } from '@/types/Auth';
import { validationSchema } from '@/utils/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from '@/firebase/auth';
import { useRouter } from 'next/navigation';

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: yupResolver(validationSchema),
  });

  const [signupErrorMessage, setSignupErrorMessage] = useState<string | null>(
    null
  );

  const router = useRouter();

  const onSubmit = async (userCred: UserType) => {
    const { errorSignIn } = await signIn(userCred);

    if (errorSignIn) {
      return setSignupErrorMessage(errorSignIn);
    }

    router.push('/');
  };

  return (
    <div className="relative flex flex-col justify-center grow">
      <Image
        priority={true}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={bgLogo}
        alt="background image with movie posters"
        className="absolute inset-0 w-full h-full object-cover -z-10 animate-fadeIn"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent" />
      <div className="absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent" />
      <div className="w-full p-6 m-auto background-login-card rounded-xl shadow-md lg:max-w-xl z-10">
        <h1 className="text-3xl font-semibold text-center text-theme-200 uppercase">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-theme-200"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-theme-400 focus:ring-theme-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register('email')}
            />
            <div className="h-6">
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-theme-200"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-theme-400 focus:ring-theme-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register('password')}
            />
            <div className="h-6">
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 text-white rounded-md border hover:bg-white hover:text-black duration-500"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="h-8 flex items-center justify-center">
          {signupErrorMessage && (
            <p className="text-red-600 text-center">{signupErrorMessage}</p>
          )}
        </div>
        <p className="text-xs font-light text-center text-white">
          Don&apos; have an account?{'   '}
          <a
            href="/auth/signup"
            className="font-medium text-theme-100 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
