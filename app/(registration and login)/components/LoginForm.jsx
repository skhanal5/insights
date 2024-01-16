"use client";

import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Branding from "./Branding";
import ErrorPopup from "./ErrorPopup";
import FormTitle from "./FormTitle";
import { Input } from "@/components/ui/input";
import FormAlternativeOption from "./FormAlternativeOption";

export default function LoginForm() {
  const email = useRef("");
  const password = useRef("");
  const [error, setError] = useState("");
  const router = useRouter();
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    //for logging

    const response = await signIn("login", {
      email: email.current,
      password: password.current,
      redirect: false,
    });

    console.log(response)
    switch (response.error) {
      case (null): router.push("/dashboard")
      default: setError(response.error)
    }
  }

  return (
    <form
    ref={formRef}  
    className="p-5 md:p-0 lg:p-0 md:w-6/12 lg:w-5/12 h-full rounded-lg bg-white flex flex-col justify-between items-center"
      onSubmit={handleSubmit}
    >
      <Branding></Branding>
      <div className="md:w-8/12 lg:w-6/12 w-8/12 flex flex-col gap-5">
        <FormTitle title="Login" subtitle="Resume your job search."></FormTitle>
        <ErrorPopup errorMessage={error}></ErrorPopup>
        <div className="flex flex-col gap-3 text-xs md:text-base">
          <div className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Email Address"
              onChange={(e) => (email.current = e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => (password.current = e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="text-white font-semibold px-2 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500"
            >
              Log In
            </button>
            <div className="flex py-2 items-center justify-center w-full">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <button className="text-white font-semibold px-2 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500">
              Google
            </button>
            <button className="text-white font-semibold px-2 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500">
              Apple
            </button>
          </div>
        </div>
      </div>
      <FormAlternativeOption
        question={"Haven't registered yet?"}
        path={"/signup"}
        pathDescriptor={"Register"}
      ></FormAlternativeOption>
    </form>
  );
}
