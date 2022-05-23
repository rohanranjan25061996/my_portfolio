import React from "react";
import "./About.css";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const About = () => {
   return (
      <div id="about">
         <section className="about-section section ">
            <div className="container">
               <div className="row">
                  <div className="section-title">
                     <h1 data-heading="main info">About me</h1>
                  </div>
               </div>

               <div className="about-info">
                  <p>
                     <h6>Hi! I'm Rohan Ranjan</h6>
                     Energetic and highly motivated, Blockchain enthusiast. A passionate Solidity Blockchain Developer with a problem-solving mindset. Has experience in creating full-stack Dapps with help of various tool sets such as HardHat,
                     Truffle, and Ganache and also experience in MERN stack development.
                  </p>
                  <div className="about-desc">
                     <div className="about-desc-icon">
                        <CallIcon />
                        <sapn className="about-desc-span">
                           +91 7488635956
                        </sapn>
                     </div>
                     <div className="about-desc-icon">
                        <EmailIcon />
                        <sapn className="about-desc-span">
                           ranjanrohan96@gmail.com
                        </sapn>
                     </div>
                     <div className="about-desc-icon">
                        <LocationOnIcon />
                        <sapn className="about-desc-span">
                           Arrah, Bihar, India
                        </sapn>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export { About };
