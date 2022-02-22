import React from 'react';
import './Sponsor.css';


export default function Sponsor() {
  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Sponsorship</h1>

        <div className='transparent-block'>
          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Interested in sponsoring Loco Moco Product Security Conference?</div>
            <div className='transparent-block-text'>We understand your products and services play an important part in the cyber security landscape and we cannot put this conference on without your help.  Get your name and product in front of hundreds of security professionals and decision makes by sponsoring Loco Moco Product Security Conference! While we do appreciate our sponsors, please understand that LocoMocoSec is first and foremost for our attendees so we can only accept sponsors who have their best interests in mind.</div>
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Sponsorships are now available!</div>
            <div className='transparent-block-text'>For details, sponsorship options, and more, please contact <a href='mailto:sponsors@locomocosec.com?Subject=Sponsorship' target='_top'>sponsors@locomocosec.com</a>.</div>
          </div>

        </div>

      </div>
    
    </div>

  );
}