import { Link } from "react-router-dom";

const PaymentsRow = ({ payment }) => {
  const { id, description, customer, date, currency, amount, status } = payment;
  return (
    <tr>
      <td className="col-id">
        <Link to={`/payments/${id}`}>{id}</Link>
      </td>
      <td>{description}</td>
      <td>{customer}</td>
      <td>{new Intl.DateTimeFormat("en-GB").format(new Date(date))}</td>
      <td className="col-amount">
        {new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: currency,
        }).format(amount)}
      </td>
      <td>
        <span className={`status-badge status-badge--${status}`}>{status}</span>
      </td>
    </tr>
  );
};

export default PaymentsRow;
