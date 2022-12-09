import React, {useState} from "react";

function QuestionsForm({questions, setQuestions, feedback}) {

    const [formData, setFormData] = useState({
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        correct_answer: "",

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
            });
            const allQuestions = [...questions,newQuestion]
            setQuestions(allQuestions);
          });
      }
    
      return (
        <div className="questionform">
          <form onSubmit={handleSubmit}>
            <h3>New Question</h3>
            <input
              type="text"
              name="question"
              onChange={handleChange}
              value={formData.question}
              placeholder="create a new question..."
              className="input-text"
            />
            <br />
            <input
              type="text"
              name="choice1"
              onChange={handleChange}
              value={formData.choice1}
              placeholder="Choice 1..."
              className="input-text"
            />
            <br />
            <input
              type="text"
              name="choice2"
              onChange={handleChange}
              value={formData.choice2}
              placeholder="Choice 2 ..."
              className="input-text"
            />
            <br /><input
              type="text"
              name="choice3"
              onChange={handleChange}
              value={formData.choice3}
              placeholder="Choice 3 ..."
              className="input-text"
            />
            <br /><input
              type="text"
              name="correct_answer"
              onChange={handleChange}
              value={formData.correct_answer}
              placeholder="Choice 4 ..."
              className="input-text"
            />
            <br />
            <input
              type="submit"
              name="submit"
              value="Create Question"
              className="submit"
            />
          </form>

          {/* <p>{feedback}</p> */}
        </div>
      );

}

export default  QuestionsForm;