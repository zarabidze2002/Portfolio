import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="portfolio-details">
          <div className="colz">
            <dic className="colz-icon">
              <a href="https://www.linkedin.com/in/zura-arabidze-539071227/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/zura.arabidze.2020">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/zura.arabidze/">
                <i className="fa fa-instagram"></i>
              </a>
            </dic>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Zura Arabidze</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Success comes from hard work 💣 ",
                    1000,
                    "React Developer 💣 ",
                    1000,
                    "Web Development 💣 ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                My goal is to become a good React developer and be a
                professional at my job!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="CV - ZURA ARABIDZE.pdf" download="CV - ZURA ARABIDZE.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
