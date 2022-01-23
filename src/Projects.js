import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Projects.css'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <div className="section">
      <h2 className="underline" id="Projects">Projects</h2>
      <div className="inner-section projects">
        <div className="project">
          <div className="lol">
            <p>Space Invaders</p>
            <div className="deployment">
              <a target="_blank" rel="noreferrer" href="https://github.com/AyaMallah/SEI-Project-1"><FontAwesomeIcon icon={faGithub} className="projects-icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://space-invaders-ga.netlify.app/"><FontAwesomeIcon icon={faLink} className="projects-icon" /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <p>News App</p>
            <div className="deployment">
              <a target="_blank" rel="noreferrer" href="https://github.com/AyaMallah/SEI-Project-2"><FontAwesomeIcon icon={faGithub} className="projects-icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://newsapp-ga.netlify.app/"><FontAwesomeIcon icon={faLink} className="porjects-icon" /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <p>Tails & Whiskers</p>
            <div className="deployment">
              <a target="_blank" rel="noreferrer" href="https://github.com/AyaMallah/SEI-Project-3"><FontAwesomeIcon icon={faGithub} className="projects-icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://tails-n-whiskers.herokuapp.com/"><FontAwesomeIcon icon={faLink} className="projects-icon" /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <p>Plant</p>
            <div className="deployment">
              <a target="_blank" rel="noreferrer" href="https://github.com/AyaMallah/SEI-Project-4"><FontAwesomeIcon icon={faGithub} className="projects-icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://plant-blog.herokuapp.com/"><FontAwesomeIcon icon={faLink} className="projects-icon" /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <p>Weather App</p>
            <div className="deployment">
              <a target="_blank" rel="noreferrer" href="https://github.com/AyaMallah/Weather-App"><FontAwesomeIcon icon={faGithub} className="projects-icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://react-weather-app-5.netlify.app/"><FontAwesomeIcon icon={faLink} className="projects-icon" /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <p>Dictionary App</p>
            <div className="deployment">
              <a target="_blank" rel="noreferrer" href="https://github.com/AyaMallah/Dictionary-App"><FontAwesomeIcon icon={faGithub} className="projects-icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://dictionary-app-uk.netlify.app/"><FontAwesomeIcon icon={faLink} className="projects-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects