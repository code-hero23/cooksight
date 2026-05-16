import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogs } from '../data/blogsData';

const BlogIndex = () => {
  return (
    <div className="blog-index-page">
      <Helmet>
        <title>Blog | Cookscape Interior Design Insights</title>
        <meta name="description" content="Stay updated with the latest interior design trends, home renovation tips, and modular kitchen ideas from Cookscape experts." />
        <link rel="canonical" href="https://cookscape.in/blog" />
      </Helmet>
      <header className="blog-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="blog-main-title"
          >
            Our Design <span>Stories</span>
          </motion.h1>
          <p className="blog-intro">Insights, trends, and inspiration from the world of premium interiors.</p>
        </div>
      </header>

      <section className="blog-grid-section container">
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              className="blog-card-v2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              whileHover={{ y: -15 }}
            >
              <div className="blog-card-media">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  onError={(e) => e.target.src = '/blog-images/cookscape-blog-1.webp'}
                />
                <div className="blog-card-badge">Interiors</div>
                <div className="blog-card-overlay-v2"></div>
                
                {/* Overlapping Architect Avatar */}
                <div className="blog-author-float">
                  <img 
                    src={`/architects/cookscape--architect-${blog.author.toLowerCase().replace(' ', '-')}.webp`} 
                    alt={blog.author}
                    onError={(e) => e.target.src = '/logo.jpeg'}
                  />
                </div>
              </div>

              <div className="blog-card-body-v2">
                <div className="blog-card-meta-v2">
                  <span className="author-name-v2">Architect {blog.author}</span>
                  <span className="read-time-v2">5 min read</span>
                </div>
                
                <h2 className="blog-card-title-v2">{blog.title}</h2>
                <p className="blog-card-excerpt-v2">
                  {blog.excerpt.length > 120 ? blog.excerpt.substring(0, 120) + '...' : blog.excerpt}
                </p>
                
                <div className="blog-card-footer-v2">
                  <Link to={`/blog/${blog.id}`} className="read-more-link-v2">
                    Explore Story
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogIndex;
