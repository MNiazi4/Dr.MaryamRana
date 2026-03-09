import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const images = [
    "/assets/homepics/1.jpg",
    "/assets/homepics/2.jpg",
    "/assets/homepics/3.jpg",
    "/assets/homepics/4.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      {/* Carousel Section */}
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Doctor Profile Section */}
      <div className="doctor-profile">
        <img
          src="/assets/homepics/hero-1.png" // Replace with the actual path of the image
          alt="Dr. maryam"
          className="doctor-image"
        />
        <div className="doctor-info">
          <h2 className="doctor-name">Dr. Maryam Ranna</h2>
          <p className="doctor-description">
            Dr. Maryam Raana is a Consultant Gynecologist and Obstetrician with
            14 years of experience, working at Lady Willingdon Hospital and
            teaching at King Edward Medical College. She specializes in
            obstetrics, women’s hormonal issues, PCOS, normal vaginal delivery,
            VBAC, cesarean sections, hysteroscopy, hysterectomy, and other
            vaginal procedures. Dr. Maryam is available for consultations
            Monday, Tuesday, Wednesday, Friday, and Saturday from 7:00 PM to
            9:00 PM at Islamabad Diagnostic Center, Jail Road, Lahore.
          </p>
          <Link to="/about" className="doctor-button">
            About Doctor
          </Link>
        </div>
      </div>
      <div className="services">
        <h1 className="doctor-name">Services</h1>
        <p>
          Dr. Maryam Raana provides specialized care in normal deliveries,
          high-risk pregnancies, and pregnancy-related disorders. She also
          treats recurrent miscarriages, menstrual issues, PCOS, fibroids,
          ovarian cysts, and female genital tract cancers, offering a broad
          range of services for comprehensive women’s health.
        </p>
      </div>
      <div className="services-section">
  <div className="service-card">
    <div className="icon-circle">
      <img src="/assets/homepics/disease1.png" alt="Female Fertility Health" />
    </div>
    <p className="service-title">Female Fertility Health</p>
  </div>
  <div className="service-card">
    <div className="icon-circle">
      <img src="/assets/homepics/disease2.png" alt="Polycystic Ovarian Syndrome" />
    </div>
    <p className="service-title">Polycystic Ovarian Syndrome</p>
  </div>
  <div className="service-card">
    <div className="icon-circle">
      <img src="/assets/homepics/disease3.png" alt="Medical Disorder Pregnancy" />
    </div>
    <p className="service-title">Medical Disorder Pregnancy</p>
  </div>
  <div className="service-card">
    <div className="icon-circle">
      <img src="/assets/homepics/disease4.png" alt="Normal Vaginal Delivery" />
    </div>
    <p className="service-title">Normal Vaginal Delivery</p>
  </div>
  <div className="service-card">
    <div className="icon-circle">
      <img src="/assets/homepics/disease5.png" alt="Antenatal / Postnatal Care" />
    </div>
    <p className="service-title">Antenatal / Postnatal Care</p>
  </div>
  <div className="service-card">
    <div className="icon-circle">
      <img src="/assets/homepics/disease6.png" alt="Recurrent Miscarriages" />
    </div>
    <p className="service-title">Recurrent Miscarriages</p>
  </div>
</div>

      <div className="appointment-banner">
        <div className="appointment-text">
          <p>
            Do you have any health problem?
            <br />
            Call now for an appointment.
          </p>
        </div>
        <Link to="/contact" className="appointment-button">
          Contact Us Now
        </Link>
      </div>

      <div className="review-carousel">
        <h2>Google Reviews</h2>
        <div className="review-container">
          <div className="review-card">
            <div className="review-header">
              <div className="profile-image">U</div>
              <div className="review-info">
                <h3>Umair Saddiqui</h3>
                <p className="review-date">9/10/2022</p>
              </div>
              <img
                src="/assets/homepics/google-icon.png"
                alt="Google"
                className="google-icon"
              />
            </div>
            <div className="rating">★★★★★</div>
            <p className="review-text">
              This is a hospital for females only. all staff behavior is too
              good asa well as they are almost all patients are satisfied by the
              staff. the hospital also provide free of cost treatment services
              for those who are not able to pay the fee charges of treatment.
            </p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="profile-image">D</div>
              <div className="review-info">
                <h3>Dr. V</h3>
                <p className="review-date">10/07/2022</p>
              </div>
              <img
                src="/assets/homepics/google-icon.png"
                alt="Google"
                className="google-icon"
              />
            </div>
            <div className="rating">★★★★★</div>
            <p className="review-text">
              Best for critical obs/gynae care... But u ll need a lot of
              patience
            </p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="profile-image">U</div>
              <div className="review-info">
                <h3>Usama Khalid</h3>
                <p className="review-date">03/04/2022</p>
              </div>
              <img
                src="/assets/homepics/google-icon.png"
                alt="Google"
                className="google-icon"
              />
            </div>
            <div className="rating">★★★★★</div>
            <p className="review-text">Best hospital for Gyne and Obs</p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="profile-image">M</div>
              <div className="review-info">
                <h3>Mudassir Maqsood</h3>
                <p className="review-date">12/03/2023</p>
              </div>
              <img
                src="/assets/homepics/google-icon.png"
                alt="Google"
                className="google-icon"
              />
            </div>
            <div className="rating">★★★★★</div>
            <p className="review-text">
              Cradled by Lahore city’s most recognized landmarks, the Badshahi
              Masjid, Lahore Fort, and Minar e Pakistan lies the biggest
              maternity facility of the country, Lady Willingdon Hospital,
              affiliated with King Edward Medical University.
            </p>
          </div>
        </div>
        <p className="review-summary">
          Google rating score: 5 of 5, based on <strong>162 reviews</strong>
        </p>
      </div>

      <div className="hospital-container-wrapper">
        <h2 className="hospital-heading">Places of Work</h2>
        <div className="hospital-container">
          <div className="hospital-card">
            <img
              src="/assets/homepics/idc.png"
              alt="idc"
              className="hospital-logo"
            />
            <p className="hospital-name">IDC Shadman Jail Road Lahore</p>
            <p className="hospital-hours">
              Monday to Wednesday: 07:00 pm – 09:00 pm
            </p>
            <p className="hospital-hours">
              Friday to Saturday: 07:00 pm – 09:00 pm
            </p>{" "}
            <a href="tel:03211162036" className="hospital-contact">
              03211162036
            </a>
          </div>

          <div className="hospital-card">
            <img
              src="/assets/homepics/ke.png"
              alt="university-king-edward"
              className="hospital-logo"
            />
            <p className="hospital-name">
              {" "}
              King Edward Medical College, Lahore
            </p>

            <a href="tel:(042)99211145" className="hospital-contact">
              (042)99211145
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
