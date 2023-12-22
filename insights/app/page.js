import Login from "./components/log-in";
import CreateAccount from "./components/create-account";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center p-10">
      <CreateAccount></CreateAccount>
    </main>
  );
}
