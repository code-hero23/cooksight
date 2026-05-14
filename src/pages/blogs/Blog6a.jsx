import React from 'react';
import { Helmet } from 'react-helmet-async';
const interior = '/logo.jpeg';
const blog51 = '/blog-images/cookscape-blog-51 .webp';
const blog51a = '/blog-images/cookscape-blog-51a .webp';
const armeena = '/architects/Cookscape-Architect-Meena .webp';
const Blog6a = () => {
return (
<>
<Helmet>
<title> Cookscape - Interior Designer in Chennai, Modular Kitchen Designer in Chennai, Wardrobe Designer in Chennai, Home Renovation in Chennai, TV Unit in  Chennai, Kitchen Cabinet Designs In Chennai  </title>
<meta name="keywords" content="interior designers in Chennai, modular kitchen in Chennai, interior decorators in Chennai, kitchen designers in Chennai, bedroom wardrobe designers in Chennai, home renovation in Chennai, remodeling in Chennai, kitchen renovators in Chennai, living room interior decor in Chennai, dining room interior designers in Chennai, home interior decors in Chennai, interior design company in Chennai, interior design ideas in Chennai, kitchen interior ideas in Chennai, pooja room interior designers in Chennai, kitchen cabinet designs in Chennai"/>
<meta name="description" content="Cookscape offers expert interior design services, including modular kitchens, pooja units, wardrobes, TV units, kids' furniture, and more.
"/>
<meta name='copyright' content='Cookscape'/>
<meta name='language' content='IN'/>
<meta name='robots' content='index,follow'/>
<meta name='topic' content='Business'/>
<meta name='Classification' content='Interior Designer'/>
<meta name='author' content='info@cookscape.com'/>
<meta name='designer' content='Cookscape India Private Limited'/>
<meta name='reply-to' content='Cookscape'/>
<meta name='owner' content='Cookscape India Private Limited'/>
<link rel="canonical" href="https://www.cookscape.com/top-5-reasons-to-choose-an-interior-design-for-home"></link>
</Helmet>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>Top-5-Reasons-to-Choose-an-Interior-Design-For-Home!</h1>
                        <img src={blog51} alt="cookscape-modern-interior-design" class="img-fluid pt-3"/>
                        <p className='blog-page-para'>In this Modern day and age homes with sleek and attractive design is the talk of every town. Along with this strategic ‘Space Planning’ has become equally important.</p>
                        <p className='blog-page-para'>Here are some ideas to help anyone get a well designed contemporary home. Vertical storages can be included in modest rooms. They are petite and take up less space making the interior volume look light and not affecting the carpet area to a great extent. Therefore effectively one has to plan the requirements and incorporate it in the Fashionable & Trending concepts. </p>
                        <p className='blog-page-para'> Home is a Place where we spend much of our quality time so this space has  a  huge  impact  on  our  mental  &  physical  well-</p>
                        <p className='blog-page-para'>being hence it should be in sync with our emotions and it should be designed in a good manner. </p>
                        <p className='blog-page-para'>Over here are some design styles that can be implemented in various home interiors.</p>
                        <h2 className='blog-page-title-2 pt-3'>ART DECO:  </h2>
                        <p className='blog-page-para'>Sharp and classy, this variant uses basic geometrical Patterns like Straight lines etc to give an outstanding look.</p>
                        <h2 className='blog-page-title-2 pt-3'>CONTEMPORARY:</h2>
                        <p className='blog-page-para'>Many are fond of this style worldwide. With its minimalist approach and neutral color palette, this design makes any interior space look elegant.</p>
                        <img src={blog51a} alt="cookscape-modern-interior-design" class="img-fluid pt-3"/>
                        <h2 className='blog-page-title-2 pt-3'>TRADITIONAL:</h2>
                        <p className='blog-page-para'>Traditional designs are the ones which highlight the craftsmanship of a particular culture, finished wood works, Velvet, silk and it gives a bold and grand look to any interior space.</p>
                        <h2 className='blog-page-title-2 pt-3'>SCANDINAVIAN:</h2>
                        <p className='blog-page-para'>This style can usually be found in shades of white with a wooden texture, bright elements as well as aluminium painted finish. Natural lightings, with minimalistic furniture are common characteristics of this variant.</p>
                        <p className='blog-page-para'>Apart from the styles mentioned above there are a lot more themes available like Bohemian, Rustic, French etc, one has to choose according to their preference and taste.</p>
                        <p className='blog-page-para'>The Levels of Natural and electrical lights, Proper designs have an impact on human health and safety so must make sure that their living spaces are well designed.</p>
                        <p className='blog-page-para'>With the help of Creative solutions, efficient and effective planning, good quality of materials and sustainable design principles can reduce electrical consumptions.</p>
                        <p className='blog-page-para'>Good Interior designing makes your life happy which helps in your physical and mental well being.</p>
                        <img src={armeena} alt="Architect-Meena" class="blog-page-author-img pt-3"/>
                        <h1 className='blog-title pt-3'>Architect Meena</h1>
                      </div>
</div>
<div class="modal fade" id="verticalModal" tabindex="-1" aria-labelledby="verticalModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
          <img src={interior} alt="cookscape-interior-designs" class="img-fluid rounded pb-1"/>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Get free design Catalogue</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className="contact-form-container">
                    <form id="contactForm" method="post" action="https://www.cookscape.com/static/mail.php">
                    <div class="row">
                                    <div class="col-12">
                                        <div class="alert alert-success contact__msg_short" style={{display: "none"}} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <input name="name" type="text" class="form-control" placeholder="Name" required/>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <input name="email" type="email" class="form-control" placeholder="Email" required/>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <input name="phone" type="text" class="form-control" placeholder="Phone" required/>
                                    </div>
                                    <div class="col-12">
                                        <input name="submit" type="submit" class="btn btn-success" value="Send Message"/>
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
