import React from 'react';
import './Footer.css';
import sword from './sword.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={sword} alt="CodeHeroes Logo" className="footer-logo" />
          <p style={{ color: '#E2E8F0', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Empowering developers to become coding heroes through interactive challenges and learning.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Challenges</a>
            <a href="#" className="footer-link">Leaderboard</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Documentation</a>
            <a href="#" className="footer-link">API Reference</a>
            <a href="#" className="footer-link">Community</a>
            <a href="#" className="footer-link">Support</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Discord</a>
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">GitHub</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 CodeHeroes. All rights reserved.</p>
      </div>
    </footer>
  );
};