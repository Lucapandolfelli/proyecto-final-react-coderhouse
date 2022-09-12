import "./Navbar.scss";
import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import LeftMenu from "../LeftMenu/LeftMenu";
import { NavLink, Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";

const Navbar = () => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  const handleToggleMenu = () => {
    if (showLeftMenu === true) {
      setShowLeftMenu(false);
    } else {
      setShowLeftMenu(true);
    }
  };

  return (
    <>
      <TopBar />
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="navbar__left">
              <button
                className="navbar__toggle"
                onClick={() => handleToggleMenu()}
              >
                {/* <i className="fa-solid fa-bars"></i> */}
              </button>
              <ul className="navbar__menu">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/productos"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    Productos
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
                    to="/nosotros"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
              <div className="navbar__right--buttons">
                {/* <button>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button> */}
                <Link to="/cart">
                  <CartWidget />
                </Link>
              </div>
            </div>
          </div>
          {showLeftMenu === true ? (
            <LeftMenu setShowLeftMenu={setShowLeftMenu} />
          ) : undefined}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
