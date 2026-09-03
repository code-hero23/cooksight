import React from 'react';
const interior = '/logo.jpeg';
const blog46 = '/blog-images/cookscape-blog-46.webp';
const aranu = '/architects/Cookscape-Architect-Anulekha.webp';
const Blog5f = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>Ideas to Brighten up a dark Kitchen</h1>
                        <img src={blog46} alt="cookscape-dark-kitchen" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>Kitchen is one of the most important and integral part of any Residential Interior Design Projects. This is the place where sharp objects like knifes and cutters are used, apart from this people also come into contact with fire here. Hence it is absolutely necessary that it is not only well ventilated but also well lit. So here are some tips and tricks to help brighten up any kitchen with minimal intervention, which will enhance the aesthetics of the home interiors as well as make kitchens more functional.</p>
                        <h2 className='blog-page-title-2 pt-3'>1. “Mirror on the Wall”</h2>
                        <p className='blog-page-para'>Mirrors are an age old remedy, which helps bring light into a space, as they reflect light effectively an illusion of ample light is created which brightens up a space and makes it appear more spacious. Therefore tastefully hanging mirrors in a kitchen can transform its appearance completely. </p>
                        <h2 className='blog-page-title-2 pt-3'>2. “Let there be light”…. below Wall-Modules</h2>
                        <p className='blog-page-para'>Installation of light under wall cabinets can be the best solution for a drab and packed kitchen. A plethora of lighting solutions are available such as Puck lights, LED lights and Fluorescent Light Bars any of these could be selected to make a kitchen shine.</p>
                        <h2 className='blog-page-title-2 pt-3'>3. The Art of Contrasting</h2>
                        <p className='blog-page-para'>Define a focal point which can either be a specific wall or a component like dado tiles above the kitchen counter or the kitchen sink and design that specific detail so that it is in contrast with the rest of the space. This will not only lighten up the space but also make it more dynamic in nature.</p>
                        <h2 className='blog-page-title-2 pt-3'>4. Glittering Kitchen; metallic touch</h2>
                        <p className='blog-page-para'>Metallic objects glitter even if a small amount of light falls on them. Hence a silvery fridge, stainless steel kitchen sink or shiny metallic dado tiles can help reflect light making the space look classy, shiny and bright.</p>
                        <p className='blog-page-para'>These simple solutions are not only viable for newly constructed kitchens but they could be implemented for renovated interior design works as well. Apart from these interventions adding more light into the Kitchen with the help of lamps and high powered bulbs can also be a very practical and functional way of bringing in light to Interior Spaces like Kitchens.</p>
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
export default Blog5f;
