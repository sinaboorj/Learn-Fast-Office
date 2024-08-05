import { Link, useNavigate} from "react-router-dom";
import '../sass/navbar.scss'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import '../sass/navSections.scss'
import Strings from "../helper/strings";
import { PublicContext } from "../context/publicContext";
import {} from "../pages/analysis/analysis"


const NavSection = () => {
    const { hidden, userData, setUserData, setMessageStatus, setSchemaLoginError, fetchData } = useContext(UserContext)
    const { lang, setLang, activeLink, setActiveLink } = useContext(PublicContext)
    const nav = useNavigate()
    
    return (
        <>
            <br />
            <nav className="nav-sections">
                <Link onClick={()=>{nav('/api/sections')}} to='/api/planning' className="nav-sectionlink border-nav-section" >{Strings.Planning}</Link>
                <Link onClick={()=>{nav('/api/sections')}} to='/api/maintenance' className="nav-sectionlink border-nav-section" > {Strings.Maintenance}</Link>
                <Link onClick={()=>{nav('/api/sections')}} to='/api/statistics' className="nav-sectionlink border-nav-section" > {Strings.Statistics}</Link>
            </nav>
        </>
    );
}
 
export default NavSection;