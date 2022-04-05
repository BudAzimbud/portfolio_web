import { Link } from "react-router-dom";
import Logo from "../../Asset/Logo.svg";
import "./Navbar.css";
function Navbar() {
  const isVisited = (url) => {
    if (url === window.location.pathname) {
      return "nav-link text-primary";
    }
    return "nav-link";
  };

  return (
    <div className=" App">
      <nav className="main-header navbar navbar-expand navbar-light navbar-white">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="/"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mr-4">
          <li className="nav-item">
            <Link
              to="/"
              className={isVisited("/")}
              style={{ alignItems: "center" }}
            >
              <img src={Logo} alt="" width="35" className="logo" />
              ZIM
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
