/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IMG_20220417_174004_013 from "./img/IMG_20220417_174004_013.jpg";
import Flip from 'react-reveal/Flip';
//import Slide from "react-reveal/Slide";
export const _mySection = () => {
  return (
  
    <div className="App-mySection">
      <Flip left>
        <div className="myPhoto">
          <img src={IMG_20220417_174004_013} />
        </div>
      </Flip>
      <div className="hello">
        <h1>Hello World !!!</h1>
        <h2>
          My name is <span className="spameando">Andriel</span>.
        </h2>
        <h3>I 'm Front-End Developer...</h3>
        <div className="linkGithub">
        <a
          href="https://github.com/is-noah?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      </div>

    </div>

  );
};
