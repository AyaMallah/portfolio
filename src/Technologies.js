import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJs, faNodeJs, faNpm, faPython, faReact, faSass, faYarn } from '@fortawesome/free-brands-svg-icons'
import './Technologies.css'

function Technologies() {
  return (
    <>
      <div className="section">
        <h2 className="underline" id="Technologies">Technologies</h2>
        <div className="inner-section technologies tech-bar">
          <FontAwesomeIcon icon={faHtml5} className="icon" alt="Html" />
          <FontAwesomeIcon icon={faCss3} className="icon" alt="Css" />
          <FontAwesomeIcon icon={faSass} className="icon" alt="Sass" />
          <FontAwesomeIcon icon={faJs} className="icon" alt="JavaScript" />
          <FontAwesomeIcon icon={faBootstrap} className="icon" alt="Bootstrap" />
          <FontAwesomeIcon icon={faReact} className="icon" alt="React" />
          <FontAwesomeIcon icon={faNodeJs} className="icon" alt="Node.js" />
          <FontAwesomeIcon icon={faPython} className="icon" alt="Python" />
          <FontAwesomeIcon icon={faNpm} className="icon" alt="Npm" />
          <FontAwesomeIcon icon={faYarn} className="icon" alt="Yarn" />
          <FontAwesomeIcon icon={faGitAlt} className="icon" alt="Git" />
        </div>
      </div>
    </>
  )
}
export default Technologies