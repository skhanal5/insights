import Header from "./Header";

export default function ContentContainer({ children }) {
  return (
    <div className="overflow-auto h-screen flex-1 p-10 bg-slate-100 w-screen max-w-screen">
      <div className="w-full flex flex-col gap-5">
        <Header></Header>
        {children}
      </div>
    </div>
  );
}
