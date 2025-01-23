import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositType from "./components/DepositType/DepositType";
import RegularSavingsDeposit from "./components/RegularSavingsDeposit/RegularSavingsDeposit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DepositType />} />
        <Route path="/saving-deposit" element={<RegularSavingsDeposit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
