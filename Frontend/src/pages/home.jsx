import '../sass/home.scss'
import homeimage from "/sysImage/home-image.jpg"

const Home = () => {
    return (
        <>
            <div className='home-image'>
                <img className="main-image" src={homeimage} alt="image" />
            </div>
        </>
    );
}
 
export default Home;