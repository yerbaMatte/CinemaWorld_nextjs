'use client';

import React from 'react';
import Image from 'next/legacy/image';
import bgLogo from '../../../public/images/bg-login.webp';
import signUp from '../../../firebase/auth/signup';
// validation
import { UserTypes } from '@/types/Auth';
import { validationSchema } from '@/utils/validationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserTypes>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserTypes) => console.log(data);

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
        blurDataURL="/public/images/placeholder.png"
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent" />
      <div className="absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent" />
      <div className="w-full p-6 m-auto background-login-card rounded-xl shadow-md lg:max-w-xl z-10">
        <h1 className="text-3xl font-semibold text-center text-theme-200 uppercase">
          Sign up
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
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
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="mb-6">
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
            <p className="text-red-600">
              {errors.password ? errors.password.message : 'test'}
            </p>
          </div>
          <div className="mt-8">
            <button
              className="w-full px-4 py-2 text-white rounded-md border hover:bg-white hover:text-black duration-500"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-white">
          Already have an account?{' '}
          <a
            href="/auth/signin"
            className="font-medium text-theme-100 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
