import '../sass/navbar.scss'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import NavLogin from "./navLogin";
import NavNotLogin from "./navNotLogin";

const Navbar = () => {
    const { hidden, userData} = useContext(UserContext)
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
    
        </>
    );
}
 
export default Navbar;
