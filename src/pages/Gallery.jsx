import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PortfolioGallery from '../components/PortfolioGallery';
import Footer from '../components/Footer';
import { GALLERY_COLLECTION } from '../data/siteData';

const Gallery = () => {
  const categories = [...new Set(GALLERY_COLLECTION.map(item => item.category))];
  const totalImages = GALLERY_COLLECTION.length;

  return (
    <div className="gallery-page-v2">
      <Helmet>
        <title>Portfolio Collection | Cookscape - Luxury Interior Gallery</title>
        <meta name="description" content="Explore Cookscape's architectural portfolio. A curated collection of luxury kitchens, bedrooms, and living spaces designed for modern families." />
      </Helmet>

      {/* Cinematic Hero Section */}
      <section className="gallery-hero-v2">
        {/* Animated background orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <div className="gallery-hero-inner">
          <motion.div
            className="gallery-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.span
              className="gallery-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              ✦ Design Exhibition
            </motion.span>

            <motion.h1
              className="gallery-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Design
              <span className="gallery-hero-title-accent"> Collection</span>
            </motion.h1>

            <motion.p
              className="gallery-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              A curated journey through our most inspired living spaces —<br />
              where craftsmanship meets contemporary vision.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="gallery-hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="gallery-stat-pill">
                <span className="stat-num">{totalImages}+</span>
                <span className="stat-label">Spaces Designed</span>
              </div>
              <div className="gallery-stat-divider" />
              <div className="gallery-stat-pill">
                <span className="stat-num">{categories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="gallery-stat-divider" />
              <div className="gallery-stat-pill">
                <span className="stat-num">15+</span>
                <span className="stat-label">Years Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Cue */}
          <motion.div
            className="gallery-scroll-cue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="scroll-cue-line" />
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </section>

      <PortfolioGallery />

      <Footer />
    </div>
  );
};

export default Gallery;
