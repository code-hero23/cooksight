import React from 'react';
const interior = '/logo.jpeg';
const blog35 = '/blog-images/cookscape-blog-35.webp';
const arranchana = '/architects/Cookscape-Architect-Ranchana.webp';
const Blog4e = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                  <div className='container p-5'>
                      <h1 className='blog-page-title pt-3'>Why to choose Surabhi Variant?</h1>
                      <img src={blog35} alt="cookscape-surabhi-variant" className="img-fluid pt-3"/>
                      <p className='blog-page-para'>A variant that is the epitome of minimalist design. Its lacquered finish with a bright and shiny appearance not only gives the kitchen a luxurious look but also makes it an aesthetically pleasing choice. Made from sheet plywood of the highest grade Boiling Water Proof Plywood (BWP) it is of premium quality. It shutters have a Painted Plywood finish. It has a total of 3 coats of Spray Paint on its external shutters and it is also a handle-less variant that comes with a plethora of color options. Any Pastel color from Asian Paints can be applied to this variant. Most suited for wardrobes, TV. Units or Kitchens with more of Western Style cooking like Grilling or Microwaving and less of pots and pans cooking. As spicy cooking can emit more of strong fumes which can over a period of time harm the Kitchen Cabinets.</p>
                      <h2 className='blog-page-title-2 pt-3'>Key Points & Features:</h2>
                      <p className='blog-page-para'>• Highlight – Contemporary Finish and Stellar Looks</p>
                      <p className='blog-page-para'>• Kitchen Carcass Boiling Water Proof (BWP) – IS710 Grade</p>
                      <p className='blog-page-para'>• Wardrobe Carcass: Boiling Water Proof (BWP) – IS710 Grade</p>
                      <p className='blog-page-para'>• Shutter Material: HIGH Density Fiber</p>
                      <p className='blog-page-para'>• Shutter Finish: Lacquered Paint Finish</p>
                      <p className='blog-page-para'>• Primary Hardware: EBCO (12 Kg)</p>
                      <img src={arranchana} alt="Architect-Ranchana" className="blog-page-author-img pt-3"/>
                      <h1 className='blog-title pt-3'>Architect Ranchana</h1>
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
export default Blog4e;
