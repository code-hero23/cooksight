import React from 'react';
import { Helmet } from 'react-helmet-async';
import PortfolioGallery from '../components/PortfolioGallery';
import Footer from '../components/Footer';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <Helmet>
        <title>Portfolio Collection | Cookscape - Luxury Interior Gallery</title>
        <meta name="description" content="Explore Cookscape's architectural portfolio. A curated collection of luxury kitchens, bedrooms, and living spaces designed for modern families." />
      </Helmet>

      {/* Hero Section for Gallery */}
      <section className="gallery-hero">
        <div className="container-wide">
          <span className="gallery-tag">Exhibition</span>
          <h1>Our Design <span>Collection</span></h1>
          <p>A curated journey through our most inspired living spaces.</p>
        </div>
      </section>

      <PortfolioGallery />

      <Footer />
    </div>
  );
};

export default Gallery;
