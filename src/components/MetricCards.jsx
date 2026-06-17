import calculateTotals from "../utils/calculateTotals";
import "../styles/MetricCard.css";

const MetricCards = ({ recentPayments }) => {
  const metrics = [
    {
      title: "total collected",
      value: calculateTotals(recentPayments, "paid"),
    },
    { title: "pending", value: calculateTotals(recentPayments, "pending") },
    { title: "failed", value: calculateTotals(recentPayments, "failed") },
    { title: "total payments", value: recentPayments.length },
  ];
  return (
    <dl className="metrics-grid">
      {metrics.map((metric) => (
        <div key={metric.title} className="metric-card">
          <dt className="metric-card__title">{metric.title}</dt>
          <dd className="metric-card__value">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default MetricCards;
