import { useState } from "react";
import usePayments from "../hooks/usePayments";
import Loading from "../components/Loading";
import Error from "../components/Error";
import MetricCards from "../components/MetricCards";
import FilterButtons from "../components/FilterButtons";
import PaymentsTable from "../components/PaymentsTable";
import "../styles/HomePage.css";

const HomePage = () => {
  const { recentPayments, error, isLoading } = usePayments();

  const [activeFilter, setActiveFilter] = useState("all");

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;

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
      <MetricCards recentPayments={recentPayments} />
      <h2 className="section-heading">Recent Payments</h2>
      <FilterButtons
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <PaymentsTable payments={filteredPayments} />
    </main>
  );
};

export default HomePage;
