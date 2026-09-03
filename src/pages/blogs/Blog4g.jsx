import React from 'react';
const interior = '/logo.jpeg';
const blog36 = '/blog-images/cookscape-blog-36.webp';
const arsaranya = '/architects/Cookscape-Architect-Saranya.webp';
const Blog4g = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>What is Capricoast Glossy Variant?</h1>
                        <img src={blog36} alt="cookscape-glossy-variant" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>A special variety of laminate. Its shiny texture creates bright & lovely spaces. Although it has luxurious appeal it is most suitable for modest budgets. It comes with 10 year repair warranty and thus Kitchen Carcass of this material is made up of Boiling Water Proof Material with the necessary treatments applied on it. However all the other woodwork carcass contains Boiling Water Resistant variant and same holds true for the Shutter Material as well. It has a 0.8mm thick glossy laminate which has an aesthetic appeal and a modest pricing. It has over 40 to 50 different color shades available to choose from.</p>
                        <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                        <p className='blog-page-para'>• Highlight – Grand Glossy Look</p>
                        <p className='blog-page-para'>• Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade</p>
                        <p className='blog-page-para'>• Kitchen Shutter Boiling Water Proof (BWP) – IS710 Grade</p>
                        <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Resistance (BWR)</p>
                        <p className='blog-page-para'>• Wardrobe Shutter: Boiling Water Resistance (BWR)</p>
                        <p className='blog-page-para'>• Shutter Finish: Glossy</p>
                        <p className='blog-page-para'>Laminate Brand: Prelam / Virgo / Formica / Calplus Series</p>
                        <p className='blog-page-para'>Primary Hardware: EBCO / HETTICH</p>
                        <p className='blog-page-para'>Skirting: EBCO PVC Skirting / Wooden Skirting</p>
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
export default Blog4g;
