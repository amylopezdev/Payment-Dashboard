import { useState } from "react";
import usePayments from "../hooks/usePayments";
import calculateTotals from "../utils/calculateTotals";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PaymentsTable from "../components/PaymentsTable";
import MetricCard from "../components/MetricCard";
import FilterButton from "../components/FilterButton";
import "../styles/HomePage.css";

const HomePage = () => {
  const { recentPayments, error, isLoading } = usePayments();

  const [activeFilter, setActiveFilter] = useState("all");

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const total = calculateTotals(recentPayments, "paid");
  const pending = calculateTotals(recentPayments, "pending");
  const failed = calculateTotals(recentPayments, "failed");

  const filteredPayments =
    activeFilter === "all"
      ? recentPayments
      : recentPayments.filter((payment) => payment.status === activeFilter);

  return (
    <main className="home-page">
      <header className="home-page-header">
        <p className="home-page-header__eyebrow">Overview</p>
        <h1 className="home-page-header__title">Payments</h1>
      </header>
      <dl className="metrics-grid">
        <MetricCard title="Total Collected" value={total} />
        <MetricCard title="Pending" value={pending} />
        <MetricCard title="Failed" value={failed} />
        <MetricCard title="Total Payments" value={recentPayments.length} />
      </dl>
      <h2 className="section-heading">Recent Payments</h2>
      <ul className="payments-filters">
        <FilterButton
          setActiveFilter={setActiveFilter}
          status="all"
          activeFilter={activeFilter}
        />
        <FilterButton
          setActiveFilter={setActiveFilter}
          status="paid"
          activeFilter={activeFilter}
        />
        <FilterButton
          setActiveFilter={setActiveFilter}
          status="pending"
          activeFilter={activeFilter}
        />
        <FilterButton
          setActiveFilter={setActiveFilter}
          status="failed"
          activeFilter={activeFilter}
        />
      </ul>
      <PaymentsTable payments={filteredPayments} />
    </main>
  );
};

export default HomePage;
