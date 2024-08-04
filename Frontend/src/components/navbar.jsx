import '../sass/navbar.scss'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { PublicContext } from "../context/publicContext";
import NavSection from "./navSections";
import NavLogin from "./navLogin";
import NavNotLogin from "./navNotLogin";

const Navbar = () => {
    const { hidden, userData} = useContext(UserContext)
    const { navSection } = useContext(PublicContext)
    //************************************* show the First client's name in Navbar  ***************************** */
    var userStatus = false;
    var firstStrEmail = userData?.email?.charAt(0)
    //**************************************************************************************** */
   
    if (firstStrEmail !== undefined) {
        userStatus = true;
    } else { userStatus = false; }

    return (
        <>
            {!hidden && (
                <>
                    {userStatus
                        ? <NavLogin data={firstStrEmail} />
                        : <NavNotLogin />
                    }
                </>
            )}
            {navSection && <NavSection />}
        </>
    );
}
 
export default Navbar;
