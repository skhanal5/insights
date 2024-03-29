"use client";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import Branding from "./Branding";
import FormTitle from "./FormTitle";
import FormAlternativeOption from "./FormAlternativeOption";
import ErrorPopup from "@/components/ErrorPopup";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signIn("register", {
      id: crypto.randomUUID(),
      firstName: firstName.current,
      lastName: lastName.current,
      email: email.current,
      password: password.current,
      redirect: false,
      callbackUrl: "http://localhost:3000/dashboard",
    });

    switch (response.error) {
      case null:
        router.push("/dashboard");
      default:
        setError(response.error);
    }
  };

  return (
    <form
      className="p-5 md:p-0 lg:p-0 md:w-6/12 lg:w-5/12 h-full rounded-lg bg-white flex flex-col justify-between items-center"
      onSubmit={handleSubmit}
    >
      <Branding></Branding>
      <div className="md:w-8/12 lg:w-6/12 w-8/12 flex flex-col gap-5">
        <FormTitle
          title="Create Account"
          subtitle="View your insights."
        ></FormTitle>
        <ErrorPopup errorMessage={error}></ErrorPopup>
        <div className="flex flex-col gap-3 text-xs md:text-base">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Input
                type="text"
                placeholder="First Name"
                onChange={(e) => (firstName.current = e.target.value)}
              />
              <Input
                type="text"
                placeholder="Last Name"
                onChange={(e) => (lastName.current = e.target.value)}
              />
            </div>
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
          <button
            className="mt-5 text-white font-semibold px-2 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500"
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
      <FormAlternativeOption
        question={"Have an account?"}
        path={"/login"}
        pathDescriptor={"Log In"}
      ></FormAlternativeOption>
    </form>
  );
}
