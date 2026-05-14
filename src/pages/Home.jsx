import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';

const IMAGES = [
  "BEDROOM (2).png", "BEDROOM (3).png", "BEDROOM.jpg", "BEDROOM.png", 
  "DINING.png", "FOYER.png", "KIDS ROOM.jpg", "KITCHEN (2).png", 
  "KITCHEN.png", "LIVING.png", "TV UNIT.png"
];

const Home = ({ scrollY }) => {
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
                <span className="about-tag-v3">WELCOME TO CookScape</span>
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
          <div className="container">
            <div className="section-header-v2">
              <h2 className="section-title">Happy <span>Stories</span></h2>
              <p className="section-subtitle">Real experiences from our cherished homeowners.</p>
            </div>
            
            <div className="testimonials-grid-v2">
              {[
                { id: "UWUCBuvZi9Y", name: "Sivakumar & Family" },
                { id: "YOfrf-BYONg", name: "Jayashree R." },
                { id: "Bm8nzwmbhMo", name: "Manikandan S." },
                { id: "2T8XyaWbfBE", name: "Revathi & Saravanan" },
                { id: "2jc6XdSgfR0", name: "Shanmugam P." },
                { id: "xETSet4juOQ", name: "Bhuvaneswari K." }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  className="testimonial-card-v2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="video-thumb-container">
                    <img 
                      src={`https://img.youtube.com/vi/${testimonial.id}/maxresdefault.jpg`} 
                      alt="Testimonial Thumbnail"
                      onError={(e) => e.target.src = `https://img.youtube.com/vi/${testimonial.id}/0.jpg`}
                    />
                    <a 
                      href={`https://www.youtube.com/watch?v=${testimonial.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="play-btn-overlay"
                    >
                      <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                  </div>
                  <div className="testimonial-info-v2">
                    <h3>{testimonial.name}</h3>
                    <div className="stars-v2">★★★★★</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="marquee-mask left"></div>
      <div className="marquee-mask right"></div>
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
