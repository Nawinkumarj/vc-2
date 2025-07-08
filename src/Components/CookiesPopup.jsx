import React, { useState } from "react";
import { NavLink } from "react-router";
import { assets } from "../assets/assets";

const CookiesPopup = () => {
  const [cookiesClose, setCookiesClose] = useState(false);
  const [hideCloseBtn, setHideCloseBtn] = useState(false);

  return (
    <div className="cookie-section">
      <div className={`inverted-radius ${cookiesClose ? "hide" : ""}`}>
        <div className="cookie-img">
          <img src={assets.cookie} alt="" />
        </div>
        <div className="cookie-content">
          <p>
            By continuing to use this site you consent to the use of cookies in
            accordance with our cookie policy. <NavLink to="/">Accept</NavLink>
          </p>
        </div>
      </div>
      {!hideCloseBtn && (
        <div
          className="close-cookie"
          onClick={() => {
            setCookiesClose(true);
            setHideCloseBtn(true);
          }}
        >
          cancel
        </div>
      )}
    </div>
  );
};

export default CookiesPopup;
