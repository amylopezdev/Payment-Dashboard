import "../styles/FilterButton.css";

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const statuses = ["all", "paid", "pending", "failed"];
  return (
    <ul className="payments-filters">
      {statuses.map((status) => (
        <li key={status}>
          <button
            className={`payments-filters__btn${activeFilter === status ? " payments-filters__btn--active" : ""}`}
            aria-pressed={activeFilter === status}
            onClick={() => {
              setActiveFilter(status);
            }}
          >
            {status}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterButtons;
