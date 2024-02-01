import Link from "next/link";
import Image from "next/image";
export default function ResourcesPanel() {
  return (
    <div className="lg:w-max p-5 flex flex-col rounded-lg bg-white justify-between items-center shadow hover:shadow-lg transition">
      <Image
        src="/help.svg"
        height={150}
        width={150}
      ></Image>
      <div className="flex flex-col gap-1">
        <div className="text-sm text-center">
          Having trouble with your job search?
        </div>
        <button className="p-2 bg-blue-600 rounded-lg text-xs font-semibold text-white">
          View our resources
        </button>
      </div>
    </div>
  );
}
