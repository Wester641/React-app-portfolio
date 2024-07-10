import "./style.css";
import gitHub from "../../img/icons/gitHub.svg";
import instagram from "../../img/icons/instagram.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import twitter from "../../img/icons/twitter.svg";
import Vk from "../../img/icons/vk.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.linkedin.com/in/zafarzhon/">
                {" "}
                <img src={linkedin} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item">
              <a href="#!">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                {" "}
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                {" "}
                <img src={Vk} alt="Link" />
              </a>
            </li> */}
            <li className="social__item">
              <a href="https://github.com/Wester641">
                {" "}
                <img src={gitHub} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p className="copyright__title">© 2022 dev all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
