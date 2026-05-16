import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { GALLERY_COLLECTION } from '../data/siteData';

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  // Get unique categories
  const categories = useMemo(() => {
    return ['All', ...new Set(GALLERY_COLLECTION.map(item => item.category))];
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return activeCategory === 'All' 
      ? GALLERY_COLLECTION 
      : GALLERY_COLLECTION.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Handle horizontal scroll parallax
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Entry animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className={`portfolio-archipelago-root cat-${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Dynamic Atmospheric Background */}
      <div className="archipelago-atmosphere">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="atmosphere-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Premium Filter Bar */}
      <nav className="gallery-filter-bar">
        <div className="filter-scroll-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span className="pill-text">{cat}</span>
              {activeCategory === cat && (
                <motion.div layoutId="activePill" className="pill-bg" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Archipelago Canvas */}
      <div className="archipelago-canvas-container" ref={containerRef}>
        <motion.div 
          className="editorial-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              className={`editorial-card ${index % 5 === 0 ? 'large' : index % 3 === 0 ? 'medium' : 'small'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="card-media">
                <img src={item.url} alt={item.title} loading="lazy" />
                <div className="card-badge">{item.category}</div>
              </div>
              <div className="card-details">
                <h3>{item.title}</h3>
                <span className="view-link">Explore Design →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.url} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h2>{selectedImage.title}</h2>
                <p>Designed by Cookscape</p>
                <button className="close-lightbox" onClick={() => setSelectedImage(null)}>✕</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGallery;
