import { createContext, useEffect, useState } from "react";
import Strings from "../helper/strings";

export const PublicContext = createContext() 

const PublicContextProvider = ({ children }) => {

  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('language')) ?? true)
  const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') ?? 'home'); //برای ثابت ماندن رنگ لینک انتخابی

  useEffect(() => {
    let path = window.location.pathname;
    if (path === '/') {
      setActiveLink('home');
      localStorage.setItem('activeLink', 'home')
    }  
  }, [])
  
  useEffect(() => {
    if (lang !== undefined) localStorage.setItem('language', JSON.stringify(lang))
    if (activeLink !== undefined) {
      localStorage.setItem('activeLink', activeLink)

    }

  }, [lang, activeLink])

  //******************************** Main Body ************************************************ */
  lang ? Strings.setLanguage('en') : Strings.setLanguage('fa')

  //********************************* Value ************************************************* */
  const PublicContextValue = {
    lang, setLang, activeLink, setActiveLink
  }
    
  return <PublicContext.Provider value={PublicContextValue}>{children}</PublicContext.Provider>
}
 
export default PublicContextProvider;