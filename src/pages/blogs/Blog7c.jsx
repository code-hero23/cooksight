import React from 'react';
const interior = '/logo.jpeg';
const blog69 = '/blog-images/cookscape-blog-69.webp';
const aranu = '/architects/Cookscape-Architect-Anulekha.webp';
const Blog7c = () => {
        return (
                <>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
                </div>
                <div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>TECHNOLOGY AND THE FUTURE OF INTERIOR DESIGN INDUSTRY</h1>
                        <img src={blog69} alt="cookscape-future-interior-design" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>In the past few decades, technology has undoubtedly had a huge impact on all walks of ‘Modern’ life, it has also had an equally remarkable impact on the Home Interior Design industry in every part of the world including, Chennai, the southern metropolitan city of India. Although, the future of Interior Design remains ambiguous and tricky to predict as professionals across the map struggle to determine where the world might be in fifty years’ time, it is an eminent fact that the role of technology in the design industry will never diminish.</p>
                        <p className='blog-page-para'>Technology is playing a huge role in updating homes. New residential solutions known as “Smarthomes” are becoming a very common phenomena especially in metro cities around the world and in India. Today the best interior design companies in Chennai are trying to inculcate new technology into home interiors to make offices, homes and other spaces more comfortable for their clients. Hence, Smarthomes are the ‘talk of the town’. Barely a day goes by without one of the tech giants releasing a new gadget designed to make homes more connected. For instance, Google Home has not only successfully been in the market a while now but also has become a popular gadget which is being installed in various residences around the world. It is basically a central home control system that not only acts as a personal assistant but also an alarm and speaker all rolled into one.</p>
                        <p className='blog-page-para'>In the coming years, experts anticipate that smarthomes will be much more than just standalone devices. Smart interiors will be built into the very structure of modern homes. For example, Tipic, an Italian designer company with their unique Tulèr kitchen worktop is pioneering smart kitchen integrations. Made of a slab of quartz composite, the smart work surface inculcates a sink that appears as you wave your hand over a sensor.</p>
                        <p className='blog-page-para'> This trend of technology playing a major part in making homes more comfortable seems to be growing at an exponential rate thus the future of Interior design seems to be bright and vibrant as well as “cool”</p>
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
export default Blog7c;
