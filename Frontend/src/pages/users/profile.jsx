import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Profile = () => {
    const { userData } = useContext(UserContext)
    return (
        <>
            <div className="profile">
                <div className="pro-left">

                </div>
                <div className="pro-right">
                    <div className="username">

                    </div>
                    <div className="personal">
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
}
 
export default Profile;