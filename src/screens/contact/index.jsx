import React from "react";
import call from "../../assets/call.png";
import at from "../../assets/at.png";
import location from "../../assets/location.png";
import send from "../../assets/send.png";
import "./index.css";
const Index = () => {
  return (
    <div className="contactP app-padding">
      <div className="contactPcol-1">
        <div className="headerContact">
          <h2>
            <span>Contact</span>
            <span>Us</span>
          </h2>
          <div></div>
          <p>Fill up the form and our team would get back to you.</p>
        </div>
        <div className="headerContact2">
          <div className="headerContact2Child1">
            <p>(+234) 09166697000</p>
            <p>09166698000</p>
            <p>0813 655 5806</p>
            <div className="imgepo">
              <img src={call} alt="" />
            </div>
          </div>
        </div>

        <div className="headerContact2 un2">
          <div className="headerContact2Child1">
            <p>admin@ee-rider.com</p>

            <div className="imgepo">
              <img src={at} alt="" />
            </div>
          </div>
        </div>

        <div className="headerContact2 un2">
          <div className="headerContact2Child1" style={{ width: "100%" }}>
            <p>
              9 Fadeji Aladura Street, Off Oritshe Street, Off Awolowo Way,
              Ikeja, Lagos
            </p>

            <div className="imgepo">
              <img src={location} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contactPcol-2">
        <form action="">
          <div className="inputWrap">
            <label htmlFor="">Full Name</label>
            <input type="text" />
          </div>
          <div className="inputWrap">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>

          <div className="inputWrap">
            <label htmlFor=""> Message</label>
            <textarea type="text" />
          </div>

          <button>
            <img src={send} alt="" /> <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
