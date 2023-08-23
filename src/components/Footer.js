import React from "react";
import "../CSS/Footer.css";
import footerBgPattern from "../assets/images/logos/felix-footer-pattern.webp";

const Footer = () => {
  return (
    <div className="footer-container absolute flex justify-center h-96">
      <div className="footer-pattern-image w-full flex justify-center items-end">
        <img
          src={footerBgPattern}
          className="h-48"
          alt="felix footer pattern"
        />
      </div>
    </div>
  );
};

export default Footer;
