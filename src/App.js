import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositType from "./components/DepositType/DepositType";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DepositType />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
