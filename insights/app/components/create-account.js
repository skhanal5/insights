export default function CreateAccount({ setTrigger }) {
  return (
    <div className="grow flex flex-col justify-between items-center">
      <div className="flex flex-row text-2xl font-bold mt-5 justify-center items-center gap-1">
        <img src="/insights.svg" className="w-1/6" alt="eye"></img>
        <h1>Insights</h1>
      </div>
      <div className="w-full">
        <div className="flex flex-col mb-20">
          <div className="font-semibold text-3xl">Welcome!</div>
          <div className="text-sm text-gray-600">
            Create your account and see your insights.
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
              Sign Up
            </button>
            <div className="flex py-2 items-center justify-center w-full">
              <div className="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">Or</span>
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
        <div className="text-gray-400">Already registered?</div>
        <button onClick={setTrigger}>
          <div className="font-semibold text-gray-600">Log in</div>
        </button>
      </div>
    </div>
  );
}
