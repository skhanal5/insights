export default function FormTitle({title, subtitle}) {
  return (
    <div className="flex flex-col">
      <div className="font-semibold text-lg lg:text-2xl">{title}</div>
      <div className="text-sm lg:text-base text-gray-600">
        {subtitle}
      </div>
    </div>
  );
}
