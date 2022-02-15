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
              location.pathname == "/about-us" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/about-us">About us</Link>
          </li>

          <li
            className={`${
              location.pathname == "/contact" ? "activeNvaLink" : ""
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
              className={`${location.pathname == "/" ? "activeNvaLink" : ""}`}
            >
              <Link
                onClick={() => {
                  setShowNav(false);
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                location.pathname == "/about-us" ? "activeNvaLink" : ""
              }`}
            >
              <Link
                onClick={() => {
                  setShowNav(false);
                }}
                to="/about-us"
              >
                About us
              </Link>
            </li>
            <li
              className={`${
                location.pathname == "/contact" ? "activeNvaLink" : ""
              }`}
            >
              <Link
                onClick={() => {
                  setShowNav(false);
                }}
                to="/contact"
              >
                Contact
              </Link>
            </li>{" "}
            <li>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.951"
                  height="23.241"
                  viewBox="0 0 20.951 23.241"
                >
                  <path
                    id="Icon_awesome-google-play"
                    data-name="Icon awesome-google-play"
                    d="M15.4,10.638,5.379.59,18.128,7.909,15.4,10.638ZM2.764,0a1.765,1.765,0,0,0-.985,1.6V21.638a1.765,1.765,0,0,0,.985,1.6l11.65-11.623Zm19.3,10.243L19.395,8.694l-2.983,2.928,2.983,2.928L22.123,13a1.821,1.821,0,0,0-.054-2.76ZM5.379,22.655l12.749-7.319L15.4,12.608Z"
                    transform="translate(-1.779)"
                    fill="#fcfcfc"
                  />
                </svg>
                <span> Get on Play Store</span>
              </button>
              <button>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.951"
                  height="23.241"
                  viewBox="0 0 20.951 23.241"
                >
                  <path
                    id="Icon_awesome-google-play"
                    data-name="Icon awesome-google-play"
                    d="M15.4,10.638,5.379.59,18.128,7.909,15.4,10.638ZM2.764,0a1.765,1.765,0,0,0-.985,1.6V21.638a1.765,1.765,0,0,0,.985,1.6l11.65-11.623Zm19.3,10.243L19.395,8.694l-2.983,2.928,2.983,2.928L22.123,13a1.821,1.821,0,0,0-.054-2.76ZM5.379,22.655l12.749-7.319L15.4,12.608Z"
                    transform="translate(-1.779)"
                    fill="#fcfcfc"
                  />
                </svg>{" "}
                <span>Get on App Store</span>
              </button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
