import React from 'react';
const interior = '/logo.jpeg';
const blog51 = '/blog-images/cookscape-blog-51.webp';
const blog51a = '/blog-images/cookscape-blog-51a.webp';
const armeena = '/architects/Cookscape-Architect-Meena.webp';
const Blog6a = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>Top-5-Reasons-to-Choose-an-Interior-Design-For-Home!</h1>
                        <img src={blog51} alt="cookscape-modern-interior-design" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>In this Modern day and age homes with sleek and attractive design is the talk of every town. Along with this strategic ‘Space Planning’ has become equally important.</p>
                        <p className='blog-page-para'>Here are some ideas to help anyone get a well designed contemporary home. Vertical storages can be included in modest rooms. They are petite and take up less space making the interior volume look light and not affecting the carpet area to a great extent. Therefore effectively one has to plan the requirements and incorporate it in the Fashionable & Trending concepts. </p>
                        <p className='blog-page-para'> Home is a Place where we spend much of our quality time so this space has  a  huge  impact  on  our  mental  &  physical  well-</p>
                        <p className='blog-page-para'>being hence it should be in sync with our emotions and it should be designed in a good manner. </p>
                        <p className='blog-page-para'>Over here are some design styles that can be implemented in various home interiors.</p>
                        <h2 className='blog-page-title-2 pt-3'>ART DECO:  </h2>
                        <p className='blog-page-para'>Sharp and classy, this variant uses basic geometrical Patterns like Straight lines etc to give an outstanding look.</p>
                        <h2 className='blog-page-title-2 pt-3'>CONTEMPORARY:</h2>
                        <p className='blog-page-para'>Many are fond of this style worldwide. With its minimalist approach and neutral color palette, this design makes any interior space look elegant.</p>
                        <img src={blog51a} alt="cookscape-modern-interior-design" className="img-fluid pt-3"/>
                        <h2 className='blog-page-title-2 pt-3'>TRADITIONAL:</h2>
                        <p className='blog-page-para'>Traditional designs are the ones which highlight the craftsmanship of a particular culture, finished wood works, Velvet, silk and it gives a bold and grand look to any interior space.</p>
                        <h2 className='blog-page-title-2 pt-3'>SCANDINAVIAN:</h2>
                        <p className='blog-page-para'>This style can usually be found in shades of white with a wooden texture, bright elements as well as aluminium painted finish. Natural lightings, with minimalistic furniture are common characteristics of this variant.</p>
                        <p className='blog-page-para'>Apart from the styles mentioned above there are a lot more themes available like Bohemian, Rustic, French etc, one has to choose according to their preference and taste.</p>
                        <p className='blog-page-para'>The Levels of Natural and electrical lights, Proper designs have an impact on human health and safety so must make sure that their living spaces are well designed.</p>
                        <p className='blog-page-para'>With the help of Creative solutions, efficient and effective planning, good quality of materials and sustainable design principles can reduce electrical consumptions.</p>
                        <p className='blog-page-para'>Good Interior designing makes your life happy which helps in your physical and mental well being.</p>
                        <img src={armeena} alt="Architect-Meena" className="blog-page-author-img pt-3"/>
                        <h1 className='blog-title pt-3'>Architect Meena</h1>
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
export default Blog6a;
