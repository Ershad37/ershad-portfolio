import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">

          <h1>Contact</h1>

          <div className="contact-info">

            <a
              className="contact-item"
              href="mailto:ershad.moh37@gmail.com"
            >
              <span className="contact-label">Email</span>
              <span className="contact-value">ershad.moh37@gmail.com</span>
            </a>

            <a
              className="contact-item"
              href="https://github.com/Ershad37"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/Ershad37</span>
            </a>

            <a
              className="contact-item"
              href="https://www.linkedin.com/in/ahmad-mohammadi-a802a43a8/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/ahmad-mohammadi-a802a43a8</span>
            </a>

            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Germany / Europe</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;