import phoneHeader from "../../assets/phone-header-bg.png" ;
import "./header.css" ;
import { BsMouse } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Header = () => {
    useEffect(()=> {
        AOS.init({
            duration : 1000
        })
    })
    return ( 
        <section id="header">
            <div className="container header" >
                <div className="header-right" data-aos = "fade-right">
                    <h1>
                        <span> پیشرو در سطح جهانی </span>
                        <span> امنیت در همه پلتفرم ها</span>
                        <span> سیستم پیام رسانی</span>

                    </h1>
                    <p>پیشرو در سطح جهان پیشرو در سطح جهان پیشرو در سطح جهان پیشرو در سطح جهان پیشرو در سطح جهان </p>
                    <div className="header-btn">
                        <a className="btn btn-dark">
                            بیان شروع کنیم
                        </a>
                        <a className="btn btn-light">
                                چجوری کار میکنیم
                        </a>
                    </div>
                </div>
                <div className="header-left"data-aos = "fade-left" >
                    <img src={phoneHeader}   />

                </div>
                <div className="floating-icon" >
                <a  href="#features" >
                    <BsMouse color={"#fff"} size={25} className="mouse"  />
                </a>
            </div>
            </div>
           
        </section>
     );
}
 
export default Header;