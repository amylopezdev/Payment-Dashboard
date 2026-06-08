import usePayments from "./hooks/usePayments";
import calculateTotals from "./utils/calculateTotals";
import PaymentsTable from "./components/PaymentsTable";
import MetricCard from "./components/MetricCard";

const App = () => {
  const { recentPayments, error, isLoading } = usePayments();

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;
  const total = calculateTotals(recentPayments, "paid");
  const pending = calculateTotals(recentPayments, "pending");
  const failed = calculateTotals(recentPayments, "failed");
  return (
    <main>
      <p>Overview</p>
      <h1>Payments</h1>
      <MetricCard title="Total Collected" value={total} />
      <MetricCard title="Pending" value={pending} />
      <MetricCard title="Failed" value={failed} />
      <MetricCard title="Total Payments" value={recentPayments.length} />
      <PaymentsTable payments={recentPayments} />
    </main>
  );
};

export default App;
