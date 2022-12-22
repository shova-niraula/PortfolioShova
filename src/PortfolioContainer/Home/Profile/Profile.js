import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/shova-niraula/">
                <i className="fa fa-linkedin-square fa-2x"></i>
              </a>
              <a href="https://github.com/shova-niraula">
                <i className="fa fa-github-square fa-2x"></i>
              </a>
              <a href="https://shovaniraula.wordpress.com/">
                <i className="fa fa-wordpress fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm
              <span className="highlighted-text"> Shova Niraula</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Passionate Front-End-Developer",
                    1000,
                    "HTML",
                    1000,
                    "CSS",
                    1000,
                    "ES6",
                    1000,
                    "React",
                    1000,
                    "Figma",
                    1000,
                    "...and many more 😄",
                    1000
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                {" "}
                Mastering the art of converting codes to modern-edge-platforms.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="shovaResume.pdf" download="Shova shovaResume.pdf">
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
