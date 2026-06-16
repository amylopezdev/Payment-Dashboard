import "../styles/FilterButton.css";

const FilterButton = ({ setActiveFilter, status, activeFilter }) => {
  const isActive = activeFilter === status;
  return (
    <li>
      <button
        className={`payments-filters__btn${isActive ? " payments-filters__btn--active" : ""}`}
        aria-pressed={isActive}
        onClick={() => {
          setActiveFilter(status);
        }}
      >
        {status}
      </button>
    </li>
  );
};

export default FilterButton;
