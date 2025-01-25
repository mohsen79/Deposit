import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositType from "./components/DepositType/DepositType";
import RegularSavingsDeposit from "./components/RegularSavingsDeposit/RegularSavingsDeposit";
import Receipt from "./components/Receipt/Receipt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DepositType />} />
        <Route path="/saving-deposit" element={<RegularSavingsDeposit />} />
        <Route path="/receipt" element={<Receipt />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
