import { useState, useEffect } from "react";

const usePayment = (id) => {
  const [payment, setPayment] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `http://localhost:3001/payments/${id}`;

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error();
        const result = await response.json();
        setPayment(result);
      } catch {
        setError("Error! Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayment();
  }, [id]);

  return { payment, error, isLoading };
};

export default usePayment;
