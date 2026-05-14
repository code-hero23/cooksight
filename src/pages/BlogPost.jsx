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
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Blog post not found</h2>
        <Link to="/blog" className="btn-blue-pill">Back to Blogs</Link>
      </div>
    );
  }

  // Dynamically get the blog component from the glob map
  const componentPath = `./blogs/${blog.file}`;
  const ContentComponent = blogsModules[componentPath] 
    ? lazy(blogsModules[componentPath])
    : null;

  if (!ContentComponent) {
    return <div className="container" style={{ padding: '200px 0' }}>Content not found at {componentPath}</div>;
  }

  return (
    <div className="blog-post-page">
      <Suspense fallback={<div className="loader-container">Loading story...</div>}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContentComponent />
        </motion.div>
      </Suspense>

      <div className="container blog-footer-nav">
        <hr />
        <div className="footer-actions">
          <Link to="/blog" className="btn-outline-pill">← Back to All Stories</Link>
          <div className="share-actions">
             <span>Share:</span>
             <a href="#">Fb</a>
             <a href="#">In</a>
             <a href="#">Tw</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
