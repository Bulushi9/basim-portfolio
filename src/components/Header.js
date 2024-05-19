import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');

    const onScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) { // Use window.scrollY instead of scrollY
          current = section.getAttribute('id');
        }
      });

      navLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').substring(1) === current) {
          li.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header id="header">
      <div className="container d-flex align-items-center justify-content-center">
        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li className="nav-item"><a href="#home"><i className="fas fa-home"></i> Home</a></li>
            <li className="nav-item"><a href="#about"><i className="fas fa-user"></i> About</a></li>
            <li className="nav-item"><a href="#resume"><i className="fas fa-file-alt"></i> Resume</a></li>
            <li className="nav-item"><a href="#projects"><i className="fas fa-th-large"></i> Projects</a></li>
            <li className="nav-item"><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
