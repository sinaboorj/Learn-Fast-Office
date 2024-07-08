import { createContext, useEffect, useState } from "react";
import Strings from "../helper/strings";

export const PublicContext = createContext(null) 
//********************************************** Language Context ****************************** */
const PublicContextProvider = (props) => {

  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('language')) ?? true)

  //********************************* Save local storage ************************************* */ 
  useEffect(() => {
    if (lang !== undefined) localStorage.setItem('language', JSON.stringify(lang))
  }, [lang])

  //******************************** Main Body ************************************************ */
  
  lang ? Strings.setLanguage('en') : Strings.setLanguage('fa')

  //********************************* Value ************************************************* */
  const PublicContextValue = { lang, setLang }
    
  return <PublicContext.Provider value={PublicContextValue}>{props.children}</PublicContext.Provider>
}
 
export default PublicContextProvider;