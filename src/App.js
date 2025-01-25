import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositType from "./components/DepositType/DepositType";

// import "./App.css";
import Branch from "./components/BottomSheets/Branch/Branch";
import RegularSavingsDeposit from "./components/RegularSavingsDeposit/RegularSavingsDeposit";
import Withdraw from "./components/BottomSheets/Withdraw/Withdraw";
import Payment from "./components/BottomSheets/Payment/Payment";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DepositType />} />
                <Route path="/branch" element={<Branch />} />
                <Route
                    path="/saving-deposit"
                    element={<RegularSavingsDeposit />}
                />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
