import React from 'react';
const interior = '/logo.jpeg';
const blog14 = '/blog-images/cookscape-blog-14.webp';
const blog14a = '/blog-images/cookscape-blog-14a.webp';
const arvarshini = '/architects/Cookscape--Architect-varshini.webp';
const Blog2d = () => {
return (
<>
<div className="container-fluid services-breadcrumb">
                    <h3 className="cookscape-services-title">Cookscape Blog</h3>
</div>
<div className='container-fluid aboutus'>
                  <div className='container p-5'>
                      <h1 className='blog-page-title pt-3'>10 Brilliant Ways to Brighten Your Dark Kitchen & Living room!</h1>
                      <img src={blog14} alt="cookscape-dark=kitchen-ideas" className="img-fluid pt-3"/>
                      <p className='blog-page-para'>In order to brighten a dark living room certain small interventions can go a long way. If the Living room is large in area with small windows or widely spaced windows, or a small living with small windows or no windows at all, then there will be a problem of ventilation. </p>
                      <p className='blog-page-para'>So here are some tips to make a Dark Living Room bright: </p>
                      <h2 className='blog-page-title-2 pt-3'>1. Strategic Placement of Windows:</h2>
                      <p className='blog-page-para'>It’s one of the oldest and most effective advice to incorporate mirrors into a space near light sources to make the room look larger and to lighten up a bright room. To  amplify  the  effect of a </p>
                      <p className='blog-page-para'>Window place a huge one near a light source like a floor lamp etc., which will definitely reflect the light from the lamp and brighten the room.</p>
                      <h2 className='blog-page-title-2 pt-3'>2. Usage of Artificial and ambient light sources:</h2>
                      <p className='blog-page-para'>If you want to increase the ambient light to liven up the room then simple perform any of these small interventions such as adding of fairy lights strings, few large candles, orb lights, or other ambient lights. These light will add a light touch of luminosity and also make the room feel lively at the same time will give a soothing and therapeutic effect to the space. </p>
                      <h2 className='blog-page-title-2 pt-3'>3. Lighter Colors or Transparent Furniture:</h2>
                      <p className='blog-page-para'>Sometimes we don’t pay attention to the kind of furniture we put in our living. We only focus on whether they complement each other or now but when we need to make a dark living bright we must also consider using light colors on the wall and transparent or light colored furniture. Hence, in order to brighten the room colors like walnut wood instead go with White or beige shades. </p>
                      <h2 className='blog-page-title-2 pt-3'>4. Floor should be covered with Light Colors:</h2>
                      <p className='blog-page-para'> Your living can be made brighter by applying light color carpets on the bare floors. This will soften the floor and also make it glow. This will especially hold true for dull spaces with dark floor boards.</p>
                      <img src={blog14a} alt="cookscape-dark=kitchen-ideas" className="img-fluid pt-3"/>
                      <h2 className='blog-page-title-2 pt-3'>5. Use White for Walls:</h2>
                      <p className='blog-page-para'>White is the only shade which reflects light to a great extent. Therefore if your dark living room walls are painted white it will reflect more light than absorbing it. Ornamentation can be done on the walls if white walls seem to be too monotonous. </p>
                      <h2 className='blog-page-title-2 pt-3'>6. Deep Clean of Windows:</h2>
                      <p className='blog-page-para'>Dirty window with smudged glasses can decrease the quality of light entering through them, thus making the space look darker. Hence regular cleaning of windows must be done to let the maximum amount of light into a dark living to brighten it up.</p>
                      <h2 className='blog-page-title-2 pt-3'>7. Opt for White or lighter shade curtains:</h2>
                      <p className='blog-page-para'>If a light curtain is used on windows it will help brighten the room. Either blackout or Drapes can be chosen just make sure to choose a lighter shade.</p>
                      <h2 className='blog-page-title-2 pt-3'>8. Minimalist, low to ground Furniture:</h2>
                      <p className='blog-page-para'> Voluminous and heavy furniture will only make a room look dark with it large shadows. Hence always opt for light weight furniture or go for low height ones. This will reduce the space requirement by furniture therefore increasing space and help in ventilation of the room.</p>
                      <h2 className='blog-page-title-2 pt-3'>9. No Wall Art overdo:</h2>
                      <p className='blog-page-para'> “Less is more” holds true when it comes to making a space look brighter so as less ornamentation on walls the more light can enter it. Therefore we must avoid putting up a lot of art work on the walls.</p>
                      <h2 className='blog-page-title-2 pt-3'>10. Light to be aimed at wall or ceiling:</h2>
                      <p className='blog-page-para'> Instead of letting the light scatter around the room aim lights towards walls or ceilings. This will throw light on these architectural features and make the room look larger than its actual size.</p>
                      <img src={arvarshini} alt="Architect-Varshini" className="blog-page-author-img pt-3"/>
                      <h1 className='blog-title pt-3'> Architect Varshini</h1>
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
export default Blog2d;
