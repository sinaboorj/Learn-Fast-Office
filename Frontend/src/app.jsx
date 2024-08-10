import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './pages/home'
import Footer from "./components/footer";
import UserContextProvider from "./context/userContext";
import SignInUp from "./pages/users/signInUp";
import EmailVerify from "./pages/users/emailVerify"
import About from "./components/about";
import DropDownMenu from "./components/dropDownMenu";
import PublicContextProvider from "./context/publicContext";
import "./sass/main.scss";
import './sass/font.scss'
import NotPage from "./pages/notpage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./dashboard/dashboard";
import Analysis from "./sections/analysis";
import TopTextLogo from "./components/topTextLogo";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <PublicContextProvider>
          <DropDownMenu />
          <Navbar />
          <TopTextLogo />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/api/dashboard" element={<Dashboard />} />
            <Route path="/api/about-hossein-zarei" element={<About />} />
            <Route path="/api/login" element={<SignInUp />} />
            <Route path="/api/statistics" element={<Analysis />} />
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
