import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p className="contact-subtitle">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">&lt;/&gt;</div>
              <h3>Technical Support</h3>
              <p>Need help with coding challenges?</p>
              <span className="info-detail">support@codeheroes.com</span>
            </div>
            
            <div className="info-card">
              <div className="info-icon">{ }</div>
              <h3>General Inquiries</h3>
              <p>Questions about our platform?</p>
              <span className="info-detail">info@codeheroes.com</span>
            </div>

            <div className="info-card">
              <div className="info-icon">[ ]</div>
              <h3>Join Our Team</h3>
              <p>Interested in working with us?</p>
              <span className="info-detail">careers@codeheroes.com</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <span className="btn-icon">&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
