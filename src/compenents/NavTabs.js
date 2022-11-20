import React from "react";

// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange("Home")}
//           //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

//           className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="contact"
//           onClick={() => handlePageChange("Contact")}
//           //  TODO: Add a comment explaining what this logic is doing

//           className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange("Portfolio")}
//           //  TODO: Add a comment explaining what this logic is doing

//           className={
//             currentPage === "Portfolio" ? "nav-link active" : "nav-link"
//           }
//         >
//           Blog
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           //  TODO: Add a comment explaining what this logic is doing

//           onClick={() => handlePageChange("Contact")}
//           className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           //  TODO: Add a comment explaining what this logic is doing

//           onClick={() => handlePageChange("Resume")}
//           className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
//         >
//           Resume
//         </a>
//       </li>
//     </ul>
//   );
// }

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="home">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
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
  );
}

export default NavTabs;
