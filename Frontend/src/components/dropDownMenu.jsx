import '../sass/dropDownMenu.scss'
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import DropDownMenuLogin from './dDMLogin';

const DropDownMenu = () => {
    const { hidden, userData} = useContext(UserContext)
    //************************************* show the First client's name in Navbar  ***************************** */
    var userStatus = false;
    var firstStrEmail = userData?.email?.charAt(0)

    let url = window.location.href
    url = url.slice(0, url.indexOf('/api/'))

    if (firstStrEmail !== undefined) {
        userStatus = true;
    } else { userStatus = false; }

    return (
        <>
            {!hidden && 
                <>
                    {userStatus && <DropDownMenuLogin data={firstStrEmail} /> }
                </>
            }
        </>
    );

}
 
export default DropDownMenu;


