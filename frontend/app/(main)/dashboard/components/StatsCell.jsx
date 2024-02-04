import {
  ClipboardDocumentCheckIcon,
  EnvelopeOpenIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import Badge from "./Badge";

export default function StatsCell({ title, value }) {
  const getIcon = () => {
    switch (title) {
      case "Applications":
        return (
          <ClipboardDocumentCheckIcon
          ></ClipboardDocumentCheckIcon>
        );
      case "Interviews":
        return <EnvelopeOpenIcon></EnvelopeOpenIcon>;
      case "Callbacks":
        return (
          <ArrowTrendingUpIcon></ArrowTrendingUpIcon>
        );
      case "Rejections":
        return (
          <ArrowTrendingDownIcon></ArrowTrendingDownIcon>
        );
      case "Offers":
        return (
          <ChatBubbleLeftEllipsisIcon
          ></ChatBubbleLeftEllipsisIcon>
        );
    }
  };

  return (
    <div className="p-5 flex flex-col lg:flex-row justify-content items-center gap-3 shadow hover:shadow-lg bg-white hover:bg-gray-100/2 rounded-lg transition">
      <Badge color="bg-blue-100" icon={getIcon()}></Badge> 
      <div className="flex flex-col items-center lg:items-start">
        <span className="text-xs font-semibold text-slate-600/60 lg:text-sm">
          {title}
        </span>
        <span className="text-sm font-bold text-slate-600 lg:text-lg">
          {value}
        </span>
      </div>
    </div>
  );
}
