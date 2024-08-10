import { useContext } from "react";  
import { UserContext } from "../context/userContext";  
import { PublicContext } from "../context/publicContext";  

const navFunctions = () => {  
    const { setUserData, setMessageStatus, setSchemaLoginError } = useContext(UserContext)
    const { setActiveLink } = useContext(PublicContext)

    const exit = () => {  
        setUserData({});  
        localStorage.removeItem('userData');  
        setMessageStatus(false);  
        setSchemaLoginError(false);  
    };  

    const handleLinkClick = (link) => {  
        setActiveLink(link);  
    };  

    return { exit, handleLinkClick };  
};  

export default navFunctions; 