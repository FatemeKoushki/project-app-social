import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import "./download.css" ;
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {

    useEffect(()=> {
        AOS.init({
            duration : 1000
        })
    })
    return ( 
       <section id="download">
        <div className="container download"  data-aos="fade-down">
            <div className="download-title">
                <h2>دانلود اپلیکیشن ما </h2>
                <p>برنامه ها ما برای دانلود در همه فروشگاه ها موجود است</p>
            </div>
            <div className="download-apps">
                <div className="download-app">
                    <FaApple />
                    <p>آیفون</p>
                </div>
                <div className="download-app">
                    <FaWindows />
                    <p> ویندوز </p>
                </div>
                <div className="download-app">
                    <GrAndroid />
                    <p> اندروید </p>
                </div>
            </div>
        </div>
       </section>
     );
}
 
export default Download;