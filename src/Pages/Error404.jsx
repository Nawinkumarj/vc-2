import React from 'react';
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="page-not-found">
        <div className="error-page-cont ">
          <h1 className="error-code">404</h1>
          <div className="ghost">
            <img
              src={assets.GoastImg}
              alt="Ghost Icon"
              className="ghost-icon"
            />
          </div>
          <h2>Whoops!</h2>
          <p>
            The page cannot be found. <br /> The requested URL was not found on
            this server.
          </p>
          <Link>
                    <button
            className="return-home" to='/'
          >
            Return Home
          </button>
          </Link>
          

        </div>
      </div>
    </>
  );
}

export default Error404