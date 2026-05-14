import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogsData';

const BlogIndex = () => {
  return (
    <div className="blog-index-page">
      <header className="blog-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
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
              className="blog-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="blog-card-image">
                <img src={blog.image || '/blog-images/cookscape-blog-1 .webp'} alt={blog.title} />
                <div className="blog-card-overlay"></div>
                <div className="blog-category">Interiors</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-author">By Architect {blog.author}</span>
                </div>
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-excerpt">{blog.excerpt.substring(0, 110)}...</p>
                <div className="blog-card-footer">
                  <Link to={`/blog/${blog.id}`} className="btn-read-more">
                    Read Article <span className="arrow">→</span>
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
