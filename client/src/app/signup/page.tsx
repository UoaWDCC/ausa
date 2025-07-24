"use client";
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '@/lib/firebase'

const Signup = () => {

    const handleGoogleSignIn = async()=>{
        const provider = new GoogleAuthProvider();
        try{
            await signInWithRedirect(auth, provider);
            console.log("Redirecting...")

        }catch (error:any) {
            const err = error.code;
            const errmsg = error.message;
            console.error("Error during sign-in:", err, errmsg);
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
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email address
              </label>
              <Input
                type="email"
                id="email"
                placeholder="email@example.com"
                required
                aria-invalid={false}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-1"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••••"
                required
                aria-invalid={false}
              />
            </div>
            <Button className="w-full">Submit</Button>
            <div className="flex justify-between text-sm text-white/80">
              <button
                type='button'
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
                onClick={handleGoogleSignIn}
              >
                Sign up with Google
              </button>
              <a
                href="/forgot-password"
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
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
