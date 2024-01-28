import StatsCell from "./StatsCell";

export default function StatsPanel() {
  //make an API call here or in the parent..
  const metrics = [
    {
      name: "Applications",
      value: 50,
    },
    {
      name: "Interviews",
      value: 3,
    },
    {
      name: "Callbacks",
      value: 15,
    },
    {
      name: "Rejections",
      value: 10,
    },
    {
      name: "Offers",
      value: 10,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
      {metrics.map((metric) => {
        return (
          <StatsCell
            key={metric.name}
            title={metric.name}
            value={metric.value}
          ></StatsCell>
        );
      })}
    </div>
  );
}
