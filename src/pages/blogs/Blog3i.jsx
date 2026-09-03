import React from 'react';
const interior = '/logo.jpeg';
const blog29 = '/blog-images/cookscape-blog-29.webp';
const argautham = '/architects/Cookscape-Architect-Gautham-Lakshmikanthan.webp';
const Blog3i = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                  <div className='container p-5'>
                      <h1 className='blog-page-title pt-3'>What is Iris Variant?</h1>
                      <img src={blog29} alt="cookscape-iris-variant" className="img-fluid pt-3"/>
                      <p className='blog-page-para'>Smooth texture and extra glossy finish is the USP of Iris. Available in a wide range of colors, this variant creates vibrant and dynamic spaces. Its internal carcass is made up of Boiling Water Proof material and the exterior shutter has 2mm thick acrylic sheet on it and that is covered with 3mm thick tempered glass. This unit gives a shiny look and is durable as well but most suitable for bedroom wardrobes and T.V units.</p>
                      <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                      <p className='blog-page-para'>• Highlight – Shiny acrylic finish with a reflective and aesthetic beauty.</p>
                      <p className='blog-page-para'>•  Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade</p>
                      <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Proof (BWP) – IS710 Grade</p>
                      <p className='blog-page-para'>• Shutter Material: 2mm Thick Acrylic on HDF Board</p>
                      <p className='blog-page-para'>• Shutter Finish: Imported Acrylic</p>
                      <p className='blog-page-para'>• Primary Hardware: EBCO (12 Kg)</p>
                      <img src={argautham} alt="Architect-Gautham-Lakshmikanthan" className="blog-page-author-img pt-3"/>
                      <h1 className='blog-title pt-3'>Architect Gautham Lakshmikanthan  </h1>
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
export default Blog3i;
