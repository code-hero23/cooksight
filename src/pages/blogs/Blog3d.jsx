import React from 'react';
const interior = '/logo.jpeg';
const blog24 = '/blog-images/cookscape-blog-24.webp';
const blog24a = '/blog-images/cookscape-blog-24a.webp';
const arsabari = '/architects/Cookscape-Architect-Sabarinathan.webp';
const Blog3d = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                  <div className='container p-5'>
                      <h1 className='blog-page-title pt-3'>How is interior wall thickness determined?</h1>
                      <img src={blog24} alt="cookscape-wall-thickness-ideas" className="img-fluid pt-3"/>
                      <h2 className='blog-page-title-2 pt-3'>INTERIOR WALL THICKNESS IS DETERMINED BASED ON VARIOUS ASPECTS:</h2>
                      <p className='blog-page-para'>The Function of The Wall (Partition or Load Bearing)</p>
                      <p className='blog-page-para'>What an Acoustic Proof You Need It to Be</p>
                      <p className='blog-page-para'>The Material Used to Build It</p>
                      <h2 className='blog-page-title-2 pt-3'>The Function of the Wall?</h2>
                      <p className='blog-page-para'>Either it can be to separate spaces like room partitions, or it can carry plumbing or electrical line, or a supporting wall (Load Bearing Walls).</p>
                      <p className='blog-page-para'>When the wall is built only to separate two space it can 100mm thickness + 20mm Plastering thickness put together 125mm.</p>
                      <p className='blog-page-para'>When it carries plumbing or Electrical lines the thickness should be 150mm minimum or 230mm maximum as regular wall and if it is a load bearing supporting wall with utilities then it should be definitely 230mm.</p>
                      <h2 className='blog-page-title-2 pt-3'>How Aquatics proof it should be?</h2>
                      <p className='blog-page-para'>A standard cavity wall made of a wooden frame and 2 boards of dry wall partitions sheets or timber partitions will generally be 125mm to 150mm thick. This will include the vacuum cavity in-between the boards, but wider the space, better the sound insulation, especially with the low bass frequencies sound area. </p>
                      <p className='blog-page-para'>Rat-trap bonding is also used to create acoustic proof walls as well as thermal proof walls, which is generally used in the exterior wall, and rarely in Interior partition walls.</p>
                      <h2 className='blog-page-title-2 pt-3'>The materials used to build it.</h2>
                      <h2 className='blog-page-title-2 pt-3'>Wall thickness in mm: –  </h2>
                      <p className='blog-page-para'>If we are using brick for wall construction, then minimum wall thickness should be maintained around 100mm + 25mm plastering thickness for internal wall partition and 80mm thick for cupboard and railing purpose.</p>
                      <p className='blog-page-para'>If we are adopting AAC block and concrete block then minimum wall thickness should be reduced around 100mm for inner wall partition and the same applies to the RCC Shear wall. </p>
                      <p className='blog-page-para'>For all the building types the load bearing structure made of brick masonry walls in the internal area can be max 300mm to minimum 200mm according to the width and height of the room.</p>
                      <h2 className='blog-page-title-2 pt-3'>How to calculate the Interior wall thickness.</h2>
                      <p className='blog-page-para'>The Interior wall thickness can be determined by measuring the door jamb thickness in the entry areas and by calculating the difference between interior room dimensions (ID) and exterior dimensions (OD). </p>
                      <img src={blog24a} alt="cookscape-wall-thickness-ideas" className="img-fluid pt-3"/>
                      <h2 className='blog-page-title-2 pt-3'>Interior wall thickness suggested for different material in the industry</h2>
                      <p className='blog-page-para'>Rammed Earth – 375 to 450 mm</p>
                      <p className='blog-page-para'>Adobe Brick – 300 mm</p>
                      <p className='blog-page-para'>Poured Concrete (Non-Reinforced) – 125 to 200 mm</p>
                      <p className='blog-page-para'>Reinforced Concrete – 125 mm</p>
                      <p className='blog-page-para'>Stone – 250 mm</p>
                      <p className='blog-page-para'>Block (Sand-Cement, Stabilised Earth, cement) – 100 to 150 mm</p>
                      <img src={arsabari} alt="Architect-Sabarinathan" className="blog-page-author-img pt-3"/>
                      <h1 className='blog-title pt-3'> Architect Sabarinathan</h1>
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
export default Blog3d;
