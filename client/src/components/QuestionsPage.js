import React, { useEffect, useState } from "react";
import QuestionsContainer from "./QuestionsContainer";
import QuestionsForm from "./QuestionsForm";

function QuestionPage() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("/questions")
          .then((r) => r.json())
          .then(questions => setQuestions(questions));
      }, []);

      return (
        <div>
        <QuestionsForm questions={questions} setQuestions={setQuestions}/>
        <QuestionsContainer questions={questions}/>
        </div>
      )

}

export default QuestionPage