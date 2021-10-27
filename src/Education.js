import React from "react";
import "./Education.css"

function Education() {
  return (
    <div className="section">
      <h2 className="underline" id="Education">Education</h2>
      <div className="inner-section education-section">
        <div className="education">
          <img className="institute" alt="Royal Holloway University of London" src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1635193173/p1asfbt16t1bmm1556tnh7s295b5_ktcinw.jpg" />
          <p><b>BSc Economics - Class '19</b></p>
          <p><em>1st Class Honors</em></p>
        </div>
        <div className="education">
          <img className="institute" alt="General Assembly" src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1635193207/061816256fefb8e64caf287931244dd0_rdxped.png" />
          <p><b>Software Engineering Immersive</b></p>
          <p>May '21 - July '21</p>
        </div>
      </div>
    </div>
  )
}
export default Education