import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        {/* Treatments Offered Section */}
        <div className="service-section">
          <h2 className="section-heading">Treatments Offered</h2>
          <ul className="service-list">
            <li>Antenatal/Postnatal Care</li>
            <li>Fertility Health</li>
            <li>Ovarian / Cervical Health</li>
            <li>Pelvic Health</li>
          </ul>
        </div>

        {/* Special Areas of Interest Section */}
        <div className="service-section">
          <h2 className="section-heading">Special Areas of Interest</h2>
          <ul className="service-list">
            <li>Obstetrics (Antenatal/Postnatal Care)</li>
            <li>Hormonal Issues of Women</li>
            <li>Polycystic Ovarian Syndrome (PCOS)</li>
          </ul>
        </div>

        {/* Additional Services Section */}
        <div className="service-section">
          <h2 className="section-heading">Additional Services</h2>
          <ul className="service-list">
            <li>Normal Vaginal Delivery</li>
            <li>Medical Disorders of Pregnancy</li>
            <li>High-Risk Obstetrics</li>
            <li>Recurrent Miscarriages</li>
            <li>Menstrual Irregularities</li>
            <li>PCOS and Endocrine Disorders</li>
            <li>Fibroids</li>
            <li>Ovarian Cysts</li>
            <li>Female Genital Tract Malignancy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
