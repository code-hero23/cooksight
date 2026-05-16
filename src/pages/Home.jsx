import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

// Lazy load non-critical sections
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));
const Studios = lazy(() => import('../components/Studios'));
const Footer = lazy(() => import('../components/Footer'));

// Simple loading placeholder
const SectionLoader = () => (
  <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)' }}>
    <div className="loader-dots">
      <span></span><span></span><span></span>
    </div>
  </div>
);

const Home = ({ scrollY }) => {
  return (
    <main>
      <Helmet>
        <title>Home | Cookscape Premium Interiors</title>
        <meta name="description" content="Discover luxury home interiors with Cookscape. 25 years of excellence in modular kitchens, wardrobes, and full home transformations in Chennai." />
        <link rel="canonical" href="https://cookscape.in/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cookscape Interiors",
              "image": "https://cookscape.in/logo.jpeg",
              "description": "Premium home interior design services in Chennai and Bangalore.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "517/338, Anna Salai, Nandanam",
                "addressLocality": "Chennai",
                "addressRegion": "TN",
                "postalCode": "600035",
                "addressCountry": "IN"
              },
              "telephone": "+919600005679",
              "url": "https://cookscape.in",
              "priceRange": "$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Hero scrollY={scrollY} />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Studios />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
