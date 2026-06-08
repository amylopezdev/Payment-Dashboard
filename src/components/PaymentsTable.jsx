import PaymentsRow from "./PaymentsRow";

const PaymentsTable = ({ payments }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Payment ID</th>
          <th>Description</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <PaymentsRow key={payment.id} payment={payment} />
        ))}
      </tbody>
    </table>
  );
};

export default PaymentsTable;
