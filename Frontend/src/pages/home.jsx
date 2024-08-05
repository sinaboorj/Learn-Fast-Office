import homeimage from "/sysImage/home-image.jpg"
import '../sass/home.scss'
import { useContext } from "react";
import { PublicContext } from "../context/publicContext";
import logo from '/sysImage/Logo 2.png'

const Home = () => {
    const { lang } = useContext(PublicContext)
    return (
        <>
            <br /><br />
            <div className="moveing-text">
            <img  src={logo} width={50} height={50} alt="Logo" />
                {lang
                    ? <h6 className="home-text">Iran National Steel Industrial Group</h6>
                    : <h6 className="home-text">گروه ملي صنعتي فولاد ايران</h6>
                }
            
            </div>

            <div className='home-image'>
                <img className="main-image" src={homeimage} alt="image" />
            </div>
        </>
    );
}
 
export default Home;