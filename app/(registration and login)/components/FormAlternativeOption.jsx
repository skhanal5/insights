import Link from "next/link";
export default function FormAlternativeOption({
  question,
  path,
  pathDescriptor,
}) {
  return (
    <div className="flex flex-row gap-2 p-5 text-sm text-nowrap mb-5">
      <div className="text-gray-400">{question}</div>
      <Link href={path}>
        <div className="font-semibold text-gray-600">{pathDescriptor}</div>
      </Link>
    </div>
  );
}
