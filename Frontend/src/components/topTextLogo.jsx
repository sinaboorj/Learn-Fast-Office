import logo from '/sysImage/Logo 2.png'
import { useContext } from "react";
import { PublicContext } from "../context/publicContext";

const TopTextLogo = () => {
    const { lang } = useContext(PublicContext)
    return (
        <div className="moveing-text">
            <img src={logo} width={50} height={50} alt="Logo" />
            <span className="home-text1">{lang ? 'Iran National Steel Industrial Group' : 'گروه ملي صنعتي فولاد ايران'} </span>
            <span className="home-text2">{lang ? 'Central Planning' : 'برنامه ریزی مرکزی'} </span>
        </div>
    );
}
 
export default TopTextLogo;