import React from "react";
import "./index.css";
import hero from "../../assets/hero.png";

export default function Index() {
  const [expanded, setExpanded] = React.useState("");

  return (
    <>
      <div style={{ paddingTop: "30px" }} className="home-page app-padding">
        <div className="homepage-header-col1">
          <div className="col-wel">
            <p>Welcome</p>
            <div></div>
          </div>

          <div className="col-appn">
            <h2>
              <h2>E & E </h2> <h2>Rider</h2>
            </h2>
            <p>E & E Riders is a logistics company from Nigeria.</p>
          </div>

          <div className="ourAps">
            <h2>Our App</h2>
          </div>

          <div className="ourappdes">
            <p>We have built a user friendly platform.</p>
            <p>
              Users would have the ability to manage, and track their
              deliveries.
            </p>
            <p>Ability to schedule the pick up time to suite the user.</p>
          </div>

          <div className="herobtns">
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
          </div>
        </div>

        <div className="homepage-header-col2">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
}
