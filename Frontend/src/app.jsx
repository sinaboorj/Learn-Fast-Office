import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './pages/home'
import Footer from "./components/footer";
import UserContextProvider from "./context/userContext";
import SignInUp from "./pages/users/signInUp";
import EmailVerify from "./pages/users/emailVerify"
import About from "./components/about";
import Profile from "./pages/users/profile";
import DropDownMenu from "./components/dropDownMenu";
import PublicContextProvider from "./context/publicContext";
import "./sass/main.scss";
import './sass/font.scss'
import NotPage from "./pages/notpage";
import NavSection from "./components/navSections";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Analysis from "./pages/analysis/analysis";
import Dashboard from "./sections/dashboard";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <PublicContextProvider>
          <DropDownMenu />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/api/dashboard" element={<Dashboard />} />
            <Route path="/api/about-hossein-zarei" element={<About />} />
            <Route path="/api/login" element={<SignInUp />} />
            <Route path="/api/sections" element={<NavSection />} />
            <Route path="/api/statistics" element={<Analysis />} />
            <Route path="/api/user/:userID" element={<Profile />} />
            <Route path="/api/:userID/mail-verification/:token" element={<EmailVerify />} />
            <Route path="*" element={<NotPage />} />
          </Routes>
          <Footer />
        </PublicContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
