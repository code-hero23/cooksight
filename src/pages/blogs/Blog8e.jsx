import React from 'react';
const interior = '/logo.jpeg';
const blog75 = '/blog-images/cookscape-blog-75.webp';
const arapsana = '/architects/Cookscape--Architect-Apsana.webp';
const Blog8e = () => {
        return (
                <>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
                </div>
                <div className='container-fluid aboutus'>
                    <div className='container p-5'>
                        <h1 className='blog-page-title pt-3'>WHY EXPERTS ARE CRUCIAL TO DESIGN AND BUILD “DREAM HOMES”?</h1>
                        <img src={blog75} alt="cookscape-build-design" className="img-fluid pt-3"/>
                        <p className='blog-page-para'>Owning a dream home is a familiar desire for many. However, due to lack of resources only a handful of people can afford to make this their reality. Hence, before spending a fortune on building a house it is imperative to make a wise investment. Therefore hiring building professionals will not only assure a cozy and elegant home design but also will enhance the quality of construction.</p>
                        <h2 className='blog-page-title-2 pt-3'>Role of an Architect</h2>
                        <p className='blog-page-para'>An Architect’s job is to design a house prior to construction. Construction of a house is quiet a challenging endeavor and Architects can ease this process by taking charge of the project from the design to the execution phase. The spaces planned by architects are more efficient, environmentally sustainable and cost effective. Architects also come in handy for renovation projects as well as Façade Redesign projects. They spend time with their clients to understand their taste, cultural background and budget after which they start the design process and using their technical and creative knowledge they come up with the most suitable design. An architect can provide all the drawings which could be used on-site by engineers and contractors to build the structure.</p>
                        <h2 className='blog-page-title-2 pt-3'>Role of a Civil Engineer</h2>
                        <p className='blog-page-para'>Civil Engineers on the other hand help build the structure designed. They review drawings, study the structure of the house and make sure that the building meets the building codes requirement. They also look into the foundational strength of a building and the materials to be used for construction. They help in making a sturdy and durable dwelling.</p>
                        <h2 className='blog-page-title-2 pt-3'>Role of an Interior Designer</h2>
                        <p className='blog-page-para'>Once the construction is completed then it is the Interior Designer’s job to make sure that the interior spaces are utilized well and each room has its own unique character. They could design a home interior to give a modern, elegant, eclectic, classic and various other kinds of look. They also provide advice and ideas on the different kinds of accessories or decorative furniture that could be bought. Also the best materials to be used for home furniture and many interior designers also design customized furniture to match the unique character of a house.</p>
                        <p className='blog-page-para'>These professionals are very important to not only make a good structure but also to help people to turn their dreams into reality.</p>
                        <img src={arapsana} alt="ArchitectApsana" className="blog-page-author-img pt-3"/>
                        <h1 className='blog-title pt-3'> Architect Apsana</h1>
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
export default Blog8e;
