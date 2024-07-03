import { createContext, useEffect, useState } from "react";

export const UserContext=createContext(null)

//********************************************** User Context ****************************** */
const UserContextProvider = (props) => {
  const [login, setLogin] = useState(true)
  const [Msg, setMsg] = useState({});
  const [messageStatus, setMessageStatus] = useState(false);
  const [schemaLoginError, setSchemaLoginError] = useState(false);
  const [schemaRegisterError, setSchemaRegisterError] = useState(false);
  const [hidden, setHidden] = useState(false) //براي زماني كه ميخواهيم يك كاربر جديد را وريفاي كنيم و تمام صفحه شدن پيج وريفاي و مخفي شدن پيج فوتر و نوبار بالاي صفحه
  const [userData, setUserData] = useState() //email, userID and token 

 //*********************************  read email, userID and token to local storage   ****************** */ 
  useEffect(() => { 
    const userdata = localStorage.getItem('userData');
    setUserData(!!JSON.parse(userdata) ? JSON.parse(userdata) : {})
  }, [])

 //*********************************  add email, userID and token to local storage   ****************** */ 
  useEffect(() => { 
    if (userData !== undefined)
      localStorage.setItem('userData', JSON.stringify(userData))
  }, [userData])

  const UserContextValue = {
    login, setLogin, Msg, setMsg, messageStatus, setMessageStatus,
    schemaLoginError, setSchemaLoginError, schemaRegisterError, setSchemaRegisterError,
    hidden, setHidden, userData, setUserData
  }

  return <UserContext.Provider value={UserContextValue}>{props.children} </UserContext.Provider>
}
export default UserContextProvider





