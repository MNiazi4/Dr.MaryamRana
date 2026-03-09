import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <img
        src="/assets/homepics/1.jpg"
        alt="About Dr. Maryam Raana"
        className="about-image"
      />
      <div className="about-text">
        <h1 className="about-title">Dr. Maryam Raana</h1>
        <p className="about-description">
          Dr. Maryam Raana (MBBS, FCPS, MRCOG) is a distinguished Assistant Professor in Obstetrics and Gynecology at King Edward Medical College. She offers consultation at Islamabad Diagnostic Centre (IDC) in Lahore, providing exceptional care with a focus on women's reproductive health.
        </p>

        <ul className="about-list">
          <li>Assistant Professor in Obstetrics and Gynecology at King Edward Medical College.</li>
          <li>Consultation available at Islamabad Diagnostic Centre (IDC), Shadman-II, Jail Road, Lahore.</li>
          <li>Consultation hours: 7 to 9 pm (Thursday and Sunday off).</li>
        </ul>

        <h2 className="section-heading">Treatments Offered</h2>
        <ul className="about-list">
          <li>Antenatal and Postnatal Care</li>
          <li>Fertility Health</li>
          <li>Ovarian and Cervical Health</li>
          <li>Pelvic Health</li>
        </ul>

        <h2 className="section-heading">Special Areas of Interest</h2>
        <ul className="about-list">
          <li>Obstetrics (Antenatal and Postnatal Care)</li>
          <li>Hormonal Issues in Women</li>
          <li>Polycystic Ovarian Syndrome (PCOS)</li>
        </ul>

        
      </div>
    </div>
  );
};

export default About;
