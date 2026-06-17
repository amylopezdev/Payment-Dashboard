import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PaymentDetailPage from "./pages/PaymentDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/payments/:id" element={<PaymentDetailPage />} />
    </Routes>
  );
};

export default App;
