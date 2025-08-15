'use client';

import { login } from "@/app/api/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, {});

  return (
    <div className="flex justify-center">
      <form action={formAction} className="w-[375px] p-8">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username/Email</label>
          <input type="text" id="username" name="username" className="w-full px-3 py-2.5 border border-gray-400 rounded focus:outline-none focus:border-blue-600" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2.5 border border-gray-400 rounded focus:outline-none focus:border-blue-600" required />
          {state.err && (
            <div className="mt-2 text-red-500 text-center font-medium">
              {state.err}
            </div>
          )}
        </div>
        <button type="submit" disabled={pending} className={`mb-2 w-full px-3 py-2.5 text-white rounded ${pending ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"}`}>
          {pending ? 'Logging in...' : 'Login'}
        </button>
        <div>
          <Link href="/signup" className="mb-4 block w-full text-center px-4 py-2.5 bg-gray-200 hover:bg-gray-300 rounded dark:text-black">Sign up</Link>
        </div>
        <div className="text-center">
          <Link href="/reset-password" className="text-blue-500">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}
