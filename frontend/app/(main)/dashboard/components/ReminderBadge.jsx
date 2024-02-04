import { BoltIcon } from "@heroicons/react/24/outline";

export default function ReminderBadge() {
  return (
    <div className="h-max w-1/2 flex flex-col justify-content items-center bg-white rounded-full shadow hover:shadow-lg outline outline-1 outline-sky-200/50">
        <BoltIcon className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 bg-clip-text text-transparent"></BoltIcon>
    </div>
  );
}
