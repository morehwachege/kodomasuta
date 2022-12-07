import React from "react";

function AssessmentCard({data}) {

    return (
        <div className="asscard">
            <div className="left">
                <p className="lefttopic"><strong>Prepare by topics</strong></p>
                <h2 className="tcard"><b>Java & SpringBoot</b></h2>
                <button className="bcard">Continue preparation</button>
            </div>
            <div className="right">
                <h3 className="rcard"><b>The  summary of the assessment</b></h3>
                <p className="pcard">Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain.<br/>
                <br/>
                
                Debating offended at branched striking be subjects.Enjoyed minutes related as at on on. Is fanny dried as often me. Goodness as reserved raptures to mistaken steepest oh screened he. Gravity he mr sixteen esteems.entered in do to colonel.
                </p>
            </div>
        </div>
    )
 
}

export default AssessmentCard;