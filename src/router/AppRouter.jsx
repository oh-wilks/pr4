import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import Footer from "../components/Footer";
import BookingPage from "../pages/BookingPage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="booking" element={<BookingPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
};

export default AppRouter
