import React from 'react';
const interior = '/logo.jpeg';
const blog27 = '/blog-images/cookscape-blog-27.webp';
const arsaranya = '/architects/Cookscape-Architect-Saranya.webp';
const Blog3g = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>What is Amaryllis Variant?</h1>
                        <img src={blog27} alt="cookscape-amaryllis-variant" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>Lustrous, handle-less, lacquered glass, frames and accessories are all set to breathe new life into interiors, transforming them into elegant showcases of beauty. This variant has metallic shutters frames made up of aluminum alloy the frame is on lacquered glass, which comes in various solid and bright colors.</p>
                        <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                        <p className='blog-page-para'>• Highlight – Luxurious Lacquered Glass finish with Imported Metal Frames</p>
                        <p className='blog-page-para'>• Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade</p>
                        <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Proof (BWP) – IS710 Grade</p>
                        <p className='blog-page-para'>• Shutter Material: Lacquered Glass – Ashahi Brand</p>
                        <p className='blog-page-para'>• Shutter Finish: Aluminum Alloy Frames – Lacquered Glass</p>
                        <p className='blog-page-para'>• Frames: Zumila Frames 2 mm beading</p>
                        <p className='blog-page-para'>• Primary Hardware: EBCO (12 Kg)</p>
                        <p className='blog-page-para'>• Skirting: Matching SF Skirting / Rehau Skirting</p>
                        <img src={arsaranya} alt="Architect-Saranya" className="blog-page-author-img pt-3"/>
                        <h1 className='blog-title pt-3'>Architect Saranya</h1>
                      </div>
</div>
<div className="modal fade" id="verticalModal" tabIndex="-1" aria-labelledby="verticalModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          <img src={interior} alt="cookscape-interior-designs" className="img-fluid rounded pb-1"/>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Get free design Catalogue</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="contact-form-container">
                    <form id="contactForm" method="post" action="https://cookscape.in/static/mail.php">
                    <div className="row">
                                    <div className="col-12">
                                        <div className="alert alert-success contact__msg_short" style={{display: "none"}} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input name="name" type="text" className="form-control" placeholder="Name" required/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input name="email" type="email" className="form-control" placeholder="Email" required/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input name="phone" type="text" className="form-control" placeholder="Phone" required/>
                                    </div>
                                    <div className="col-12">
                                        <input name="submit" type="submit" className="btn btn-success" value="Send Message"/>
                                    </div>
                                </div>
                    </form>
                  </div>
            </div>
            
          </div>
        </div>
</div>
</>
              );
            };
export default Blog3g;
