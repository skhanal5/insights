import ReminderBadge from "./ReminderBadge";

const formatRoleText = (role) => {
  return (
    <div className="flex flex-row gap-1">
      <span className="font-base">{role}</span>
    </div>
  );
};

const formatDateText = (dateApplied) => {
  return (
    <div className="flex flex-row gap-1">
      <span className="font-light">Date Applied: </span>
      <span className="font-medium">{dateApplied}</span>
    </div>
  );
};

export default function ReminderCell({company, role, date_applied }) {
  return (
    <div className="flex flex-col h-max gap-4 items-center text-white">
      <ReminderBadge></ReminderBadge>
      <div className="flex flex-col justify-content items-center">
      <div className="text-lg">{company}</div>
        <div className="text-xs">{formatRoleText(role)}</div>
        <div className="text-xs">{formatDateText(date_applied)}</div>
      </div>
    </div>
  );
}
