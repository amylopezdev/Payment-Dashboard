import PaymentsRow from "./PaymentsRow";
import "./PaymentsTable.css";

const PaymentsTable = ({ payments }) => {
  return (
    <div className="payments-table-wrapper">
      <table className="payments-table">
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
    </div>
  );
};

export default PaymentsTable;