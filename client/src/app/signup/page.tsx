'use client'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react'

const Signup = () => {
  const url = process.env.BACKEND_URL || 'http://localhost:8000'
  const [form,setForm] = useState({
    email: '',
    username: '',
    password: '',
    name: '',
  })

  const saveUser = async (
  user: any,
  name?: string,
  username?: string
) => {
  const newUser = {
    id: user.uid,
    email: user.email,
    name: name ?? user.displayName ?? 'Unknown',
    username: username ?? user.displayName ?? 'Unknown',
  };

  console.log('Sending user to backend:', JSON.stringify(newUser));

  const response = await fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  let responseBody: any;
  try {
    responseBody = await response.json();
  } catch (err) {
    console.log(err);
    responseBody = await response.text();
  }

  console.log('Status:', response.status);
  console.log('Response body:', responseBody);
  console.log('User saved successfully');
};

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault(); 

  try {
 
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    );
    const user = userCredential.user;


    await saveUser(user, form.name, form.username);

    alert('Sign-up successful!');
    
  } catch (err: any) {
    console.error('Signup error:', err.code, err.message);
    alert('Something went wrong: ' + err.message);
  }
};

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const res = await signInWithPopup(auth, provider)
      const user = res.user
      // const idToken = await user.getIdToken();
      await saveUser(user)
    } catch (error: any) {
      const err = error.code
      const errmsg = error.message
      console.error('Error during sign-in:', err, errmsg)
    }
  }

  return (
    <div className="relative z-10 overflow-hidden py-40 text-center text-white">
      <div className="relative z-10 mx-auto max-w-md sm:px-4">
        <div className="overflow-hidden rounded-md border border-white/20 bg-black/40 py-10 px-6 sm:px-8 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />
          <h1 className="mb-6 text-3xl font-semibold">Sign Up To AUSA!</h1>
          <form className="space-y-6 text-left text-black">
            <div>
              <label
                className="block text-sm font-medium text-white mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                aria-invalid={false}
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                type="text"
              />
            </div>
       
            <div>
              <label
                className="block text-sm font-medium text-white mb-1"
                htmlFor="email"
              >
                Email address
              </label>
              <Input
                aria-invalid={false}
                id="email"
                value = {form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@example.com"
                required
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <Input
                aria-invalid={false}
                id="username"
                value = {form.username}
                onChange = {(e) => setForm({...form, username:e.target.value})}
                placeholder="Your username"
                required
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                aria-invalid={false}
                id="password"
                value = {form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                placeholder="••••••••••"
                required
                type="password"
              />
            </div>
            <Button className="w-full" onClick={handleSignup}>Submit</Button>
            <div className="flex justify-between text-sm text-white/80">
              <button
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
                onClick={handleGoogleSignIn}
                type="button"
              >
                Sign up with Google
              </button>
              <a
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
                href="/forgot-password"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
