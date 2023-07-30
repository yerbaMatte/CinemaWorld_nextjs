import React from 'react';
import Image from 'next/legacy/image';
import bgLogo from '../../public/images/bg-login.webp';

function SignInPage() {
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
          Sign in
        </h1>
        <form className="mt-6">
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
            />
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
            />
          </div>
          <a href="#" className="text-xs text-theme-200 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 text-white rounded-md border hover:bg-white hover:text-black duration-500">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-white">
          Don't have an account?{' '}
          <a
            href="/signup"
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
