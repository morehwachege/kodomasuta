import React, {useState, useEffect} from "react";


function AssessmentId() {
    const [assessment, setAssessment] = useState([]);

  useEffect(() => {
    fetch("/assessments")
      .then(res => res.json())
      .then(data => {
        setAssessment(data)
      })
  }, [])

  const asstitle = assessment.map(item => <option key= {item.id}>{item.id}.{item.title}</option>)
  return (
    <div className="assessmenttitles">
        <label className="assesslabel">See available assessments here;</label>
        <select>
            {asstitle}
        </select>
    </div>
  )
}

export default AssessmentId