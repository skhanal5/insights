import { Button } from "@/components/ui/button";

export function UtilButton({buttonName, buttonIcon, buttonStyle}) {
  return (
    <Button variant="outline" className={`${buttonStyle} flex flex-row gap-2`}>
      <span className="hidden lg:flex">{buttonName}</span>
      <span className="w-4">
        {buttonIcon}
      </span>
    </Button>
  );
}
