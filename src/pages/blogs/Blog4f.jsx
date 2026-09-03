import React from 'react';
const interior = '/logo.jpeg';
const blog36 = '/blog-images/cookscape-blog-36.webp';
const arvarshini = '/architects/Cookscape--Architect-varshini.webp';
const Blog4f = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                      <h1 className='blog-page-title pt-3'>Why to choose Surabhi Variant?</h1>
                      <img src={blog36} alt="cookscape-surabhi-variant" className="img-fluid pt-3"/>
                      <p className='blog-page-para'>This variant has a Classy appeal with a practical & functional design. Its matte style finish makes it a good choice for heavy duty kitchens and maintenance free home interiors. It comes with a 10 Years Replacement Guarantee. It is made up of Boiling Water Proof Plywood (BWP-Highest Grade). Both the Kitchen Carcass and the Shutter materials of all cabinets are made up of BWP. Apart from this the Boiling Water Proof Plywood used in Surabhi has these treatments done to it: Anti-Termite, Anti-Fungal and Multi-boring. Surabhi has about 400 to 600 different colors and textures to choose from, so the clients get a plethora of options to make their space look appealing.</p>
                      <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                      <p className='blog-page-para'>• Highlight – Low on Maintenance and High on Quality</p>
                      <p className='blog-page-para'>• Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade</p>
                      <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Proof (BWP) – IS710 Grade</p>
                      <p className='blog-page-para'>• Shutter Material: Boiling Water Proof (BWP) – IS710 Grade</p>
                      <p className='blog-page-para'>• Shutter Finish: Matt</p>
                      <p className='blog-page-para'>• Laminate Brand: MERINO A SERIES / GREENLAM A SERIES</p>
                      <p className='blog-page-para'>• Primary Hardware: EBCO (12 Kg)</p>
                      <p className='blog-page-para'>• Skirting: Matching SF Skirting / Rehau Skirting</p>
                      <img src={arvarshini} alt="Architect-Varshini" className="blog-page-author-img pt-3"/>
                      <h1 className='blog-title pt-3'>Architect Varshini</h1>
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
export default Blog4f;
