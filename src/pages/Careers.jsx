import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JOBS = [
  {
    title: "Interior Designer",
    type: "Full-Time",
    location: "Chennai",
    desc: "Create stunning, functional spaces that inspire. We're looking for creative visionaries with a passion for luxury home interiors."
  },
  {
    title: "Customer Relationship Executive",
    type: "Full-Time",
    location: "Chennai",
    desc: "The bridge between our brand and our cherished clients. Ensure a seamless, delightful journey from consultation to handover."
  },
  {
    title: "Application Engineer",
    type: "Full-Time",
    location: "Chennai",
    desc: "Support our design and sales teams with technical expertise. Bridge the gap between visionary design and practical implementation."
  }
];

const Careers = () => {
  return (
    <main className="careers-page">
      <div className="container">
        {/* Careers Hero */}
        <section className="careers-hero">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header-v2"
          >
            <span className="about-tag-v3">JOIN THE TEAM</span>
            <h1 className="section-title">Build the Future of <span>Living</span></h1>
            <p className="section-subtitle">We're looking for passionate individuals to help us transform homes across India.</p>
          </motion.div>
        </section>

        {/* Job Listings */}
        <section className="job-listings">
          <div className="jobs-grid">
            {JOBS.map((job, idx) => (
              <motion.div 
                key={idx}
                className="job-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="job-card-header">
                  <span className="job-type">{job.type}</span>
                  <span className="job-location">{job.location}</span>
                </div>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-desc">{job.desc}</p>
                <a 
                  href={`mailto:es.cookscape@gmail.com?subject=Application for ${job.title}&body=Hi Cookscape Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0A[Please attach your resume and a brief introduction here]%0D%0A%0D%0ARegards,%0D%0A[Your Name]`} 
                  className="btn-primary-v3 apply-btn"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="careers-culture section-header-v2">
          <h2 className="section-title">Why <span>Cookscape?</span></h2>
          <div className="culture-grid">
            <div className="culture-item">
              <h4>Creative Freedom</h4>
              <p>Work on high-end luxury projects where your vision takes center stage.</p>
            </div>
            <div className="culture-item">
              <h4>Expert Mentorship</h4>
              <p>Learn from veterans with 25+ years of experience in the interior industry.</p>
            </div>
            <div className="culture-item">
              <h4>Innovation First</h4>
              <p>We use state-of-the-art tools and technologies to stay ahead of the curve.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Careers;
