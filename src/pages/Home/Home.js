import React from 'react';
import './Home.css';

// import components
import PalmButton from '../../components/PalmButton/PalmButton';

// import assets
import logo from '../../static/logos/loco-moco-large-removebg-preview.png';
import pig from '../../static/icons/pig.png';
import sun from '../../static/icons/sun.png';
import training from '../../static/icons/training.png';
import speaker from '../../static/icons/speaker.png';

export default function Home() {
  return (
    <div className='home-page'>

      <div className='col left'>
      {/* <button id="eventbrite-widget-modal-trigger-268236260877" type="button">Buy Tickets</button> */}
        <img src={logo} className='hero-logo' alt='locomocosec logo'/>
        {/* <div id="mc_embed_signup" className='hero-logo'>
          <form action="https://locomocosec.us15.list-manage.com/subscribe/post?u=d5dd58a923aa2f50c0394612e&amp;id=c356e93d5c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <h2>Sign Up For Our Mailing List</h2>
              <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                <input type="text" name="b_d5dd58a923aa2f50c0394612e_c356e93d5c" tabindex="-1" value="" />
              </div>
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
              </div>
            </div>
        </form>
        </div> */}
      </div>

      <div className='col right'>
        <div className='sizzle-box'>
          <div className='sizzle-title'>Loco Moco</div>
          <div className='sizzle-sub-title'>The Premier Product Security Conference in Hawaiʻi</div>
          <div className='sizzle-text'>
            <p>
            Join us in the beautiful Waikīkī on Oʻahu, Hawaiʻi for the Loco Moco Product Security Conference.
              <div className='sub-button'>
                <div className='col left'>
                  <ul className='venue-bullets'>
                    <li><span className='venue-date'>June 27-28</span> · Training Workshops</li>
                    <li><span className='venue-date'>June 28</span> · Welcome Reception</li>
                    <li><span className='venue-date'>June 29-30</span> · Conference</li>
                  </ul>
                </div>
                <div id="mc_embed_signup" className='col right'>
                  <form action="https://locomocosec.us15.list-manage.com/subscribe/post?u=d5dd58a923aa2f50c0394612e&amp;id=c356e93d5c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                      {/* <h2>Sign Up For Our Mailing List</h2> */}
                      <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                        <input type="text" name="b_d5dd58a923aa2f50c0394612e_c356e93d5c" tabindex="-1" value="" />
                      </div>
                      <div className="clear">
                        <input type="submit" value="Subscribe to Mail List" name="subscribe" id="mc-embedded-subscribe" className="button sub-btn"/>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </p>

            <div className="sizzle-bullets">
                <a className='sizzle-bullet-item'
                  href='/agenda' rel="noopener noreferrer">
                  <div className='sizzle-icon'>
                    <img src={speaker} alt="speaker-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Top-Notch Speakers
                    </div>
                    <div className='sizzle-bullet-desc'>
                      We have some of the best product security speakers in the industry come to LocoMocoSec. In addition to the well known, who's who in the application security industry, our lineup also often has rising stars in the infosec space.
                    </div>
                  </div>
                </a>
                <a className='sizzle-bullet-item'
                  href='/training' rel="noopener noreferrer">
                  <div className='sizzle-icon'>
                    <img src={training} alt="training-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Professional Training Courses
                    </div>
                    <div className='sizzle-bullet-desc'>
                      Come early and get training. Each year we strive to offer exceptional training courses meant to further your knowledge in all facets of security - whether you're a beginner or a seasoned veteran. 
                    </div>
                  </div>
                </a>
                <a className='sizzle-bullet-item'
                  href='/sponsors' rel="noopener noreferrer">
                  <div className='sizzle-icon'>
                    <img src={pig} alt="hands-on-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Food
                    </div>
                    <div className='sizzle-bullet-desc'>
                      Each year we roll out the red carpet and provide excellent meals to feed hungry attendees. Come for the food, stay for the conversation and the company.
                    </div>
                  </div>
                </a>
                <a className='sizzle-bullet-item'
                  href='/venue' rel="noopener noreferrer">
                  <div className='sizzle-icon'>
                    <img src={sun} alt="competitions-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Sun
                    </div>
                    <div className='sizzle-bullet-desc'>
                      You aren't the only one who has a little cabin fever! After being stuck indoors for almost two years, what could be a better place to visit than the shores of Waikīkī?
                    </div>
                  </div>
                </a>
              </div>

          </div>
          <div className='sizzle-button-area'>
            <PalmButton wording='Register' class='eventbrite-widget-modal-trigger-268236260877' link='https://www.eventbrite.com/e/loco-moco-product-security-conference-tickets-268236260877'/>
          </div>
        </div>

      </div>

    </div>

  );
}
