import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './pages/home'
import Cart from './pages/cart/cart'
import Footer from "./components/footer";
import UserContextProvider from "./context/userContext";
import SignInUp from "./pages/users/signInUp";
import EmailVerify from "./pages/users/emailVerify"
import Dashboard from "./dashboard/dashboard";
import Appointment from "./appointment/appointment";
import Products from "./products/products";
import About from "./components/about";
import Analysis from "./pages/analysis/analysis";
import LanguageContextProvider from "./context/languageContext";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <LanguageContextProvider>
        <Navbar />
        <Routes>
          <Route path="/api/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/api/dashboard" element={<Dashboard />} />
          <Route path="/api/products" element={<Products />} />
          <Route path="/api/appointment" element={<Appointment />} />
          <Route path="/api/about-hossein-zarei" element={<About />} />
          <Route path="/api/login" element={<SignInUp />} />
          <Route path="/api/monitoring-analysis" element={<Analysis />} />
          <Route path="/api/:userID/mail-verification/:token" element={<EmailVerify />} />
        </Routes>
          <Footer />
          </LanguageContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
