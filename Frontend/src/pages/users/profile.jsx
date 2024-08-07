import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import '../../sass/profile.scss'
import InsigImage from "../../public/insigImage";

const Profile = () => {
    const { profile } = useContext(UserContext);

     //console.log(profile)
    return (
        <>
            <br /><br />
            <div className="profile-container">
                {/* ************************ Left ********************* */}
                <div className="left-side">
                    <div className="profile-name">
                        <img src={profile.url} alt="Profile Image" />
                        <span style={{ color: 'white' }}>{profile.firstName} {profile.lastName}</span>
                    </div>
                    <div className="user-info">
                        <div className="user-personal">
                            <span>{profile.email}</span>
                            <span>{profile.phoneNumber}</span>
                            <span>{profile.current_location}</span>
                            <span>{profile.linkedin}</span>
                            <span>{profile.discription}</span>
                        </div>
                        <div className="user-known">
    
                        </div>
                        <div className="user-interest">
    
                        </div>
                    </div>
                </div>
                {/* ************************ Right ********************* */}
                <div className="right-side">
                    
                    
                </div>
            </div>
            <br />
            <InsigImage />
        </>
    );
}
 
export default Profile;