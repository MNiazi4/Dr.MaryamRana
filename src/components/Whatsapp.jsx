// WhatsAppWidget.jsx
import React from "react";
import "./Whatsapp.css"; // Import the CSS

const WhatsAppWidget = () => {
  return (
    <div className="whatsapp-widget">
      <a
href="https://api.whatsapp.com/send?phone=+923211162036&text=Hello%20there!"
target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
