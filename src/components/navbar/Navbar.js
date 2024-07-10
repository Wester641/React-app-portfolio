import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import logoNavbar from "../../img/zsh2.png"
import logoNavbar2 from "../../img/1.png"
import "./../navbar/style.css";

const Navbar = () => {
  return (
    <nav className="nav bg-overlay-dark">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            {/* <strong>Freelancer</strong> portfolio */}
            <img className="logoimg" src={logoNavbar} alt="" /> 
          </NavLink>

          <BtnDarkMode />
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                // className={(isActive) => (isActive ? activeLink : normalLink)}

                className="nav-list__link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                // className={(isActive) => (isActive ? activeLink : normalLink)}
                className="nav-list__link"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                // className={(isActive) => (isActive ? activeLink : normalLink)}
                className="nav-list__link"
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/Userlist"
                // className={(isActive) => (isActive ? activeLink : normalLink)}
                className="nav-list__link"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
