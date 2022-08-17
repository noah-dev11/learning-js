import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
  faFacebook,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
export const _footerComponents = () => {
  return (
    <div className="App-footer">
      <footer>
        <h3>All Rights Reserved</h3>
        <p>&copy;is-noah 2022.</p>
        <div className="icon">
          <a
            href="https://www.facebook.com/profile.php?id=100012982999559"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/is_noah__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://wa.me/message/N7KDKEHTT6ZXB1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://github.com/is-noah?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/andriel-noa-lores-263153244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="developer">
          <p>Powerd By</p>
          <FontAwesomeIcon icon={faReact} />
        </div>
      </footer>
    </div>
  );
};
//   https://www.facebook.com/profile.php?id=100012982999559
//   https://wa.me/message/N7KDKEHTT6ZXB1
