import React, {useState} from "react";
import AssessmentId from "./assesstitle";

function QuestionsForm({questions, setQuestions}) {

    const [formData, setFormData] = useState({
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        correct_answer: "",
        assessment_id: ""

      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        const newQuestion = {...formData};
    
        fetch("/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newQuestion),
        })
          .then((r) => r.json())
          .then((newQuestion) => {
             setFormData({
                question: "",
                choice1: "",
                choice2: "",
                choice3: "",
                correct_answer: "",
                assessment_id: ""
            });
            const allQuestions = [...questions,newQuestion]
            setQuestions(allQuestions);
          });
      }
    
      return (
        <div className="questionform">
          <form onSubmit={handleSubmit}>
            <h3 className="formtitle"><strong> Set New Question</strong></h3>
            <input
              type="input-text"
              name="question"
              onChange={handleChange}
              value={formData.question}
              placeholder="create a new question..."
              className="formbox"
            />
            <input
              type="input-text"
              name="choice1"
              onChange={handleChange}
              value={formData.choice1}
              placeholder="Choice 1..."
              className="formbox"
            />
            <input
              type="input-text"
              name="choice2"
              onChange={handleChange}
              value={formData.choice2}
              placeholder="Choice 2 ..."
              className="formbox"
            />
            <input
              type="input-text"
              name="choice3"
              onChange={handleChange}
              value={formData.choice3}
              placeholder="Choice 3 ..."
              className="formbox"
            />
            <input
              type="input-text"
              name="correct_answer"
              onChange={handleChange}
              value={formData.correct_answer}
              placeholder="Choice 4 ..."
              className="formbox"
            />
            <input
              type="input-text"
              name="assessment_id"
              onChange={handleChange}
              value={formData.assessment_id}
              placeholder="Put assessment title number here ...."
              className="formbox"
            />
                        <AssessmentId/>
            <input
              type="submit"
              name="submit"
              value="Create Question"
              className="formbutton"
            />
          </form>

        </div>
      );

}

export default  QuestionsForm;