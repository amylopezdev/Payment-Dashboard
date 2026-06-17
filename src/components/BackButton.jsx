import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/" className="back-link">
      ← Payments
    </Link>
  );
};

export default BackButton;
