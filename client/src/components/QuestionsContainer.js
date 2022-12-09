import React from "react";
import MultipleChoiceCard from "./MultipleChoiceCard";

function QuestionsContainer({questions}) {

    const questionscard = questions.map(question => (<MultipleChoiceCard key={question.id} question={question.question} choice1={question.choice1} choice2={question.choice2} choice3={question.choice3} correct_answer={question.correct_answer}/>))

    return(
        <div>
            {questionscard}
        </div>
    )


}

export default QuestionsContainer