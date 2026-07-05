import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gift from "./pages/Gift";
import Order from "./pages/Order";
import Pay from "./pages/Pay";
import Store from "./pages/Store";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-grow pt-20 lg:pt-24">
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/dashboard" />}
            />

            <Route path="/dashboard" element={<Home />} />
            <Route path="/giftcards" element={<Gift />} />
            <Route path="/ordering" element={<Order />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/store" element={<Store />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;