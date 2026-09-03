import React from 'react';
const interior = '/logo.jpeg';
const blog32 = '/blog-images/cookscape-blog-32.webp';
const ardinesh = '/architects/Cookscape--Architect-dinesh.webp';
const Blog4b = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                  <div className='container p-5'>
                      <h1 className='blog-page-title pt-3'>What is Alumix Variant?</h1>
                      <img src={blog32} alt="cookscape-alumix-variant" className="blog-img-size"/>
                      <p className='blog-page-para'>Designed for contemporary look with enhanced durability. Alumix’s metal alloy framework makes it strong and rust resistant. Also, its toughened glass inlay panel gives it a bright appeal. The Internal Carcass of this variant is made of Boiling Water Proof (BWP- Highest Grade) Plywood. Hence this variant comes with a Replacement Guarantee. The Aluminum alloy framework is made up of Aluminum, Chromium and Stainless steel. Zumila Glass is used on the Exterior Shutters so that they last longer.</p>
                      <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                      <p className='blog-page-para'>• Highlight – Metal Variant with Inlay artwork, suitable for stylish new designs & renovations.</p>
                      <p className='blog-page-para'>• Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade/ Greenply Lam</p>
                      <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Proof (BWP) – IS710 Grade/ Greenply Lam</p>
                      <p className='blog-page-para'>• Shutter Material: Alumix Frames/Filmed Glass</p>
                      <p className='blog-page-para'>• Shutter Finish: Plain or Frosted Toughened Glass with/without Picture Inlay</p>
                      <p className='blog-page-para'>• Laminate Brand: Zumila Frames / Premium Plus Paint</p>
                      <p className='blog-page-para'>• Primary Hardware: EBCO (12 Kg)</p>
                      <img src={ardinesh} alt="Architect-Dinesh" className="blog-page-author-img pt-3"/>
                      <h1 className='blog-title pt-3'>Architect Dinesh</h1>
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
export default Blog4b;
