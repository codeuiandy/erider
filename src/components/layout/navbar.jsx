import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  let location = useLocation();
  const [showNav, setShowNav] = React.useState(false);
  return (
    <div className="navbar-ch-con" style={{}}>
      <div className="navbarChild">
        <div className="navbar-logo" style={{ cursor: "pointer" }}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <p className="HideOnDesktop">
          <i
            style={{ fontSize: "25px", color: "#013d79" }}
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="fas fa-bars HideOnDesktop"
          ></i>
        </p>

        <ul className="right-links hideOnMobile">
          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/">Home </Link>
          </li>

          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/about-us">About us</Link>
          </li>

          <li
            className={`${
              location.pathname == "/hmenu" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
      </div>

      {showNav ? (
        <div className="mobileLinks">
          <ul>
            <li
              className={`${
                location.pathname == "/hmenu" ? "activeNvaLink" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}
            >
              <Link to="/">About us</Link>
            </li>
            <li
              className={`${location.pathname == "/h" ? "activeNvaLink" : ""}`}
            >
              <Link to="/">Contact</Link>
            </li>{" "}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
