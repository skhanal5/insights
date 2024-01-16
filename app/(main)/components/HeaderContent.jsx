export default function HeaderContent({ header, description }) {
  return (
    <div>
      <h2 className="font-bold text-xl font-blue-700"> {header} </h2>
      <p className="mt-1 text-xs font-light font-gray-100">{description}</p>
    </div>
  );
}
