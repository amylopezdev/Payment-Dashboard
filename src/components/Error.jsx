import "../styles/Error.css";

const Error = ({ message }) => {
  return (
    <div className="error" role="alert">
      <p className="error__title">Something went wrong</p>
      {message && <p className="error__message">{message}</p>}
    </div>
  );
};

export default Error;
