import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const renderFooter = () => {
    return (
      <div className="d-flex justify-content-center">
        <footer>
          <span className="m-3">LinkedIn</span>
          <span className="m-3">GitHub</span>
          <span className="m-3">StackOverFlow</span>
        </footer>
      </div>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {renderFooter()}
    </div>
  );
}
