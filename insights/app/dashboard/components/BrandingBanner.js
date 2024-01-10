import Image from "next/image";
export default function BrandingBanner() {
  return (
    <div className="mt-5 flex flex-row gap-1 items-center justify-content">
      <Image
        src="/insights.svg"
        width={100}
        height={100}
        className="w-14"
      ></Image>
      <span className="hidden text-lg font-semibold">Insights</span>
    </div>
  );
}
