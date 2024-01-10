import SidebarCellContainer from "./SidebarCellContainer";
import BrandingBanner from "./BrandingBanner";

export default function SideBar() {


  return (
    <div className="p-2.5 flex flex-col gap-5 bg-white border-r border-slate-200 justify-start">
      <BrandingBanner></BrandingBanner>
      <SidebarCellContainer></SidebarCellContainer>
    </div>
  );
}
