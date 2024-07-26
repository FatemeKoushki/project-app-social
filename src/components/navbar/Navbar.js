import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import "./navbar.css" ;
import { useState } from "react";
const Navbar = () => {
    const[showIcons , setShowIcons] = useState(false) ;

    const toggleBtn = () => {
        setShowIcons(!showIcons)
    }

    return ( 
        <nav className="navbar container">
            <div className="menu" >
                <ul className="nav-links"  id= {showIcons ? "show-links-mobile" : "show-links-mobile-hide"} >
                    <li> <a href="" className="btn btn-dark" > آموزش بیشتر </a></li>
                    <li> <a href="#header" > خانه</a></li>
                    <li> <a href="#features" > امکانات</a></li>
                    <li> <a href="#subscribe" > مشترک شوید</a></li>
                </ul>
            </div>
            <div className="logo">
                <SiAnaconda  color="#fff" size={30} />
                <p className="logo-text">
                    Legen
                    <span>d</span>
                </p>
            </div>
            <div className="menu-icons" onClick={toggleBtn}>
                {
                    showIcons ?  
                    <RiCloseLine  size={35} color={"#fff"} /> :
                    <AiOutlineBars size={35} color={"#fff"} /> 
                }
               
            </div>
        </nav>
     );
}
 
export default Navbar;