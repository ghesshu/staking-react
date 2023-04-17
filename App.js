// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from "./routes/Home";
import Swap from "./routes/Swap";
import Staking from "./routes/Staking";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/swap" element={<Swap />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
