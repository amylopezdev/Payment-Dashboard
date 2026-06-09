import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MetricCard from "../MetricCard";

describe("MetricCard", () => {
  it("Renders title", () => {
    render(<MetricCard title="Test" value="2" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("Renders value", () => {
    render(<MetricCard title="Test" value="2" />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
  it("Matches snapshot", () => {
    const { asFragment } = render(<MetricCard title="Test" value="2" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
