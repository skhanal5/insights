export default function StatusCell({ status }) {
    let bgColor = "";
    let textColor = "";
    let ringColor = "";
    
    if (status === "Applied") {
      bgColor = "bg-blue-50";
      textColor = "text-blue-500";
      ringColor = "ring-blue-500/10";
    } else if (status == "Offer") {
      bgColor = "bg-green-50";
      textColor = "text-green-500";
      ringColor = "ring-green-500/10";
    } else if (status == "Phone Screen") {
      bgColor = "bg-amber-50";
      textColor = "text-amber-500";
      ringColor = "ring-amber-500/10";
    } else if (status == "Rejected") {
      bgColor = "bg-red-70";
      textColor = "text-red-700";
      ringColor = "ring-red-700/10";
    } else if (status == "Assessment") {
      bgColor = "bg-rose-50";
      textColor = "text-rose-500";
      ringColor = "ring-rose-500/10";
    } else if (status == "Ghosted") {
      bgColor = "bg-slate-50";
      textColor = "text-slate-500";
      ringColor = "ring-slate-500/10";
    } else if (status == "Interview") {
      bgColor = "bg-indigo-50";
      textColor = "text-indigo-500";
      ringColor = "ring-indigo-500/10";
    }
  
    return (
      <div
        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${bgColor} ${textColor} ${ringColor}`}
      >
        {status}
      </div>
    );
  }