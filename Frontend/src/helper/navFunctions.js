import { useContext } from "react";  
import { UserContext } from "../context/userContext";  
import { PublicContext } from "../context/publicContext";  

const navFunctions = () => {  
    const { userData, setUserData, setMessageStatus, setSchemaLoginError, fetchData } = useContext(UserContext)
    const { lang, setLang, activeLink, setActiveLink, setNavSection } = useContext(PublicContext)
 
    let url = window.location.href
    url = url.slice(0, url.indexOf('/api/'))

    const login = () => { //برای رفتن به لینک قبل از لاگین
        const url = window.location.href;
        if (url !== `${url}/api/login`) localStorage.setItem('previousURL', url)
    }

    const exit = () => {  
        setUserData({});  
        localStorage.removeItem('userData');  
        setMessageStatus(false);  
        setSchemaLoginError(false);  
    };  

    const handleLinkClick = (link) => {  
        setActiveLink(link);  
    };  

    return { exit, handleLinkClick, login };  
};  

export default navFunctions; 