import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaymentsTable from "../PaymentsTable";

describe("PaymentsTable", () => {
  const mockPayments = [
    {
      id: "PM001",
      description: "Monthly subscription",
      amount: 49.99,
      currency: "GBP",
      status: "paid",
      customer: "Acme Corp",
      date: "2026-05-28",
    },
    {
      id: "PM002",
      description: "Annual licence fee",
      amount: 299.0,
      currency: "GBP",
      status: "paid",
      customer: "Bright Ideas Ltd",
      date: "2026-05-27",
    },
  ];
  it("Renders title", () => {
    render(<PaymentsTable payments={mockPayments} />);
    expect(screen.getByText("PM001")).toBeInTheDocument();
    expect(screen.getByText("PM002")).toBeInTheDocument();
  });
  it("Matches snapshot", () => {
    const { asFragment } = render(<PaymentsTable payments={mockPayments} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
