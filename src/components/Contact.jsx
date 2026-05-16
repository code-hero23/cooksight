import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <div className="contact-box">
        <h2 className="section-title">Start Your Journey</h2>
        <p>Ready to transform your space? Get a free consultation today.</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <textarea placeholder="Tell us about your project"></textarea>
          <button type="submit" className="btn-blue-pill">Send Message <span className="arrow-circle">→</span></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
