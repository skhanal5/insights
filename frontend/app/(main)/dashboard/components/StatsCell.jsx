import {
  ClipboardDocumentCheckIcon,
  EnvelopeOpenIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

export default function StatsCell({ title, value }) {
  const iconStyle =
    "h-4 md:h-5 items-center text-blue-700";
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
    <div className="p-5 flex justify-center shadow hover:shadow-lg bg-white hover:bg-gray-100/2 rounded-lg transition">
      <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-center">
        <div className="rounded-full p-2 bg-blue-100">{getIcon()}</div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xs md:text-sm">{title}</span>
          <span className="text-sm font-semibold md:text-base">{value}</span>
        </div>
      </div>
    </div>
  );
}
