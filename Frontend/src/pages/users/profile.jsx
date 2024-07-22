import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import '../../sass/profile.scss'

const Profile = () => {
    const { profile  } = useContext(UserContext);
 
    
console.log(profile)
    return (
        <>
            <div className="profile-container">
                {/* ************************ Left ********************* */}
                <div className="left-side">
                    <div className="profile-name">
                        <h3 style={{color:'white'}}>{profile.firstName }</h3>
                    </div>
                    <div className="user-info">
    <img src={profile.url} alt="" />
                    </div>
                    <div className="user-known">
    
                    </div>
                    <div className="user-interest">
    
                    </div>
                </div>
                {/* ************************ Right ********************* */}
                <div className="right-side">
                    
                    
                </div>
            </div>
        </>
    );
}
 
export default Profile;