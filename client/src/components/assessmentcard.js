import React from "react";

function AssessmentCard() {

    return (
        <div className="assessmentcard">
            <div className="leftassessmentcard">
                <p className="cardtopic"><strong>Prepare by topics</strong></p>
                <h2 className="assessmenttopic"><b>Java & SpringBoot</b></h2>
                <button className="assessmentbutton">Continue preparation</button>
            </div>
            <div className="rightassessmentcard d-flex justify-content-around flex-column">
                <h3 className="assessmentsubtopic"><b>The  summary of the assessment</b></h3>
                <p className="assessmentinfo">Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain.<br/>
                <br/>
                
                Debating offended at branched striking be subjects.Enjoyed minutes related as at on on. Is fanny dried as often me. Goodness as reserved raptures to mistaken steepest oh screened he. Gravity he mr sixteen esteems.entered in do to colonel.
                </p>
            </div>
        </div>
    )
}

export default AssessmentCard;