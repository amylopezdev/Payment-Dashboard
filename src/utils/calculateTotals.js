const calculateTotals = (payments, status) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(
    payments
      .filter((payment) => payment.status === status)
      .reduce((total, payment) => total + payment.amount, 0),
  );
};

export default calculateTotals;