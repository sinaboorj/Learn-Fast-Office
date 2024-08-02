import { Link} from "react-router-dom";
import '../sass/navbar.scss'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import '../sass/navSections.scss'
import Strings from "../helper/strings";
import { PublicContext } from "../context/publicContext";

const NavSection = () => {
    const { hidden, userData, setUserData, setMessageStatus, setSchemaLoginError, fetchData } = useContext(UserContext)
    const { lang, setLang, activeLink, setActiveLink } = useContext(PublicContext)

    return (
        <>
            <nav className="nav-sections">
                <Link to='/api/planning' className="navlink" >{Strings.Planning}</Link>
                <Link to='/api/maintenance' className="navlink" > {Strings.Maintenance}</Link>
                <Link to='/api/statistics' className="navlink" > {Strings.Statistics}</Link>
            </nav>
        </>
    );
}
 
export default NavSection;