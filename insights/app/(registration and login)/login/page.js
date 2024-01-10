'use client'

import Login from "../components/log-in";
import CreateAccount from "../components/create-account";
import { useState } from "react";

export default function Home() {
  const [trigger, setTrigger] = useState(true);

  return (
    <div className="md:bg-blue-600 md:flex-row flex flex-col min-h-screen max-h-screen h-screen justify-center items-center">
      <div className="md:grow"></div>
      <Login></Login>
    </div>
  );
}
