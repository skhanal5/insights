import SidebarLinkContainer from "./SidebarLinkContainer";
import BrandingBanner from "./BrandingBanner";

export default function SideBar() {


  return (
    <div className="p-2 lg:py-3 lg:px-16 flex flex-col gap-10 bg-white border-r border-slate-200 justify-start">
      <BrandingBanner></BrandingBanner>
      <SidebarLinkContainer></SidebarLinkContainer>
    </div>
  );
}
