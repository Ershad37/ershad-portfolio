import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImg from "../assets/images/ershad3.png";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={profileImg} alt="Ershad" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ershad37" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ahmad-mohammadi-a802a43a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ershad M.</h1>
          <p>Junior Python Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ershad37" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ahmad-mohammadi-a802a43a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;