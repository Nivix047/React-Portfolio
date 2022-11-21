import React from "react";

function NavTabs({ handlePageChange }) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="#home"
                onClick={() => handlePageChange("Home")}
              >
                About me <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={() => handlePageChange("Contact")}
              >
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#resume"
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
