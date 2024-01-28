import {
  ClipboardDocumentCheckIcon,
  EnvelopeOpenIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

export default function StatsCell({ title, value }) {
  const iconStyle = "md:h-3 lg:h-5 text-blue-700";
  const getIcon = () => {
    switch (title) {
      case "Applications":
        return (
          <ClipboardDocumentCheckIcon
            className={iconStyle}
          ></ClipboardDocumentCheckIcon>
        );
      case "Interviews":
        return <EnvelopeOpenIcon className={iconStyle}></EnvelopeOpenIcon>;
      case "Callbacks":
        return (
          <ArrowTrendingUpIcon className={iconStyle}></ArrowTrendingUpIcon>
        );
      case "Rejections":
        return (
          <ArrowTrendingDownIcon className={iconStyle}></ArrowTrendingDownIcon>
        );
      case "Offers":
        return (
          <ChatBubbleLeftEllipsisIcon
            className={iconStyle}
          ></ChatBubbleLeftEllipsisIcon>
        );
    }
  };

  return (
    <div className="p-5 flex flex-col lg:flex-row justify-content items-center gap-3 shadow hover:shadow-lg bg-white hover:bg-gray-100/2 rounded-lg transition">
      <div className="rounded-full p-2 bg-blue-100">{getIcon()}</div>
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
