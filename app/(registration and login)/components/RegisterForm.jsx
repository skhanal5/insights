import Link from "next/link"
export default function CreateForm() {

  return (
    <form className="p-5 md:p-0 lg:p-0 md:w-6/12 lg:w-5/12 h-full rounded-lg bg-white flex flex-col justify-between items-center">
      <div className="md:text-lg flex flex-row text-2xl font-bold mt-5 justify-center items-center gap-1">
        <img src="/insights.svg" className="md:w-20 w-1/6" alt="eye"></img>
        <h1>Insights</h1>
      </div>
      <div className="md:w-8/12 lg:w-6/12 w-8/12">
        <div className="flex flex-col mb-20">
          <div className="font-semibold text-3xl">Create Account</div>
          <div className="text-sm text-gray-600">
            Sign up and view your insights.
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="p-2 rounded-lg border-2 border-black-100">
              <input
                className="text-black h-full w-full focus:outline-none"
                type="text"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="p-2 rounded-lg border-2 border-black-100">
              <input
                className="text-black h-full w-full focus:outline-none"
                type="password"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="text-white font-semibold px-2 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500">
              Create Account
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
      <div className="flex flex-row gap-2 p-5 text-sm text-nowrap">
        <div className="text-gray-400">Have an account?</div>
        <Link href="/login">
          <div className="font-semibold text-gray-600">Log in</div>
        </Link>
      </div>
    </form>
  );
}
