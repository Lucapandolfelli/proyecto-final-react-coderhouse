import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";
import LeftMenu from "../LeftMenu/LeftMenu";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const handleToggleMenu = () => {
    let leftMenu = document.getElementsByClassName("left-menu");
    leftMenu.style.display = "block";
  };
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__left">
            <button className="navbar__toggle">
              <i className="fa-solid fa-bars"></i>
            </button>
            <ul className="navbar__menu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar__brand">
            <Link to="/">
              <img
                src="/assets/images/navbar-logo.png"
                alt="The Vintage Collection"
              />
            </Link>
          </div>
          <div className="navbar__right">
            <ul className="navbar__menu">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="navbar__right--buttons">
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <CartWidget />
            </div>
          </div>
        </div>
        <LeftMenu />
      </nav>
    </header>
  );
};

export default Navbar;
