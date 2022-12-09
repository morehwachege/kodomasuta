import React from "react";

function AssessmentCard({singleAssessment}) {

    return (
        <div className="assessmentcard">
            <div className="leftassessmentcard">
                <p className="cardtopic"><strong>Prepare by topics</strong></p>
                <h2 className="assessmenttopic"><b>{singleAssessment.category.name}</b></h2>
                <button className="assessmentbutton">Continue preparation</button>
            </div>
            <div className="rightassessmentcard d-flex justify-content-around flex-column">
                <h3 className="assessmentsubtopic"><b>{singleAssessment.title}</b></h3>
                <p className="assessmentinfo">
                    {singleAssessment.description}
                </p>
            </div>
        </div>
    )
}

export default AssessmentCard;