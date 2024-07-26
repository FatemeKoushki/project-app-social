import { FaEnvelope, FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png" ;
import "./footer.css" ;

const Footer = () => {
    return ( 
       <section id="footer">
        <div className="container footer">
            <div className="quick-access">
                <h4>لینک های مفید</h4>
               <div className="footer-links">
               <a href="#" >&bull; پشتیبانی  </a>
                <a href="#" >&bull; درباره ما</a>
                <a href="#" >&bull; آموزش </a>
                <a href="#" >&bull; هاستینگ </a>
                <a href="#" >&bull; پیام رسان </a>
               </div>
            </div>
            <div className="support">
                <h4> پشتیبانی</h4>
                <div className="footer-links">
               <a href="#" >&bull; پشتیبانی  </a>
                <a href="#" >&bull; درباره ما</a>
                <a href="#" >&bull; آموزش </a>
                <a href="#" >&bull; هاستینگ </a>
                <a href="#" >&bull; پیام رسان </a>
               </div>

            </div>
            <div className="contact">
                <h4 > راه های ارتباطی</h4>
                <div className="footer-concat">
                    <p><FaMapMarkerAlt/>&nbsp; آدرس : تهران - سهروردی شمالی </p>
                    <p><FaPhoneAlt/>&nbsp; تلفن : 09811111111111</p>
                    <p><FaFax/>&nbsp; فکس : 09811111111111</p>
                    <p><FaEnvelope/>&nbsp; ایمیل : fatemekoushki&gmail.com </p>
                    <p><FaEnvelope/>&nbsp; وبسایت : fatemekoushki&gmail.com </p>

                </div>

            </div>
            <div className="footer-logo">
                <img  src={logo}  />
                <p>&copy; copy right 2024 . legend.com </p>
            </div>
        </div>
       </section>
     );
}
 
export default Footer;