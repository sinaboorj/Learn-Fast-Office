import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext=createContext()

//********************************************** User Context ****************************** */
const UserContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true)
  const [Msg, setMsg] = useState({});
  const [messageStatus, setMessageStatus] = useState(false);
  const [schemaLoginError, setSchemaLoginError] = useState(false);
  const [schemaRegisterError, setSchemaRegisterError] = useState(false);
  const [hidden, setHidden] = useState(false) //براي زماني كه ميخواهيم يك كاربر جديد را وريفاي كنيم و تمام صفحه شدن پيج وريفاي و مخفي شدن پيج فوتر و نوبار بالاي صفحه
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({})
  const backendUrl = 'http://localhost:5500'


  const fetchData = async () => {
      const result = await axios.get(`${backendUrl}/api/user/${userData?.userID}`, { headers: headers })
      setProfile(result?.data)
    }

  //*********************************  read email, userID and token to local storage   ****************** */ 
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData')) ?? {};
    setUserData(storedUserData);
  }, []);

  //*********************************  add email, userID and token to local storage   ****************** */ 
  useEffect(() => {
    if (userData !== undefined) localStorage.setItem('userData', JSON.stringify({
      No: userData?.No,
      email: userData?.email,
      level: userData?.level,
      token: userData?.token,
      unit: userData?.unit,
      userID: userData?.userID,
    }));

    if (userData?.userID !== undefined ) { 
      fetchData()
    }
 
  }, [userData]);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': userData?.token
  };

  const level_No = {
    level: userData?.level,
    No: userData?.No,
    unit: userData?.unit
  };

  const UserContextValue = {
    login, setLogin, Msg, setMsg, messageStatus, setMessageStatus, schemaLoginError,
    setSchemaLoginError, schemaRegisterError, setSchemaRegisterError, hidden, setHidden,
    userData, setUserData, headers, level_No, isLoading, setIsLoading, backendUrl,
    profile, setProfile, fetchData
  }

  return <UserContext.Provider value={UserContextValue}>{children} </UserContext.Provider>
}
export default UserContextProvider





