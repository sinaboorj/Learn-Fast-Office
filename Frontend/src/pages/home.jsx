import { useEffect } from 'react';
import '../sass/home.scss'
import homeimage from "/sysImage/home-image.jpg"

const Home = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }, [])
    
    return (
        <>
            <div className='home-image'>
                <img className="main-image" src={homeimage} alt="image" />
            </div>
        </>
    );
}
 
export default Home;