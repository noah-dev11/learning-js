import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Slide from "react-reveal/Slide";

export const _mySkillsComponents = () => {
  return (
    <Slide bottom>
      <div className="App-Skills">
        <h2>Skills:</h2>
        <div className="iAm">
          <p>
            Hello My name is Andriel Noa Lores and I am a web developer, we
            build web applications with quality and unique styles.
          </p>
        </div>

        <div className="skillsByNoah">

          <FontAwesomeIcon icon={faReact} />

          <FontAwesomeIcon icon={faNodeJs} />

          <FontAwesomeIcon icon={faJs} />

          <FontAwesomeIcon icon={faHtml5} />

          <FontAwesomeIcon icon={faCss3} />
        </div>
      </div>
    </Slide>
  );
};
