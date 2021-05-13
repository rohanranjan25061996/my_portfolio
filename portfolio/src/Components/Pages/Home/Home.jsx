import React from "react";
import "./Home.css";
import { TypingTitle } from "./TypingTitle";
import Nav from "react-bootstrap/Nav";
import Resume from "../../assets/images/Profile/Rohan_Ranjan_Resume.pdf"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Home() {
   return (
      <div id="home">
         <section className="home-section section ">
            <div className="container">
               <div className="row full-screen ">
               <div className="home-img ">
                     <div className="img-box shadow">
                        {/* <img src="https://i.ibb.co/NsKFqMR/original-pic-1.jpg" alt="profile-pic" /> */}
                        <img src="https://i.ibb.co/pzWJ4xK/original-pic-1-removebg-preview.png" alt="profile-pic" />
                     </div>
                  </div>
                  <div className="home-text " style={{ color: "#F6F6F6" }}>
                     <h3>Hi,</h3>
                     <h2>I'm Rohan Ranjan</h2>
                     <h1 className="title">
                        <TypingTitle />
                     </h1>
                     .
                    <div className = "about-me-div">
                    <div className="about-me-btn">
                           <a href = {Resume} download = "Rohan-Ranjan-Resume.pdf"> Download Resume</a>
                        </div>
                        <div className="about-me-btn">
                           <a href = "https://www.linkedin.com/in/rohanranjan96/"> <LinkedInIcon /> Linkedin </a>
                        </div>
                        <div className="about-me-btn">
                           <a href = "https://github.com/rohanranjan25061996"> <GitHubIcon /> Github </a>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export { Home };
