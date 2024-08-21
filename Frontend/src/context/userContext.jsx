import { createContext, useEffect, useState } from "react";
export const UserContext=createContext()

//********************************************** User Context ****************************** */
const UserContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true)
  const [Msg, setMsg] = useState({});
  const [messageStatus, setMessageStatus] = useState(false);
  const [schemaLoginError, setSchemaLoginError] = useState(false);
  const [schemaRegisterError, setSchemaRegisterError] = useState(false);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({})
  const backendUrl = 'http://localhost:3000' // برای تغییرات در همه ی کامپوننت ها جستجو شود

  //*********************************  read email, userID and token to local storage   ****************** */ 
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData')) ?? {};
    setUserData(storedUserData);
  }, []);

  //*********************************  add email, userID and token to local storage   ****************** */ 
  useEffect(() => {
    if (userData !== undefined)
      localStorage.setItem('userData', JSON.stringify({
      No: userData?.No,
      email: userData?.email,
      level: userData?.level,
      token: userData?.token,
      unit: userData?.unit,
      userID: userData?.userID,
    }));

  }, [userData]);
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': userData?.token
  };


  
  const UserContextValue = {
    login, setLogin, Msg, setMsg, messageStatus, setMessageStatus, schemaLoginError,
    setSchemaLoginError, schemaRegisterError, setSchemaRegisterError,
    userData, setUserData, headers, isLoading, setIsLoading, backendUrl,
    profile, setProfile
  }

  return <UserContext.Provider value={UserContextValue}>{children} </UserContext.Provider>
}
export default UserContextProvider



