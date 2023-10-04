import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <div className="h-16 w-full flex justify-center items-center">
        <h1 className="text-3xl text-primary font-bold text-center">Good Market</h1>
      </div>
      <div id="content">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Login></Login>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
