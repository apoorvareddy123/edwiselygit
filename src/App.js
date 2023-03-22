import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalData } from "./context/GlobalContext";
import Home from "./components/Home";
import Java from "./components/Java";
import Python from "./components/Python";

function App() {
  return (
    <GlobalData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Java" element={<Java />}></Route>
          <Route path="Python" element={<Python />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalData>
  );
}

export default App;
