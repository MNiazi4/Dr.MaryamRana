import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>
            <a href="https://maps.app.goo.gl/KaD9mEe93mW3qTV8A" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-location-dot"></i> IDC lab & Diagnostic Center Jail Road
              Plot 9B Jail Rd, Shadman 2, Lahore
            </a>
          </p>
          <p>
            <a href="https://maps.app.goo.gl/fBF4JVawXpUw8A6h7" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-location-dot"></i> H897+X5V Chowk, Nila Gumbad Rd,<br /> Neela Gumbad Lahore
            </a>
          </p>  
          <p>
            <a href="tel:03450048535">
              <i className="fas fa-phone"></i> 03450048535, 0321-1162036
            </a>
          </p>
          <p>
            <a href="mailto:rannamaryam7@gmail.com">
              <i className="fas fa-envelope"></i> rannamaryam7@gmail.com
            </a>
          </p>
          <br />
        </div>
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.517356266497!2d74.33522047463616!3d31.53741344630164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905185633bd9f%3A0x388068866f455cc5!2sDr.%20Maryam%20Raana%20-%20Gynecologist!5e0!3m2!1sen!2s!4v1730614721221!5m2!1sen!2s"
            width="700"
            height="300"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IDC lab & Diagnostic Center"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
