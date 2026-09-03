import React from 'react';
const interior = '/logo.jpeg';
const blog66 = '/blog-images/cookscape-blog-66.webp';
const arbagya = '/architects/Cookscape-Architect-Bagya-Lakshmi.webp';
const Blog7g = () => {
        return (
                <>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
                </div>
            <div className='container-fluid aboutus'>
                <div className='container p-5'>
                  <h1 className='blog-page-title pt-3'>IDEAS TO SEPARATE LIVING AND DINING</h1>
                  <img src={blog66} alt="cookscape-living-ideas" className="img-fluid pt-3"/>
                  <p className='blog-page-para'>Living and dining are two spaces mostly combined together but serve different functions. Separating them both without an enclosed barrier has the challenge to who designs it. Here comes the Home Interior architect plays a vital role with immense design ideas which helps one to find a better solution for it. When comes to authentic tradition Indian houses there are different type of separations like Naalu Kattu , Ettu Kattu, etc., where the space itself separates the function and serves its purpose. But nowadays due to change in culture, increase in population and demand in shelters; houses are packed into a small region where every spaces and every function  have  to  be  designed.  The  organization,  Arranging  of</p>
                  <p className='blog-page-para'> furniture, placing of elements, filling up of spaces all together in different manner helps to solve this issue. We can point out something that can easily help us to separate Living and Kitchen while doing best home interiors.</p>
                  <p className='blog-page-para'> • Perplexing Wall dividers can be place in-between Living and Dining.</p>
                  <p className='blog-page-para'> • Special lighting for Separating Living and Dining.person is going to maintain the product (Keeping in mind the owner should not be in loss).</p>
                  <p className='blog-page-para'> • Think using of the elements for both living and dining that serves they both functions like using of TV Unit, Showcases, Sofas, Armed chaired., in the place of Living and Dining table, Crockery in the place of Dining behind the sofas with respect to the circulation.</p>
                  <p className='blog-page-para'> • Choosing of different wall painting and wall decors that separate them both.</p>
                  <p className='blog-page-para'> • Wooden Panels or Screen between Dining and Living.</p>
                  <p className='blog-page-para'> • Showing differences in the Ceiling in terms of height or decoration.</p>
                  <p className='blog-page-para'> • Keeping in floors neat and by using dividers or hybrid materials to demarcate living from dining.</p>
                  <p className='blog-page-para'> • Beyond all we can place a direct piece of furniture with itself separates in the same time we get an addition functional space for storage too.</p>
                  <img src={arbagya} alt="Architect-Bagya-Lakshmi" className="blog-page-author-img pt-3"/>
                  <h1 className='blog-title pt-3'> Architect Bagya Lakshmi</h1>
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
export default Blog7g;
