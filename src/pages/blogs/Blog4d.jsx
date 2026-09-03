import React from 'react';
const interior = '/logo.jpeg';
const blog34 = '/blog-images/cookscape-blog-34.webp';
const aranu = '/architects/Cookscape-Architect-Anulekha.webp';
const Blog4d = () => {
return (
<>
 <div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>What is Premium Vanity?</h1>
                        <img src={blog34} alt="cookscape-premium-vanity" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>This a rich looking yet simplistic kind of variant. It has a lacquered finish with a varnish coating that gives a reflective appearance to the kitchen, it is most suited for kitchens where more of grilling and microwaving activates are performed. It has a Glossy Painted Plywood Finish with three coats of spray paint and one coat of varnish to give this variant a glossy look. Any Pastel color from Asian Paints can be applied to this variant. Most suited for wardrobes, TV. Units. This is a premium quality product that comes with 10 years of Replacement Guarantee, as Boiling Water Proof (BWP-Highest grade) Plywood is used in this variant. This variant like our Vanity Variant is handle less and can be opened with the help of niche engraved on the exterior shutters of the cabinets.</p>
                        <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                        <p className='blog-page-para'>• Highlight – Glossy Contemporary Finish and Stellar Looks.</p>
                        <p className='blog-page-para'>• Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade.</p>
                        <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Proof (BWP) – IS710 Grade.</p>
                        <p className='blog-page-para'>• Shutter Material: HIGH Density Fiber.</p>
                        <p className='blog-page-para'>• Shutter Finish: 1.2 mm Tough Gloss / Scratch Proof</p>
                        <p className='blog-page-para'>• Shutter Finish: Lacquered Paint + Varnish Finish.</p>
                        <p className='blog-page-para'>• Primary Hardware: EBCO (12 Kg).</p>
                        <p className='blog-page-para'>• Skirting: Matching SF Skirting / Rehau Skirting.</p>
                        <img src={aranu} alt="Architect-Anulekha" className="blog-page-author-img pt-3"/>
                        <h1 className='blog-title pt-3'>Architect Anulekha</h1>
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
export default Blog4d;
