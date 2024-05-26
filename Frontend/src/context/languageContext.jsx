import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext(null) 

//********************************************** Language Context ****************************** */
const LanguageContextProvider = (props) => {
    const [language, setLanguage] = useState()


 //*********************************  Read local storage   ****************** */ 

useEffect(() => { 
    const lan = localStorage.getItem('language')
    setLanguage(!!JSON.parse(lan) ? JSON.parse(lan) : null)
  }, [])

 //*********************************  Save local storage   ****************** */ 
    useEffect(() => { 
    if (language !== undefined)
      localStorage.setItem('language', JSON.stringify(language))
  }, [language])
    
    
    
    const languageContextValue = {language, setLanguage}
    
    return <LanguageContext.Provider value={languageContextValue}>{props.children}</LanguageContext.Provider>
}
 
export default LanguageContextProvider;