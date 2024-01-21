// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Images
import react_logo from "../img/logo_react.png";
import reacteur_logo from "../img/logo_reacteur.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <span>Made with</span>
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
        >
          <img src={react_logo} alt="Logo React" />
          <span>React</span>
        </a>
        <span>at</span>
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={reacteur_logo} alt="Logo Reacteur" />
          <span>Le Reacteur</span>
        </a>
        <span>by</span>
        <a href="https://github.com/bc-vsgd" target="_blank">
          <span>Benoît Charles</span>
          <FontAwesomeIcon icon="fa-brands fa-github" />
          <a
            href="https://www.linkedin.com/in/beno%C3%AEt-charles-b641672a6/"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
