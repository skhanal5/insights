import Header from "./Header";

export default function ContentContainer({ children }) {
  return (
    <div className="overflow-auto flex-1 p-10 bg-slate-100 w-screen max-w-screen h-screen max-h-screen">
      <div className="w-full h-full flex flex-col gap-5">
        <Header></Header>
        {children}
      </div>
    </div>
  );
}
