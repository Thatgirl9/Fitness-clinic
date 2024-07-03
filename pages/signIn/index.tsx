import PasswordInput from "@/components/PasswordInput";
import { setConfig } from "next/config";
import Link from "next/link";
import { useState } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const passwordCheck = (newPassword: string) => {
    const value = newPassword;
    setPassword(value);
    console.log(value, "Checking password");
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setConfirmation(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setConfirmation(false);
    }
  };

  return (
    <section className="relative h-[100dvh] md:h-screen lg:h-fit pb-[5em] flex justify-center items-center ">
      {confirmation && (
        <div className="absolute bg-text-secondary rounded-lg top-3 right-2 p-4">
          <p className="text-green-primary">Thank You For Signing In</p>
        </div>
      )}
      <div className="form-div border border-green-primary p-5 rounded-lg flex flex-col gap-[1.6em] w-[90%]  justify-center items-center sm:w-[24em] lg:w-[22em] mt-[4em]">
        <form
          className="flex flex-col gap-[1.6em] w-[90%]"
          onSubmit={handleSignIn}
        >
          <div>
            <h1 className="text-4xl font-semibold pb-3 text-center">
              <span className="linkly-text">Welcome Back</span> 👋
            </h1>
            <h1 className="text-3xl text-primaryLite text-center font-medium">
              Sign In
            </h1>
          </div>

          <div className="container flex flex-col gap-[1em]">
            {/* Email*/}
            <div>
              <input
                type="text"
                placeholder="Email address"
                required
                pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$) | ([a-zA-Z]+$)"
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <PasswordInput onChange={passwordCheck} placeholder="Password" />
            </div>

            <div className="flex justify-end items-end">
              <Link href="/forgotpassword" className="text-sm text-primaryLite">
                Forgot your password?
              </Link>
              <p></p>
            </div>

            <div className="mt-5 flex justify-center items-center w-full">
              <button
                type="submit"
                className="p-2 w-full bg-green-primary rounded-lg font-semibold shadow-inner shadow-primaryBlue"
              >
                Sign In
              </button>
            </div>

            <div>
              <p className="text-center text-primaryLite text-sm flex gap-1 justify-center items-center">
                <span>Don't have an account?</span>
                <Link
                  href="/signup"
                  className="text-primaryBlue font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
