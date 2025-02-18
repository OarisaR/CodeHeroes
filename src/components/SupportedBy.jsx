import React from 'react';
import './SupportedBy.css';
import logo1 from "./logo (1).png";
import swords from "./swords.png";
import knight from "./knight.png";
import logoDesign from "./logo-design.png";
import encrypted from "./encrypted.png"
export const SupportedBy = () => {
  return (
    <div className="supported-by-section">
      <div className="bottom-gradient"></div>
      <p className="supported-text">SUPPORTED BY</p>
      <div className="sponsors-container">
        <img 
          src={logo1} 
          alt="Sponsor logo"
          className="sponsor-logo"
        />
        <img 
          src={swords} 
          alt="Swords logo"
          className="sponsor-logo"
        />
        <img 
          src={knight} 
          alt="Knight logo"
          className="sponsor-logo"
        />
        <img 
          src={logoDesign} 
          alt="Logo design"
          className="sponsor-logo"
        />
        <img 
          src={encrypted} 
          alt="encrpyt design"
          className="sponsor-logo"
        />
      </div>
    </div>
  );
};