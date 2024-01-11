import { Button } from "@/components/ui/button";

export function UtilButton({buttonName, buttonIcon, buttonStyle}) {
  return (
    <Button variant="outline" className={buttonStyle}>
      {buttonName}
      <span className="ml-2 h-4 w-4">
        {buttonIcon}
      </span>
    </Button>
  );
}
