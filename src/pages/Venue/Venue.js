import React from 'react';
import marriott from '../../static/icons/marriott.jpeg';
import './Venue.css';

// import components
import PalmButton from '../../components/PalmButton/PalmButton';

export default function Venue() {
  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Hotel & Location Information</h1>

        <div className='venue-hotel'>
          <div className='col left venue-block'>
            <a className='venue-hotel-info' 
              href='https://www.marriott.com/en-us/hotels/hnlmc-waikiki-beach-marriott-resort-and-spa/overview/'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='venue-hotel-info-left'>
                <img src={marriott} alt='marriott' className='venue-hotel-info-image' />
              </div>

              <div className='venue-hotel-info-right'>
                <div className='venue-hotel-title'>Waikīkī Beach Marriott Resort & Spa</div>
                <div className='venue-hotel-address'>2552 Kalakaua Ave, Honolulu, HI 96815</div>
                <div className='venue-hotel-phone'>(808) 922-6611</div>
              </div>
            </a>    
          
            <div className='transparent-block'>
              <div className='transparent-block-title'>Book Today!</div>

              <div className='transparent-block-sub-title'>We have a special Loco Moco Product Security Conference room block!</div>
              <div className='transparent-block-text'>The URL is <a href='/url' target='_blank' rel='noopener noreferrer'>URL</a>.</div>
              <div className='transparent-block-text'>When making phone reservations, please use the Hotel Code: <b>CODE</b> and the Group Code: <b>GROUP</b>.</div>


              <div className='sizzle-button-area'>
                <PalmButton wording='Reserve' link='link'/>
              </div>
            </div>

          
          </div>


        <div className='col right'>
          <div className='venue-hotel-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.9306816834373!2d-157.8222765!3d21.274211299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c007270cf4e263b%3A0x17efa11682def01b!2sWaikiki%20Beach%20Marriott%20Resort%20%26%20Spa!5e0!3m2!1sen!2sus!4v1645081446376!5m2!1sen!2sus" width="400" height="300" allowFullScreen="" loading="lazy"></iframe>
          </div>

        </div>
        </div>

      </div>


      {/* https://www.marriott.com/en-us/hotels/hnlmc-waikiki-beach-marriott-resort-and-spa/overview/ */}




    </div>

  );
}