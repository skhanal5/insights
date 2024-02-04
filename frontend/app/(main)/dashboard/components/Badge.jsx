export default function Badge({color, icon}) {
  return (
    <div className={`${color} flex flex-row p-2 items-center rounded-full`}>
      <div className="w-4">{icon}</div>
    </div>
  );
}
