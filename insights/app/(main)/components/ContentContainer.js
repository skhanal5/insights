import Header from "../components/Header";

export default function ContentContainer({ children }) {
  return (
    <div className="flex-1 p-10 bg-gray-100">
      <div className="flex flex-col gap-5">
        <Header></Header>
        {children}
      </div>
    </div>
  );
}
