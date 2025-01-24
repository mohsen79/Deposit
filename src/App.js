import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositType from "./components/DepositType/DepositType";

import "./App.css";
import Branch from "./components/BottomSheets/Branch/Branch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DepositType />} />
        <Route path="/branch" element={<Branch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
