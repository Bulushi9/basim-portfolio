import React from 'react';

function Header() {
  return (
    <header id="header">
      <div className="container d-flex align-items-center justify-content-between">
        <nav id="navbar" className="nav-menu">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;