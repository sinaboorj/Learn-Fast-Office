import logo from '/sysImage/Logo 2.png'
import { useContext } from "react";
import { PublicContext } from "../context/publicContext";

const TopTextLogo = () => {
    const { lang } = useContext(PublicContext)
    return (
        <div className="moveing-text">
            <span className="home-text1">{lang ? 'I N S I G' : 'گروه ملي صنعتي فولاد ايران'} </span>
            <img src={logo} width={28} height={28} alt="Logo" />
        </div>
    );
}
 
export default TopTextLogo;