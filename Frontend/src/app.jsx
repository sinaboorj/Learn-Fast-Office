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
import DashboardContextProvider from "./context/dashboardContext";
import TargetsSite from "./components/targetsStie";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <PublicContextProvider>
          <DashboardContextProvider>
            <DropDownMenu />
            <Navbar />
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about-hossein-zarei" element={<About />} />
              <Route path="/login" element={<SignInUp />} />
              <Route path="/targets" element={<TargetsSite />} />
              <Route path="/:userID/mail-verification/:token" element={<EmailVerify />} />
              <Route path="*" element={<NotPage />} />
            </Routes>
            <Footer />
          </DashboardContextProvider>
        </PublicContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
