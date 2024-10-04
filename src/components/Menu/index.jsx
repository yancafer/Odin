import { NavLink } from "react-router-dom";
import LogoSejusp from "../../assets/SEJUSP.svg";
import LogoDirjusp from "../../assets/DIRJUSP.svg";
import "./style.css";

function Menu() {
  return (
    <header className="container">
      <img src={LogoSejusp} alt="Logotipo SEJUSP" className="logo-sejusp" />

      <nav>
        <ul className="nav-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-font active" : "nav-font"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/estatisticas"
              className={({ isActive }) =>
                isActive ? "nav-font active" : "nav-font"
              }
            >
              Estatisticas
            </NavLink>
          </li>
        </ul>
      </nav>

      <img src={LogoDirjusp} alt="logo" className="logo-dirjusp" />
    </header>
  );
}

export default Menu;
