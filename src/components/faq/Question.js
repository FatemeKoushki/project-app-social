import { AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";


const Question = ({answer , title}) => {
    const [showanswer  ,setShowanswer] = useState(false) ;

    const handleQuestion = ()=>{
        setShowanswer(!showanswer)
    }

    return ( 
        <div className="question container ">
        <div className="question-title">
            <h2>{title}</h2>
            <button onClick={handleQuestion } >
               {
                showanswer ? <AiOutlineMinus color="#1f93ff" /> :  <AiOutlinePlus color="#1f93ff"  />
               }
            </button>
        </div>
        <div className="question-answer">
            {
                showanswer &&   <p>{answer}</p>
            }
        </div>
    </div>
     );
}
 
export default Question;