import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositType from "./components/DepositType/DepositType";
import Withdraw from "./components/BottomSheets/Withdraw/Withdraw";
import Payment from "./components/BottomSheets/Payment/Payment";
import Branch from "./components/BottomSheets/Branch/Branch";
import RegularSavingsDeposit from "./components/RegularSavingsDeposit/RegularSavingsDeposit";
import Receipt from "./components/Receipt/Receipt";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DepositType />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/branch" element={<Branch />} />
                <Route path="/receipt" element={<Receipt />} />
                <Route
                    path="/saving-deposit"
                    element={<RegularSavingsDeposit />}
                />
                <Route
                    path="/short-investment"
                    element={<RegularSavingsDeposit />}
                />
                <Route
                    path="/long-investment"
                    element={<RegularSavingsDeposit />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
