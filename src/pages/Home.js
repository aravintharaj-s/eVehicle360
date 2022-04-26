import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import './Home.css'
const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <div className="gg ">Main content</div>
            <Contact/>
        </div>
     );
}
 
export default Home;