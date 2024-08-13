import '../sass/dropDownMenu.scss'
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import DropDownMenuLogin from './dDMLogin';

const DropDownMenu = () => {
    const { userData } = useContext(UserContext)
    //************************************* show the First client's name in Navbar  ***************************** */
    var userStatus = false;
    var firstStrEmail = userData?.email?.charAt(0).toUpperCase()

    let url = window.location.href
    url = url.slice(0, url.indexOf('/'))

    if (firstStrEmail !== undefined) {
        userStatus = true;
    } else { userStatus = false; }

    return (
        <>
            {userStatus && <DropDownMenuLogin data={firstStrEmail} />}
        </>
    );

}
 
export default DropDownMenu;


