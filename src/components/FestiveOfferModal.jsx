import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FestiveOfferModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Open modal after 5 seconds initially, then every 30 seconds if not submitted
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      const hasSubmitted = localStorage.getItem('hasSubmittedFestiveModal');
      if (!hasSubmitted) {
        setIsOpen((prev) => (!prev ? true : prev));
      }
    }, 5000);

    const intervalTimer = setInterval(() => {
      const hasSubmitted = localStorage.getItem('hasSubmittedFestiveModal');
      if (!hasSubmitted) {
        setIsOpen((prev) => (!prev ? true : prev));
      }
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  // Listen for custom trigger event to open the modal programmatically
  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-festive-modal', handleOpenModal);
    return () => window.removeEventListener('open-festive-modal', handleOpenModal);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMessage('Please fill in all details.');
      return;
    }
    
    // Simulate submission to the backend endpoint
    setIsSubmitted(true);
    setErrorMessage('');
    localStorage.setItem('hasSubmittedFestiveModal', 'true');
    
    // Form submission action - POST request mimicking the index.html action
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://www.cookscape.com/static/mail.php';
    
    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    nameInput.value = formData.name;
    form.appendChild(nameInput);

    const phoneInput = document.createElement('input');
    phoneInput.name = 'phone';
    phoneInput.value = formData.phone;
    form.appendChild(phoneInput);

    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.value = formData.email;
    form.appendChild(emailInput);

    document.body.appendChild(form);
    
    // In a real app we might fetch in background, here we submit to backend via form post 
    // or just let it show the success screen inside the react app.
    // Let's do a background fetch to not disrupt the SPA experience:
    const params = new URLSearchParams();
    params.append('name', formData.name);
    params.append('phone', formData.phone);
    params.append('email', formData.email);
    params.append('submit', 'Send Message');

    fetch('https://www.cookscape.com/static/mail.php', {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'no-cors'
    }).catch(err => console.log('Form submission finished.'));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="festive-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="festive-modal-card"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="festive-modal-close" onClick={handleClose} aria-label="Close modal">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Decorative Gold Festive Arc */}
            <div className="festive-decor-top"></div>

            {!isSubmitted ? (
              <div className="festive-modal-body">
                <div className="festive-badge">FESTIVE PROMO</div>
                <h2 className="festive-title">COOKSCAPE FESTIVE OFFER</h2>
                <h3 className="festive-discount">Flat 20% OFF</h3>
                <p className="festive-tagline">on interiors</p>
                
                <div className="festive-divider"></div>
                <p className="festive-subtitle">Fill details to unlock your offer</p>

                {errorMessage && <p className="festive-error-msg">{errorMessage}</p>}

                <form onSubmit={handleSubmit} className="festive-form">
                  <div className="festive-input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="festive-input-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Mobile No"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="festive-input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <p className="festive-policy-text">
                    By continuing, I agree to Cookscape’s{' '}
                    <Link to="/terms" onClick={handleClose}>
                      Terms of Use
                    </Link>{' '}
                    &{' '}
                    <Link to="/privacy" onClick={handleClose}>
                      Privacy Policy
                    </Link>
                  </p>

                  <button type="submit" className="festive-submit-btn">
                    CONTINUE
                  </button>
                </form>
              </div>
            ) : (
              <div className="festive-modal-body festive-success-body">
                <div className="success-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="festive-title">Congratulations!</h2>
                <p className="festive-success-msg">
                  Your Flat 20% OFF offer has been unlocked.
                </p>
                <p className="festive-success-sub">
                  One of our luxury design experts will contact you shortly to plan your dream space.
                </p>
                <button className="festive-submit-btn" onClick={handleClose} style={{ marginTop: '2rem' }}>
                  EXPLORE DESIGNS
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FestiveOfferModal;
