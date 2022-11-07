import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
