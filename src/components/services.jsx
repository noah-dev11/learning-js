import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderTree,
  faGaugeHigh,
  faUserGear,
  faMobileAndroid,
} from "@fortawesome/free-solid-svg-icons";
import { faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
//import Rotate from 'react-reveal/Rotate';
import Flip from "react-reveal/Flip";
export const _services = () => {
  return (
    <div className="App-services">
      <h2>Services:</h2>
      <div className="xxx">
        <Flip bottom>
          <p>
            1.
            <FontAwesomeIcon icon={faReact} />
            Use of the React Library.
          </p>
        </Flip>
        <Flip bottom>
          <p>
            2.
            <FontAwesomeIcon icon={faFolderTree} />
            Creation of the structure of the contents of the site with HTML
            language.
          </p>
        </Flip>
        <Flip bottom>
          <p>
            3.
            <FontAwesomeIcon icon={faJsSquare} />
            Add the interactive features of the website through the programming
            . Create scripts and commands for each element on the site.
          </p>
        </Flip>
        <Flip bottom>
          <p>
            4.
            <FontAwesomeIcon icon={faUserGear} />
            Maintenance of the website in terms of the user interface.
          </p>
        </Flip>
        <Flip bottom>
          <p>
            5.
            <FontAwesomeIcon icon={faGaugeHigh} />
            Implementation of improvements and optimizations for the positioning
            of the website technical SEO and on page.
          </p>
          <p>
            6.
            <FontAwesomeIcon icon={faMobileAndroid} />
            Web-App Full-Responsive.
          </p>
        </Flip>
      </div>
    </div>
  );
};
