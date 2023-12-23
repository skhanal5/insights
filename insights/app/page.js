'use client'

import Login from "./components/log-in";
import CreateAccount from "./components/create-account";
import { useState } from "react";

export default function Home() {
  const [trigger, setTrigger] = useState(true);

  return (
    <main className="flex flex-col min-h-screen justify-center items-center p-10">
      {
        trigger ?
        (
          <Login setTrigger={() => setTrigger(false)}></Login>
        )
        :
        (
          <CreateAccount setTrigger={() => setTrigger(true)}></CreateAccount>
        )
      }
    </main>
  );
}
