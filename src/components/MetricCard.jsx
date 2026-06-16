import "../styles/MetricCard.css";

const MetricCard = ({ title, value }) => {
  return (
    <div className="metric-card">
      <dt className="metric-card__title">{title}</dt>
      <dd className="metric-card__value">{value}</dd>
    </div>
  );
};

export default MetricCard;
