import React from 'react';
const interior = '/logo.jpeg';
const blog6 = '/blog-images/cookscape-blog-6.webp';
const blog6a = '/blog-images/cookscape-blog-6a.webp';
const arakila = '/architects/Cookscape--Architect-Akila.webp';
const Blog1f = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>How To Prevent Dampness From The Wall!</h1>
                        <img src={blog6} alt="cookscape-prevent-dampness-from-the-wall" className="blog-img-size pt-3"/>
                        <p className='blog-page-para'>Dampness of the walls are caused with the excess of moisture either an internal source or external intrusion. When it comes to the internal sources are the moisture caused at kitchen, Dampness caused due air conditioning, external factors include the rains and no proper insulations undergo these issues which in turn reduce the strength and holding bonds between the bricks and plaster. </p>
                        <h2 className='blog-page-title-2'>Causes of Dampness</h2>
                        <p className='blog-page-para'>Condensation acts as the major cause of dampness in many homes. Majorly the kitchens, the bathrooms and bedrooms are the most affected areas caused by the day to day house old activities like cooking, washing and drying clothes.</p>
                        <p className='blog-page-para'>Warm air has the tendency to hold more moisture when compared to cool air. Temperature inside the home and the number of impermeable services play a vital role in the amount of condensation one experiences.</p>
                        <p className='blog-page-para'>Ventilation is also another major factor that affects condensation. A poorly ventilated area can also increase the condensation. Adequate airflow ensures the proper flow of warmth and ensures to remove the moisture content from the air. If the home lacks proper ventilation the hot air also deposits moisture on the coldest surfaces possible usually on the window panes or the outside walls. </p>
                        <p className='blog-page-para'> Civil flaws that cause dampness include no proper fixation on the plumbing lines , inadequate number of gutters and increased groundwater levels. </p>
                        <img src={blog6a} alt="cookscape-prevent-dampness-from-the-wall" className="blog-img-size pt-3"/>
                        <h2 className='blog-page-title-2 pt-3'>Prevention of Dampness</h2>
                        <p className='blog-page-para'>Wall cracks usually start developing from the doors and windows frames. The cracks allow the moisture to seep into the structure of the building which causes damp patches and wall seepage. The seepage can be treated by filling the cracks with the putty and repaint the wall and also the loose plaster has to be removed. </p>
                        <p className='blog-page-para'>Waterproofing the terrace is an ideal solution to avoid the dampness of the wall. Terrace is the place which gets affected by all the weather conditions which results in the leakages and dampness which affects the wood works and the paintings.</p>
                        <p className='blog-page-para'> First quality bricks with the mortar mixed in the ratio 1:3 has to be used for the perfect bonding strength. Usage of Damp proof course above the ground level is also important for the building structure at all locations where the water entry is anticipated.</p>
                        <img src={arakila} alt="Architect-Akila" className="blog-page-author-img pt-3"/>
                        <h1 className='blog-title pt-3'> Architect Akila</h1>
                      </div>
</div>
<div className="modal fade" id="verticalModal" tabIndex="-1" aria-labelledby="verticalModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          <img src={interior} alt="cookscape-interior-designs" className="img-fluid rounded pb-1"/>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Get Free Design Catalogue</h5>
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
export default Blog1f;
