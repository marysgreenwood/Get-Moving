import React from "react";
//import { Link } from "react-router-dom";
import "./contactusComponent.css";

import johnGrant from "../../../assets/dev-profilephotos/johng001.png";
import joshIcard from "../../../assets/dev-profilephotos/joshi001.png";
import juliaJohnson from "../../../assets/dev-profilephotos/juliaj001.png";
import maryGreenwood from "../../../assets/dev-profilephotos/maryg001.png";
import michaelSmitte from "../../../assets/dev-profilephotos/michaels001.png";
import shawnThomas from "../../../assets/dev-profilephotos/shawnt001.jpeg";

const DevProfiles = () => {
  const devprofileData = [
    {
      id: 1,
      Name: "John Grant",
      img: johnGrant,
      Portfolio: "https://github.com/jgrant928",
      GitHub: "https://github.com/jgrant928",
      LinkedIn: "https://www.linkedin.com",
    },
    {
      id: 2,
      Name: "Josh Icard",
      img: joshIcard,
      Portfolio: "https://www.github.com/jicard",
      GitHub: "https://www.github.com/jicard",
      LinkedIn: "https://www.linkedin.com/in/joshicard/",
    },
    {
      id: 3,
      Name: "Julia Johnson",
      img: juliaJohnson,
      Portfolio: "https://jjohnson673.github.io/Portfolio_2.0/",
      GitHub: "https://github.com/jjohnson673",
      LinkedIn: "https://www.linkedin.com/in/julia--johnson/",
    },
    {
      id: 4,
      Name: "Mary Greenwood",
      img: maryGreenwood,
      Portfolio: "https://github.com/marysgreenwood",
      GitHub: "https://github.com/marysgreenwood",
      LinkedIn: "https://www.linkedin.com/in/mary-greenwood-30b88450/",
    },
    {
      id: 5,
      Name: "Michael Smitte",
      img: michaelSmitte,
      Portfolio: "https://github.com/Hochipochi",
      GitHub: "https://github.com/Hochipochi",
      LinkedIn: "https://www.linkedin.com",
    },
    {
      id: 6,
      Name: "Shawn Thomas",
      img: shawnThomas,
      Portfolio: "https://shawncthomas.com",
      GitHub: "https://www.github.com/",
      LinkedIn: "https://www.linkedin.com/in/shawncthomas",
    },
  ];

  return (
    <div className="contactus-container">
      <h1 className="contactus-header">Meet the Team!</h1>
      <div className="devprofile-container">
        {devprofileData.map((devprofile) => {
          return (
            <>
              <div className="devprofile-card">
                <div
                  className="devprofile-pic"
                  style={{ backgroundImage: `url(${devprofile.img})` }}
                  key={`${devprofile.Name}-${devprofile.id}`}
                ></div>
                <div className="dev-name">
                  <p>{`${devprofile.Name}`}</p>
                </div>
                <div className="dev-links">
                  <a
                    href={devprofile.Portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-regular fa-window-restore fa-2xl link-icons"></i>
                    <p>Portfolio</p>
                  </a>
                  <a
                    href={devprofile.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github fa-2xl link-icons"></i>
                    <p>GitHub</p>
                  </a>
                  <a
                    href={devprofile.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in fa-2xl link-icons"></i>
                    <p>LinkedIn</p>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DevProfiles;
