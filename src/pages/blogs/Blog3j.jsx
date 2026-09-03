import React from 'react';
const interior = '/logo.jpeg';
const blog30 = '/blog-images/cookscape-blog-30.webp';
const arraakesh = '/architects/Cookscape--Architect-raakesh-natarajan.webp';
const Blog3j = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>What is Classic Variant?</h1>
                        <img src={blog30} alt="cookscape-classic-variant" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>It’s an attractive range of traditional profiles and designs rendered in five pieces of framed hardwood shutter. They often feature neutral color palette and intricate details which make the kitchen timeless. This variant even though volumes is a very sturdy one and gives a certain character to a space. This variant comes with 10 years Replacement Guarantee and its exterior shutters are 22mm thick (Thickest amongst all variants) made from sturdy rubber wood. Since it made up of rubber wood it can be decorated with carvings, moldings, frosted glass inlay or CNC cutting as well. If good looking traditional themed furniture is your piece of cake then definitely this unit is for you. It is similar to traditional variant but it has its own unique character as well.</p>
                        <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                        <p className='blog-page-para'>• Highlight – Sturdy Material with Rich & Decorative Wooden look</p>
                        <p className='blog-page-para'>• Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade</p>
                        <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Proof (BWP) – IS710 Grade</p>
                        <p className='blog-page-para'>• Shutter Material: Seasoned Rubber Wood- 22mm Thick</p>
                        <p className='blog-page-para'>• Shutter Finish: 3 Coat Sealer & Painting</p>
                        <p className='blog-page-para'>• Primary Hardware: EBCO (12 Kg)</p>
                        <p className='blog-page-para'>Skirting: Matching SF Skirting / Rehau Skirting</p>
                        <img src={arraakesh} alt="Architect-Raakesh-Natarajan" className="blog-page-author-img pt-3"/>
                        <h1 className='blog-title pt-3'>Architect Raakesh Natarajan </h1>
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
export default Blog3j;
