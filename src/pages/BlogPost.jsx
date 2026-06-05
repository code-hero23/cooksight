import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogsData';

const blogsModules = import.meta.glob('./blogs/*.jsx');

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="blogpost-not-found">
        <div className="container">
          <h2>Blog post not found</h2>
          <p>The story you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="blogpost-back-btn">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const componentPath = `./blogs/${blog.file}`;
  const ContentComponent = blogsModules[componentPath] 
    ? lazy(blogsModules[componentPath])
    : null;

  if (!ContentComponent) {
    return <div className="container" style={{ padding: '200px 0' }}>Content not found at {componentPath}</div>;
  }

  return (
    <div className="blogpost-premium-page">
      <Suspense fallback={
        <div className="blogpost-loader">
          <div className="loader-pulse"></div>
          <p>Loading story...</p>
        </div>
      }>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ContentComponent />
        </motion.div>
      </Suspense>

      <div className="container blogpost-footer-section">
        <div className="blogpost-divider"></div>
        <div className="blogpost-footer-actions">
          <Link to="/blog" className="blogpost-back-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Stories
          </Link>
          <div className="blogpost-share-group">
            <span>Share:</span>
            <a href="#" className="share-btn" aria-label="Facebook">Fb</a>
            <a href="#" className="share-btn" aria-label="LinkedIn">In</a>
            <a href="#" className="share-btn" aria-label="Twitter">Tw</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
