'use client';

import { signup } from "@/app/api/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(signup, {});

  return (
    <div className="flex justify-center">
      <form action={formAction} className="w-[375px] p-8">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input type="text" id="username" name="username" className="w-full px-3 py-2.5 border border-gray-400 rounded focus:outline-none focus:border-blue-600" required />
          {state.usernameErr && (
            <div className="mt-2 text-red-500 text-center font-medium">
              {state.usernameErr}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2.5 border border-gray-400 rounded focus:outline-none focus:border-blue-600" required />
          {state.emailErr && (
            <div className="mt-2 text-red-500 text-center font-medium">
              {state.emailErr}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2.5 border border-gray-400 rounded focus:outline-none focus:border-blue-600" required />
          {state.passwordErr && (
            <div className="mt-2 text-red-500 text-center font-medium">
              {state.passwordErr}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block mb-1">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" className="w-full px-3 py-2.5 border border-gray-400 rounded focus:outline-none focus:border-blue-600" required />
          {state.confirmPasswordErr && (
            <div className="mt-2 text-red-500 text-center font-medium">
              {state.confirmPasswordErr}
            </div>
          )}
        </div>
        <button type="submit" disabled={pending} className={`mb-2 w-full px-3 py-2.5 text-white rounded ${pending ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"}`}>
          {pending ? 'Signing up...' : 'Sign up'}
        </button>
        <div>
          <Link href="/login" className="mb-4 block w-full text-center px-4 py-2.5 bg-gray-200 hover:bg-gray-300 rounded dark:text-black">Login</Link>
        </div>
      </form>
    </div>
  );
}
