import React from "react";

function MultipleChoiceCard({question, choice1, choice2, choice3, correct_answer}) {

    return (
            <ol className="questions">
              Question <li> {question}
                <ul className="choices">
                  <li>
                     <label>
                        <input 
                        type={"radio"}
                        id="choice1"
                        className="answer"/>
                        <span>{choice1}</span>
                     </label>
                    </li>
            
                    <li>
                     <label>
                        <input
                        type={"radio"}
                        id = "choice2"
                        className="answer"/>
                        <span>{choice2}</span>
                     </label>
                    </li>

                    <li>
                     <label>
                        <input
                        type={"radio"}
                        id="choice3"
                        className="answer"/>
                        <span>{choice3}</span>
                     </label>
                    </li>

                    <li>
                     <label>
                        <input
                        type={"radio"}
                        id="choice4"
                        className="answer"/>
                        <span>{correct_answer}</span>
                     </label>
                    </li>
                </ul>
                </li>
            </ol>            
    )

}

export default MultipleChoiceCard;