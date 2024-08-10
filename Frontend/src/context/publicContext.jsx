import { createContext, useEffect, useState } from "react";
import Strings from "../helper/strings";

export const PublicContext = createContext() 
//********************************************** Language Context ****************************** */
const PublicContextProvider = ({ children }) => {

  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('language')) ?? true)
  const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') ?? 'home'); //برای ثابت ماندن رنگ لینک انتخابی

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