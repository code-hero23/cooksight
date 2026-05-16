import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TESTIMONIALS } from '../data/siteData';

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

const TiltCard = ({ testimonial, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div 
      className="testimonial-card-v2"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="video-thumb-container">
        <img src={`https://img.youtube.com/vi/${testimonial.id}/maxresdefault.jpg`} alt={testimonial.name} onError={(e) => e.target.src = `https://img.youtube.com/vi/${testimonial.id}/0.jpg`} />
        <div className="card-hover-overlay">
          <div className="play-btn-circle" style={{ margin: 'auto' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <p className="hover-name">{testimonial.name}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Define the 9-column pattern: 2, 2, 1, 1, 1(center), 1, 1, 2, 2
  const columnPattern = [2, 2, 1, 1, 1, 1, 1, 2, 2];
  
  // Group testimonials into columns
  const testimonialColumns = useMemo(() => {
    let currentIdx = 0;
    return columnPattern.map(count => {
      const slice = TESTIMONIALS.slice(currentIdx, currentIdx + count);
      currentIdx += count;
      return slice;
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container-wide">
        <div className="testimonials-cloud-v3">
          {testimonialColumns.map((colItems, colIdx) => (
            <div key={colIdx} className={`testimonial-column col-${colIdx + 1}`}>
              {colItems.map((item) => (
                <TiltCard 
                  key={item.id} 
                  testimonial={item} 
                  onClick={() => setSelectedVideo(item.id)} 
                />
              ))}
              
              {/* Center Column Header Integration */}
              {colIdx === 4 && (
                <motion.div 
                  className="section-header-v3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="testimonial-tag-pill">Testimonials</span>
                  <h1 className="section-title">Trusted by <span>Families</span></h1>
                  <p className="section-subtitle">Real home stories from various cities.</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <VideoModal isOpen={!!selectedVideo} videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};

export default Testimonials;
