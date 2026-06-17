import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <span className="loading__spinner" aria-hidden="true" />
      <p className="loading__text">Loading</p>
    </div>
  );
};

export default Loading;
