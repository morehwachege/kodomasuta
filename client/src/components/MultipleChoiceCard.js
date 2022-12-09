import React from "react";

function MultipleChoiceCard() {

    return (
            <ol className="questions">
              <li>stuff stuff more stuff
                <ul className="choices">
                  <li>
                     <label>
                        <input 
                        type={"radio"}
                        id="choice1"
                        className="answer"/>
                        <span>this</span>
                     </label>
                    </li>
            
                    <li>
                     <label>
                        <input
                        type={"radio"}
                        id = "choice2"
                        className="answer"/>
                        <span>maybe this</span>
                     </label>
                    </li>

                    <li>
                     <label>
                        <input
                        type={"radio"}
                        id="choice3"
                        className="answer"/>
                        <span>no this</span>
                     </label>
                    </li>

                    <li>
                     <label>
                        <input
                        type={"radio"}
                        id="choice4"
                        className="answer"/>
                        <span>actually this</span>
                     </label>
                    </li>
                </ul>
                </li>
            </ol>            
    )

}

export default MultipleChoiceCard;