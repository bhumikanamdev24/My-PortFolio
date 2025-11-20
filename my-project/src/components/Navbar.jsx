import React, { useEffect, useRef } from "react";

export default function Navbar({ onToggleTheme, theme }) {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.classList.add("navbar-scrolled");
      } else {
        nav.classList.remove("navbar-scrolled");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // collapse mobile menu after click
  function handleNavLinkClick() {
    const nav = document.querySelector(".navbar-collapse");
    if (nav && nav.classList.contains("show")) {
      const bs = window.bootstrap;
      if (bs) {
        const collapse = bs.Collapse.getInstance(nav) || new bs.Collapse(nav, { toggle: false });
        collapse.hide();
      }
    }
  }

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home" onClick={handleNavLinkClick}>
          <div style={{
            width:36, height:36, borderRadius:8,
            background: "linear-gradient(90deg,#7aa7ff,#0dcaf0)",
            color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700
          }}>
            B
          </div>
          <span className="fw-bold">Bhumika</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
          aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#home" onClick={handleNavLinkClick}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about" onClick={handleNavLinkClick}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills" onClick={handleNavLinkClick}>Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={handleNavLinkClick}>Contact</a></li>

            <li className="nav-item d-flex align-items-center ms-3">
              <button className="btn btn-sm btn-theme" onClick={onToggleTheme}>
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
