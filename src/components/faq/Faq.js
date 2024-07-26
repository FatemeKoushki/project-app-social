import { MdOutlineLibraryBooks } from "react-icons/md";
import {questions} from "./data.js" ;
import "./faq.css" ;
import Question from "./Question.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Faq = () => {
    useEffect(()=> {
        AOS.init({
            duration : 1000
        })
    })
    return ( 
        <section className="faq">
            <div className="container faq">
                <div className="faq-title" data-aos="fade-down">
                    <MdOutlineLibraryBooks color="orangered" size={30} />
                    <h2>سوالات متداول</h2>
                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است  </p>
                </div>
                <div className="questions">
                    {
                        questions && questions.map((question)=> (
                            <Question key={question.id} title = {question.title} answer = {question.answer}  />
                           
                        ))
                    }

                </div>
            </div>
        </section>
     );
}
 
export default Faq;