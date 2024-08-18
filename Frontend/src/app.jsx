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
import TopTextLogo from "./components/topTextLogo";
import DashboardContextProvider from "./context/dashboardContext";
import { useEffect, useState } from "react";
import loadingImage from '/sysImage/loading.gif'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {  
    const timer = setTimeout(() => {  
      setIsLoading(false);  
    }, 3000); 

    return () => clearTimeout(timer);  
  }, []);  

  if (isLoading) {
    return (
    <div style={{width:'100vw', height:'100vh', display:'flex', alignItems:'center',margin:'auto', justifyContent:'center'}}>
      <h5 style={{ color: '#b7b2b2', textAlign: 'center' }}>Waiting... <img src={loadingImage} width={70} height={70} alt="Loading user" /></h5>
    </div>
  )
}  

  return (
    <>
      <UserContextProvider>
        <PublicContextProvider>
          <DashboardContextProvider>
            <DropDownMenu />
            <Navbar />
            <TopTextLogo />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about-hossein-zarei" element={<About />} />
              <Route path="/login" element={<SignInUp />} />
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
