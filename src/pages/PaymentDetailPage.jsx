import { useParams } from "react-router-dom";
import usePayment from "../hooks/usePayment";
import Loading from "../components/Loading";
import Error from "../components/Error";
import "../styles/PaymentsTable.css";
import "../styles/PaymentDetailPage.css";
import BackButton from "../components/BackButton";

const PaymentDetailPage = () => {
  const { id } = useParams();

  const { payment, error, isLoading } = usePayment(id);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;

  const { description, customer, date, currency, amount, status } = payment;

  return (
    <main className="payment-detail-page">
      <BackButton />
      <header className="payment-detail-header">
        <p className="payment-detail-header__eyebrow">Payment Details</p>
        <h1 className="payment-detail-header__title">{customer}</h1>
        <span className={`status-badge status-badge--${status}`}>{status}</span>
      </header>
      <section className="payment-detail-card">
        <p className="payment-detail-card__amount">
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: currency,
          }).format(amount)}
        </p>
        <dl className="payment-detail-fields">
          <div>
            <dt className="payment-detail-field__label">Description</dt>
            <dd className="payment-detail-field__value">{description}</dd>
          </div>
          <div>
            <dt className="payment-detail-field__label">Date</dt>
            <dd className="payment-detail-field__value">{date}</dd>
          </div>
          <div>
            <dt className="payment-detail-field__label">Reference</dt>
            <dd className="payment-detail-field__value payment-detail-field__value--mono">
              {id}
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
};

export default PaymentDetailPage;
