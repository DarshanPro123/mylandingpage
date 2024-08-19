import React, { useState, useEffect } from "react";

function Navigation() {
  const [isFixed, setIsFixed] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav className={`mynav  ${isFixed ? "fixed-nav" : ""}`}>
        <span className="btnspan" onClick={() => setMenu(!menu)}>
          {menu ? <span>&times;</span> : <span>&#9776;</span>}
        </span>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className={menu ? "aftermenu" : ""}>
          <li>
            <a className={menu ? "after" : ""} href="#">
              MENU
            </a>
          </li>
          <li>
            <a className={menu ? "after" : ""} href="#">
              LOCATION
            </a>
          </li>
          <li>
            <a className={menu ? "after" : ""} href="#">
              ABOUT
            </a>
          </li>
          <li>
            <a className={menu ? "after" : ""} href="#">
              CONTACT
            </a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
