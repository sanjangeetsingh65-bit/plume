'use server';

import { LoginState, SignupState } from "@/lib/definitions";

export async function login(initialState: LoginState, formData: FormData) {
  return initialState;
}

export async function signup(initialState: SignupState, formData: FormData) {
  return initialState;
}
