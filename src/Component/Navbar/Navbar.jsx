import { Link } from "react-router-dom";

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
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className={isVisited("/")}>
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Resume" className={isVisited("/Resume")}>
              Resume
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Project" className={isVisited("/Project")}>
              Project
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/About" className={isVisited("/About")}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className={isVisited("/Contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
