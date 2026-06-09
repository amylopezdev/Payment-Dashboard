import "../styles/MetricCard.css";

const MetricCard = ({ title, value }) => {
  return (
    <div className="metric-card">
      <div className="metric-card__title">{title}</div>
      <div className="metric-card__value">{value}</div>
    </div>
  );
};

export default MetricCard;
