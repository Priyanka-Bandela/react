import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container"></div>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
