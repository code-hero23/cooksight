import React, { Component } from "react";
import {FAQs} from "../data/FAQs"; // Importing FAQs from a JSON file for better maintainability

export class FAQ extends Component {
  state = {
    activeIndex: 0,
    visibleCount: 5,
  };

 toggleFAQ = (id) => {
  this.setState((prevState) => ({
    activeIndex: prevState.activeIndex === id ? null : id,
  }));
};

 loadMore = () => {
  this.setState((prevState) => ({
    visibleCount: Math.min(prevState.visibleCount + 5, FAQs.length),
  }));
};
  showLess = () => {
    this.setState({
      visibleCount: 5,
      activeIndex: null,
    });

    // Optional: Smooth scroll back to FAQ
    document.querySelector(".faq-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  render() {
    const { activeIndex, visibleCount } = this.state;

    return (
      <section className="faq-section">
        <div className="faq-container">
          {/* Heading */}
          <div className="faq-heading">
            <span className="faq-highlight">FAQ</span>

            <h2>
              Everything You Need to <span>Know</span>
            </h2>

            <p>
              Find answers to the most frequently asked questions about our
              interior design services, process, pricing, and project timeline.
            </p>
          </div>

          {/* FAQ List */}
        <div className="faq-list">

  {FAQs
    .slice(0, visibleCount)
    .map((faq) => (

      <div
        key={faq.id}
        className={`faq-card ${
          activeIndex === faq.id ? "active" : ""
        }`}
      >

        <button
          className="faq-question"
          onClick={() => this.toggleFAQ(faq.id)}
        >

          <span>{faq.id}. {faq.question}</span>

          <span
            className={`faq-icon ${
              activeIndex === faq.id ? "rotate" : ""
            }`}
          >
            +
          </span>

        </button>

        <div
          className={`faq-answer ${
            activeIndex === faq.id ? "show" : ""
          }`}
        >
          <p>{faq.answer}</p>
        </div>

      </div>

    ))}

</div>

          {/* Load More Button */}
          <div className="faq-load-more">
            {visibleCount < FAQs.length ? (
              <button className="btn-primary-v3 show-more-btn" onClick={this.loadMore}>
                View More FAQs
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button className="btn-primary-v3 show-less-btn" onClick={this.showLess}>
                Show Less
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* CTA */}
          {/* <div className="faq-cta">

            <h3>Still have questions?</h3>

            <p>
              Our interior experts are ready to help you transform your dream
              home into reality.
            </p>

            <button>
              Book Free Consultation
            </button>

          </div> */}
        </div>
      </section>
    );
  }
}

export default FAQ;
