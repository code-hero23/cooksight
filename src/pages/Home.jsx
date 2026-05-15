import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimationControls, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import { Link } from 'react-router-dom';

const IMAGES = [
  "BEDROOM (2).png", "BEDROOM (3).png", "BEDROOM.jpg", "BEDROOM.png", 
  "DINING.png", "FOYER.png", "KIDS ROOM.jpg", "KITCHEN (2).png", 
  "KITCHEN.png", "LIVING.png", "TV UNIT.png"
];

const EXPERIENCE_CENTERS = [
  {
    city: "Chennai",
    name: "Experience Studio (H.O)",
    address: "#517/338, Anna Salai, Nandanam, Chennai - 600035",
    phone: "96000 05679"
  },
  {
    city: "Chennai",
    name: "OMR Studio",
    address: "#3/33, Thoraipakkam, Rajiv Gandhi Salai, OMR, Chennai - 600119"
  },
  {
    city: "Chennai",
    name: "Porur Studio",
    address: "#64, 1st floor, Poonamalle Road, Porur, Chennai - 600116"
  },
  {
    city: "Coimbatore",
    name: "Coimbatore Studio",
    address: "1095, 1st Floor, Mettupalayam Road, Vadakovai, RS Puram West, Coimbatore - 641002"
  },
  {
    city: "Bangalore",
    name: "Bangalore Studio",
    address: "1565, 1st sector HSR layout, Service road, outer ring road, Bangalore - 560102"
  },
  {
    city: "Vijayawada",
    name: "Vijayawada Studio",
    address: "59-8-3, Potluri Venkteswara Rao St, Gayathri Nagar, Vijayawada - 520008"
  }
];

const VideoModal = ({ isOpen, videoId, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="video-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="video-modal-container"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={onClose}>
              <span>Close</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = ({ scrollY }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedVideo]);
  return (
    <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          {/* Static Background Layer */}
          <div className="hero-layers">
            <div className="midground-text">
              {"COOKSCAPE".split("").map((char, index) => (
                <span 
                  key={index} 
                  style={{ 
                    display: "inline-block", 
                    transform: `translateY(${scrollY * (0.1 + index * 0.04)}px)`,
                    transition: "transform 0.1s ease-out" 
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Foreground Content */}
          <div className="hero-foreground container">
            <div className="hero-left">
              <h1 className="hero-title">Design & Living<br /><span>That Feel Alive</span></h1>
              <p className="hero-description">We design interiors that feel like home.</p>
              <div className="hero-actions">
                <a href="#" className="btn-blue-pill">Our Projects <span className="arrow-circle">→</span></a>
                <a href="#" className="btn-outline-pill">Contact us</a>
              </div>
            </div>

            <div className="hero-center">
              <div 
                className="main-image-wrapper"
                style={{ 
                  transform: `translateY(${scrollY * 0.15}px) rotateX(${scrollY * 0.02}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img src="/hero-image.png" alt="Architectural Visualization" />
              </div>
            </div>

            <div className="hero-cards-row">
              {/* Active Users Pill */}
              <div className="active-users-pill reveal">
                <div className="user-avatars">
                  <img src="https://i.pravatar.cc/150?u=1" alt="U1" />
                  <img src="https://i.pravatar.cc/150?u=2" alt="U2" />
                  <img src="https://i.pravatar.cc/150?u=3" alt="U3" />
                </div>
                <span>Happy Clients <strong>+500</strong></span>
              </div>

              <div className="card glass-card">
                <div className="card-body">
                  <span className="card-tag gold-tag">PROMOTION</span>
                  <h2 className="card-heading promo-big">75% <span className="small-off">Off</span></h2>
                  <p className="card-paragraph">On Design Charges for a limited time.</p>
                </div>
                <span className="card-link-icon">↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section-premium">
          <div className="container">
            <div className="about-grid-premium">
              <motion.div 
                className="about-content-v3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="about-tag-v3">WELCOME TO COOKSCAPE</span>
                <h2 className="about-title-v3">One Stop Solution Provider</h2>
                <p className="about-desc-v3">
                  We are the <strong>Largest Home Interiors Store in Chennai with 25 years of Expertise</strong>. 
                  With our interior design services, you will be able to create a unique and creative space 
                  for your home or office. No other company offers a guarantee.
                </p>
                <p className="about-cta-text-v3">Let us help you design a luxurious home.</p>
                
                <div className="about-contact-box-v3">
                  <div className="contact-icon-v3">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.41a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contact-info-v3">
                    <span>Call Now :</span>
                    <a href="tel:+919600005679">+91 96000 05679</a>
                  </div>
                </div>

                <div className="about-btns-v3">
                  <a href="#services" className="btn-primary-v3">Get Services</a>
                  <a href="#contact" className="btn-secondary-v3">Book Consultation</a>
                </div>
              </motion.div>

              <motion.div 
                className="about-visual-v3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="blob-container-v3">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="about-blob-svg-v3">
                    <defs>
                      <clipPath id="blob-clip-v3">
                        <path d="M39.7,-58C50.6,-46.8,57.8,-34,63.9,-19.7C70,-5.4,74.9,10.3,73.6,26.8C72.2,43.4,64.5,60.8,51.2,67.9C37.9,75.1,18.9,72,2.1,69.1C-14.8,66.2,-29.6,63.7,-42.2,56.3C-54.8,48.9,-65.2,36.7,-72.7,21.7C-80.1,6.7,-84.6,-11.1,-79.9,-26.1C-75.2,-41,-61.3,-53.1,-46.4,-63C-31.6,-72.9,-15.8,-80.6,-0.7,-79.7C14.5,-78.7,28.9,-69.2,39.7,-58Z" transform="translate(100 100)" />
                      </clipPath>
                    </defs>
                    <foreignObject x="0" y="0" width="200" height="200" clipPath="url(#blob-clip-v3)">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      >
                        <source src="/about-video.mp4" type="video/mp4" />
                      </video>
                    </foreignObject>
                  </svg>
                  {/* Decorative background blob */}
                  <div className="blob-bg-decoration"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container" style={{ marginBottom: '40px' }}>
            <motion.div 
              className="section-header-v2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="section-title">Our <span>Services</span></h2>
              <p className="section-subtitle">Exquisite design solutions tailored for your lifestyle.</p>
            </motion.div>
          </div>
          <MarqueeServices />
        </section>


        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <div className="bg-decoration-blob" style={{ top: '-10%', right: '-10%' }}></div>
          <div className="bg-decoration-blob" style={{ bottom: '10%', left: '-5%', width: '400px', height: '400px' }}></div>
          
          <div className="container">
            <motion.div 
              className="section-header-v2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Happy <span>Stories</span></h2>
              <p className="section-subtitle">Real experiences from our cherished homeowners.</p>
            </motion.div>
            
            <div className="testimonials-grid-v2">
              {[
                { 
                  id: "UWUCBuvZi9Y", 
                  name: "Sivakumar & Family",
                  desc: "Budget-friendly luxury with 100% genuine pricing. Chennai's most trusted interior partner."
                },
                { 
                  id: "YOfrf-BYONg", 
                  name: "Jayashree R.",
                  desc: "A beautifully curated blend of luxury and comfort in our Coimbatore 3BHK apartment."
                },
                { 
                  id: "Bm8nzwmbhMo", 
                  name: "Manikandan S.",
                  desc: "Extremely satisfied with the outcome and the exceptional service provided by the team."
                },
                { 
                  id: "2T8XyaWbfBE", 
                  name: "Revathi & Saravanan",
                  desc: "Cookscape transformed our home with comfort and personality at an unbelievable price point."
                },
                { 
                  id: "2jc6XdSgfR0", 
                  name: "Shanmugam P.",
                  desc: "Simple and trending 2BHK interior design with a focus on genuine budget-friendly solutions."
                },
                { 
                  id: "xETSet4juOQ", 
                  name: "Bhuvaneswari K.",
                  desc: "Elevated our small home interiors to a whole new level. We absolutely love our new space!"
                }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  className="testimonial-card-v2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -15, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedVideo(testimonial.id)}
                >
                  <div className="video-thumb-container">
                    <img 
                      src={`https://img.youtube.com/vi/${testimonial.id}/maxresdefault.jpg`} 
                      alt="Testimonial Thumbnail"
                      onError={(e) => e.target.src = `https://img.youtube.com/vi/${testimonial.id}/0.jpg`}
                    />
                    <div className="play-btn-overlay">
                      <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="testimonial-info-v2">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-excerpt">"{testimonial.desc}"</p>
                    <div className="stars-v2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <div className="verified-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Verified Homeowner
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <VideoModal 
          isOpen={!!selectedVideo} 
          videoId={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />

        {/* Contact Section */}
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

        {/* Experience Studios Section */}
        <section id="studios" className="studios-section">
          <div className="container">
            <motion.div 
              className="section-header-v2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="about-tag-v3">VISIT OUR CENTERS</span>
              <h2 className="section-title">Our Experience <span>Studios</span></h2>
              <p className="section-subtitle">Cookscape Home Interiors, an exclusive Indian brand, meets all the functional challenges of Designs with its finest finish.</p>
            </motion.div>

            <div className="studios-grid">
              {EXPERIENCE_CENTERS.map((studio, idx) => (
                <motion.div 
                  key={idx}
                  className="studio-card-premium"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="studio-city-tag">{studio.city}</div>
                  <h3 className="studio-name">{studio.name}</h3>
                  <div className="studio-divider"></div>
                  <p className="studio-address">{studio.address}</p>
                  {studio.phone && (
                    <div className="studio-phone-link">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.79 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 013.33 2h3a2 2 0 012 1.72 12.81 12.81 0 00.59 2.81 2 2 0 01-.45 2.11L7.09 10.12a16 16 0 006.79 6.79l1.48-1.48a2 2 0 012.11-.45 12.81 12.81 0 002.81.59A2 2 0 0122 16.92z" />
                      </svg>
                      <a href={`tel:+91${studio.phone.replace(/\s/g, '')}`}>{studio.phone}</a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="studios-footer-cta">
              <p>If you have any question or need help, feel free to contact with our team.</p>
              <a href="tel:+919600005679" className="btn-primary-v3">Call +91 96000 05679</a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="premium-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <img src="/logo.jpeg" alt="Cookscape Logo" className="footer-logo" />
                <p>Transforming spaces into luxury experiences for over 25 years. Chennai’s most trusted interior design partner.</p>
                <div className="social-links-v2">
                  <a href="#" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="footer-links-col">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#about">About</a></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Modular Kitchen</a></li>
                  <li><a href="#services">Full Home Interiors</a></li>
                  <li><a href="#services">Home Renovation</a></li>
                  <li><a href="#services">Wardrobes</a></li>
                </ul>
              </div>

              <div className="footer-contact-col">
                <h4>Visit Us</h4>
                <p>Chennai, Tamil Nadu, India</p>
                <a href="tel:+919600005679" className="footer-phone">+91 96000 05679</a>
                <p className="footer-email">contact@cookscape.in</p>
                <a href="https://wa.me/919600005679" target="_blank" rel="noopener noreferrer" className="footer-phone whatsapp-footer-link">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Cookscape Interiors. All Rights Reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
  );
};

function MarqueeGallery() {
    const [isPaused, setIsPaused] = useState(false);
    const baseVelocity = -1.2; 
    const baseX = useMotionValue(0);
    const totalWidth = IMAGES.length * 420;
  
    useAnimationFrame((t, delta) => {
      if (!isPaused) {
        let moveBy = baseVelocity * (delta / 16);
        let nextX = baseX.get() + moveBy;
        if (nextX <= -totalWidth) nextX = 0;
        baseX.set(nextX);
      }
    });
  
    return (
      <div 
        className="marquee-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="marquee-mask left"></div>
        <div className="marquee-mask right"></div>
        <motion.div className="marquee-track" style={{ x: baseX }}>
          {[...IMAGES, ...IMAGES].map((img, index) => (
            <GalleryItem 
              key={index} 
              src={`/RENDER IMAGES/${img}`} 
              title={img.replace(/\.[^/.]+$/, "")}
              trackX={baseX}
            />
          ))}
        </motion.div>
      </div>
    );
  }
  
  function GalleryItem({ src, title, trackX }) {
    const ref = useRef(null);
    const centerScale = useTransform(trackX, (latest) => {
      if (!ref.current) return 0.82;
      const rect = ref.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const distanceFromCenter = Math.abs(centerX - (rect.left + rect.width / 2));
      const maxDistance = window.innerWidth / 2;
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
      const curve = Math.cos(normalizedDistance * (Math.PI / 2));
      const intensity = Math.pow(curve, 1.5);
      return 0.82 + (1.08 - 0.82) * intensity;
    });
  
    const smoothScale = useSpring(centerScale, { stiffness: 300, damping: 40 });
  
    return (
      <motion.div 
        ref={ref}
        className="marquee-item"
        style={{ scale: smoothScale }}
        whileHover={{ scale: 1.15, zIndex: 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="glass-card-inner">
          <img src={src} alt={title} loading="lazy" />
          <div className="gallery-overlay">
            <h3>{title}</h3>
          </div>
        </div>
      </motion.div>
    );
  }

const SERVICES = [
  { title: "Full Home Interiors", img: "/services/full-home-interiors.png" },
  { title: "Home Renovation", img: "/services/renovation.png" },
  { title: "Modular Kitchen", img: "/services/kitchen.png" },
  { title: "Wardrobe", img: "/services/wardrobe.png" },
  { title: "Crockery Unit", img: "/services/crockery-unit.png" },
  { title: "Laundry Unit", img: "/services/laundry-unit.png" },
  { title: "Living Room", img: "/RENDER IMAGES/LIVING.png" },
  { title: "Bedroom", img: "/services/bedroom.png" },
  { title: "TV Unit", img: "/RENDER IMAGES/TV UNIT.png" },
  { title: "Pooja Unit", img: "/services/pooja-unit.png" },
  { title: "Kids Furniture", img: "/services/kids-furniture.png" }
];

function MarqueeServices() {
  const [isPaused, setIsPaused] = useState(false);
  const baseVelocity = -1.0; 
  const baseX = useMotionValue(0);
  const cardWidth = 320; // Width of service card + gap
  const totalWidth = SERVICES.length * cardWidth;

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      let moveBy = baseVelocity * (delta / 16);
      let nextX = baseX.get() + moveBy;
      if (nextX <= -totalWidth) nextX = 0;
      baseX.set(nextX);
    }
  });

  return (
    <div 
      className="marquee-wrapper services-marquee"
      onClick={() => setIsPaused(!isPaused)}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      <div className="marquee-mask left"></div>
      <div className="marquee-mask right"></div>
      
      {/* Animated Scroll Indicator for Mobile/Small Screens */}
      <div className="scroll-indicator-v2">
        <motion.div 
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-arrow"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.div>
        <span className="scroll-text">Explore Our Portfolio</span>
        <motion.div 
          animate={{ x: [10, -10, 10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-arrow"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.div>
      </div>

      <motion.div className="marquee-track" style={{ x: baseX }}>
        {[...SERVICES, ...SERVICES, ...SERVICES].map((service, index) => (
          <ServiceMarqueeItem 
            key={index} 
            service={service}
            trackX={baseX}
          />
        ))}
      </motion.div>
    </div>
  );
}

function ServiceMarqueeItem({ service, trackX }) {
  const ref = useRef(null);
  const centerScale = useTransform(trackX, (latest) => {
    if (!ref.current) return 0.85;
    const rect = ref.current.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const distanceFromCenter = Math.abs(centerX - (rect.left + rect.width / 2));
    const maxDistance = window.innerWidth / 2;
    const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
    const curve = Math.cos(normalizedDistance * (Math.PI / 2));
    const intensity = Math.pow(curve, 2);
    return 0.85 + (1.1 - 0.85) * intensity;
  });

  const smoothScale = useSpring(centerScale, { stiffness: 300, damping: 40 });

  return (
    <motion.a 
      ref={ref}
      href="#contact"
      className="service-card-premium marquee-item-service"
      style={{ scale: smoothScale }}
      whileHover={{ scale: 1.15, zIndex: 100 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="service-card-image-wrap">
        <img src={service.img} alt={service.title} onError={(e) => e.target.src = '/hero-image.png'} />
        <div className="service-card-overlay-premium"></div>
      </div>
      <div className="service-card-content-premium">
        <h3 className="service-title-premium">{service.title}</h3>
        <div className="service-divider-premium"></div>
        <span className="service-explore-premium">Discover Designs</span>
      </div>
    </motion.a>
  );
}

export default Home;
