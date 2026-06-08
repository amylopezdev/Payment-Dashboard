import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/payments";

const usePayments = () => {
  const [recentPayments, setRecentPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error();
        const result = await response.json();
        setRecentPayments(result);
      } catch {
        setError("Error! Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return { recentPayments, error, isLoading };
};

export default usePayments;
