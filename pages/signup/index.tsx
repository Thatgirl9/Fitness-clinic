import PasswordInput from "@/components/PasswordInput";
import Link from "next/link";
import { useEffect, useState } from "react";

const SignUp: React.FC = () => {
  // Validating Name, Email and Password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // For their error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [verification, setVerification] = useState(false);

  // Scrolling Solution
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  // Shadow when mouse is hovering on the Form

  // SUPABASE
  const registerAuthentication = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && password) {
      // Registration Successful, show success message
      setVerification(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setVerification(false);
    }
  };

  // Function for Name Validation
  const handleNameValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    // Check if the entered names contains a number or special character
    if (/\d/.test(newName) || /[!@#$%^&*(),.?":{}|<>]/g.test(newName)) {
      setNameError("Name cannot contain numbers or special characters");
    } else {
      setNameError("");
    }

    // Update the name state
    setName(newName);
  };

  // Function for Email Validation
  const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;

    // Check if the entered email is valid and does not contain the @ symbol
    if (!/@/.test(newEmail)) {
      setEmailError("Email must contain @ symbol");
    } else {
      setEmailError("");
    }

    // Update the email state
    setEmail(newEmail);
  };

  // Function for Password Validation
  const handlePasswordValidation = (newPassword: string) => {
    // Check if the entered password is less 6 or more characters, one number, one uppercase & one lower case.
    if (/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/g.test(newPassword)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "6 or more characters, one number, one uppercase & one lower case."
      );
    }

    //  Update the password state
    setPassword(newPassword);
  };

  // Function for password confirmation
  const handlePasswordConfirmation = (newPassword: string) => {
    console.log("Checking password");
    if (newPassword === password) {
      setPasswordConfirmError("Password Matches ✔");
    } else {
      setPasswordConfirmError("Password does not match ❌");
    }
    // Update the Confirm password state
    setPasswordConfirm(newPassword);
    console.log(passwordConfirm);
  };

  return (
    <section className="relative h-full lg:h-fit  flex justify-center items-center pb-[5em]">
      {verification && (
        <div className="absolute bg-text-secondary rounded-lg top-3 right-2 p-4">
          <p className="text-green-primary">Thank You For Signing In</p>
        </div>
      )}
      <div className="form-div mb-[2em] py-5 mt-[3em] rounded-lg flex flex-col gap-[1.6em] justify-center items-center border border-green-primary w-[90%] sm:w-[24em] lg:w-[22em]">
        <form
          className="flex flex-col gap-[1.6em] w-[90%]"
          onSubmit={registerAuthentication}
        >
          <div className="text-center">
            <h1 className="text-4xl font-semibold pb-3 ">
              <span className="linkly-text">Welcome</span> 👋
            </h1>
            <h1 className="text-3xl text-primaryLite font-medium pb-4">
              Sign Up
            </h1>
            <p className="text-primaryLite text-center text-sm">
              Create an account to get started
            </p>
          </div>

          <div className="container flex flex-col gap-[1em]">
            {/* Username */}
            <div>
              <input
                name="name"
                id="name"
                type="text"
                value={name}
                placeholder="Username"
                required
                onChange={handleNameValidation}
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
              />
              {nameError && (
                <p className="text-primaryLite text-sm mt-1">{nameError}</p>
              )}
            </div>

            {/* Email*/}
            <div>
              <input
                name="email"
                id="email"
                type="email"
                value={email}
                placeholder="Email address"
                required
                onChange={handleEmailValidation}
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
              />
              {emailError && (
                <p className="text-primaryLite text-sm mt-1">{emailError}</p>
              )}
              {passError && (
                <p className="text-red-500 text-sm mt-1">{passError}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <PasswordInput
                onChange={handlePasswordValidation}
                placeholder="Password"
              />
              {passwordError && (
                <p className="text-primaryLite text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div>
              <PasswordInput
                onChange={handlePasswordConfirmation}
                placeholder="Confirm password"
              />
              {passwordConfirmError && (
                <p className="text-primaryLite text-sm mt-1">
                  {passwordConfirmError}
                </p>
              )}
            </div>

            {verification && (
              <p className="text-green-500 text-base mt-1 font-medium">
                {verification}
              </p>
            )}

            <div className="mt-5 flex justify-center items-center w-full">
              <button
                className="p-2 w-full bg-green-primary rounded-lg font-semibold shadow-inner shadow-primaryBlue"
                type="submit"
              >
                Register
              </button>
            </div>

            <div>
              <p className="text-center text-white text-sm flex gap-1 justify-center items-center">
                <span> Already have an account?</span>

                <Link
                  href="/sigIn"
                  className="text-white font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
