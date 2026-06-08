const PaymentsRow = ({ payment }) => {
  const {id, description, customer, date, currency, amount, status} = payment;
  return (
    <tr>
      <td>{id}</td>
      <td>{description}</td>
      <td>{customer}</td>
      <td>{date}</td>
      <td>
        {new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: currency,
        }).format(amount)}
      </td>
      <td>{status}</td>
    </tr>
  );
};

export default PaymentsRow;
