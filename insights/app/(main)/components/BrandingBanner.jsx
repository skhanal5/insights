import Image from "next/image";
export default function BrandingBanner() {
  return (
    <div className="mt-5 flex flex-row gap-1 items-center justify-content">
      <Image
        src="/insights.svg"
        width={500}
        height={500}
        className="w-14"
        alt="Insights logo"
      ></Image>
      <span className="hidden lg:flex text-lg font-semibold">Insights</span>
    </div>
  );
}
