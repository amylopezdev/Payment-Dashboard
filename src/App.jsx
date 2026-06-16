import { useState } from "react";
import usePayments from "./hooks/usePayments";
import calculateTotals from "./utils/calculateTotals";
import PaymentsTable from "./components/PaymentsTable";
import MetricCard from "./components/MetricCard";
import "./App.css";
import FilterButton from "./components/FilterButton";

const App = () => {
  const { recentPayments, error, isLoading } = usePayments();

  const [activeFilter, setActiveFilter] = useState("all");

  if (isLoading) return <div className="app-loading">Loading</div>;
  if (error) return <div className="app-error">{error}</div>;

  const total = calculateTotals(recentPayments, "paid");
  const pending = calculateTotals(recentPayments, "pending");
  const failed = calculateTotals(recentPayments, "failed");

  const filteredPayments =
    activeFilter === "all"
      ? recentPayments
      : recentPayments.filter((payment) => payment.status === activeFilter);

  return (
    <main className="app">
      <header className="app-header">
        <p className="app-header__eyebrow">Overview</p>
        <h1 className="app-header__title">Payments</h1>
      </header>
      <dl className="metrics-grid">
        <MetricCard title="Total Collected" value={total} />
        <MetricCard title="Pending" value={pending} />
        <MetricCard title="Failed" value={failed} />
        <MetricCard title="Total Payments" value={recentPayments.length} />
      </dl>
      <h2 className="section-heading">Recent Payments</h2>
      <ul className="payments-filters">
        <FilterButton setActiveFilter={setActiveFilter} status="all" activeFilter={activeFilter} />
        <FilterButton setActiveFilter={setActiveFilter} status="paid" activeFilter={activeFilter} />
        <FilterButton setActiveFilter={setActiveFilter} status="pending" activeFilter={activeFilter} />
        <FilterButton setActiveFilter={setActiveFilter} status="failed" activeFilter={activeFilter} />
      </ul>
      <PaymentsTable payments={filteredPayments} />
    </main>
  );
};

export default App;
