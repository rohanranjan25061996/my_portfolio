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
                     Aspiring Full Stack Developer, To perform to the best of my abilities in your reputable organization 
                     for a role of a Software Developer,
                  efficiently executing various user-centric solutions and acquiring field experience in the long-run.
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
                           Ara, Bihar
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
