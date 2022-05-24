import React from 'react';
import './Sponsor.css';

import twilio from '../../static/logos/sponsors/twilio.png';
import discernible from '../../static/logos/sponsors/discernible.png';
import google from '../../static/logos/sponsors/Google.png';
import leviathan from '../../static/logos/sponsors/Leviathan.png';
import microsoft from '../../static/logos/sponsors/Microsoft.png';
import scw from '../../static/logos/sponsors/SCW.png';
import rbs from '../../static/logos/sponsors/RiskBasedSecurity.png';
import brex from '../../static/logos/sponsors/brex.png';
import semgrep from '../../static/logos/sponsors/Semgrep.png';

export default function Sponsor() {
  let pdf = require('../../static/2022_SponsorshipPackages.pdf');

  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Sponsorship</h1>

        <div className='transparent-block'>
          {/* <div className='transparent-block-container'>
            <div className='transparent-block-title'>Interested in sponsoring Loco Moco Product Security Conference?</div>
            <div className='transparent-block-text'>We understand your products and services play an important part in the cyber security landscape and we cannot put this conference on without your help.  From our sponsored conference meals and snacks to the group offsite experience, LocoMocoSec looks for every opportunity to promote your brand while strengthening our attendee experience!</div>
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Reach out today.</div>
            <div className='transparent-block-text'>Get your name and product in front of hundreds of security professionals and decision makes by sponsoring Loco Moco Product Security Conference! While we do appreciate our sponsors, please understand that LocoMocoSec is first and foremost for our attendees so we can only accept sponsors who have their best interests in mind.</div>
          </div> */}

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Sponsorships are now available!</div>
            <div className='transparent-block-text'>Please contact us at <a href='mailto:sponsors@locomocosec.com?Subject=Sponsorship' target='_top'>sponsors@locomocosec.com</a> to discuss your strategic partnership with LocoMocoSec!</div>
          </div>

           <div className='transparent-block-container'>
            <div className='transparent-block-title'>Sponsorship Options</div>
            <div className='transparent-block-text'>Our sponsorship options are also available in <a href={pdf} rel='noopener noreferrer' download>pdf form</a>.</div>
          </div>
{/*
          <div className='transparent-block-container'>
            <div className='block-one'>
              <div className='block-one-title'>Video Recording Sponsorship <span className='block-availability'>(1 available)</span></div>
              <div className='block-one-subtitle'>Sponsor the conference video recording and production.</div>
              <div className='block-one-text'>
                <div className='block-one-cost'>$30,000</div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>Your logo will be shown as part of every conference recording. This includes a recording of every talk at the conference via YouTube.</li>
                  <li className='block-one-bullet'>Formal recognition during event opening and closing ceremonies.</li>
                  <li className='block-one-bullet'>2 complimentary conference passes for your team.</li>
                  <li className='block-one-bullet'>15% discount off of additional conference briefings passes and/or training courses.</li>
                  <li className='block-one-bullet'>Corporate logo and link to website on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Tweets and other announcements from @locomocosec thanking you for your sponsorship.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                  <li className='block-one-bullet'>Attendee list upon request.</li>
                </ul>
              </div>
            </div>
            <div className='block-one'>
              <div className='block-one-title'>Family Excursion Sponsorship <span className='block-availability'>(1 available)</span></div>
              <div className='block-one-text'>
                <div className='block-one-cost'>$25,000</div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>Branded private tour at the Honolulu Zoo for all conference attendees and their families in the evening of Wednesday, June 29, followed by access to the night’s annual <a href='https://www.honoluluzoo.org/wsit2021/' target='_blank' rel='noopener noreferrer'>Wildest Show in Town</a> concert performance.</li>
                  <li className='block-one-bullet'>Formal recognition during event opening and closing ceremonies.</li>
                  <li className='block-one-bullet'>2 complimentary conference passes.</li>
                  <li className='block-one-bullet'>15% discount for additional conference passes and training courses.</li>
                  <li className='block-one-bullet'>Logo on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Recognition from official @locomocosec Twitter account.</li>
                  <li className='block-one-bullet'>Attendee list upon request.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                </ul>
              </div>
            </div>
            <div className='block-one'>
              <div className='block-one-title'>Welcome Reception Sponsorship <span className='block-availability'>(1 available)</span></div>
              <div className='block-one-subtitle'>Sponsor the Welcome Reception Event for attendees and family.</div>
              <div className='block-one-text'>
                <div className='block-one-cost'>$20,000</div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>Special recognition at the reception including up to 10 minutes of time to speak to attendees.</li>
                  <li className='block-one-bullet'>Booth Space (2 x 6 ft. Table) inside talk track.</li>
                  <li className='block-one-bullet'>2 conference passes for your team.</li>
                  <li className='block-one-bullet'>A 10% discount off of additional conference briefings passes and/or training courses.</li>
                  <li className='block-one-bullet'>Corporate logo and link to website on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                  <li className='block-one-bullet'>Tweet and other announcements from @locomocosec thanking you for your sponsorship.</li>
                  <li className='block-one-bullet'>Attendee list upon request.</li>
                </ul>
              </div>
            </div>
            <div className='block-one'>
              <div className='block-one-title'>Speaker Dinner Sponsorships <span className='block-availability'>(2 available)</span></div>
              <div className='block-one-text'>
                <div className='block-one-cost'>$20,000</div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>Named sponsor for official conference speaker dinner.</li>
                  <li className='block-one-bullet'>Formal recognition during event opening and closing ceremonies.</li>
                  <li className='block-one-bullet'>Physical presence inside conference track (2 x 6 ft. table).</li>
                  <li className='block-one-bullet'>2 complimentary conference passes.</li>
                  <li className='block-one-bullet'>10% discount for additional conference passes and training courses.</li>
                  <li className='block-one-bullet'>Logo on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                  <li className='block-one-bullet'>Recognition from official @locomocosec Twitter account.</li>
                  <li className='block-one-bullet'>Attendee list upon request.</li>
                </ul>
              </div>
            </div>


            <div className='block-one'>
              <div className='block-one-title'>Lunch Sponsorships <span className='block-availability'>(4 available)</span></div>
              <div className='block-one-text'>
                <div className='block-one-cost'>
                  <span>$15,000 <div className='cost-subs'>on Training Days</div></span>
                  <span>$20,000 <div className='cost-subs'>on Conference Days</div></span>
                </div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>Special recognition during lunch including up to 10 minutes of time to speak to attendees on one day of the event.</li>
                  <li className='block-one-bullet'>Signage during lunch.</li>
                  <li className='block-one-bullet'>Booth Space (2 x 6 ft. Table) on conference days.</li>
                  <li className='block-one-bullet'>2 conference passes for your team.</li>
                  <li className='block-one-bullet'>A 10% discount off of additional conference briefings passes and/or training courses.</li>
                  <li className='block-one-bullet'>Corporate logo and link to website on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                  <li className='block-one-bullet'>Tweet from @locomocosec thanking you for your sponsorship.</li>
                  <li className='block-one-bullet'>Attendee list upon request.</li>
                </ul>
              </div>
            </div>


            <div className='block-one'>
              <div className='block-one-title'>Breakfast & Coffee Sponsorships <span className='block-availability'>(4 available)</span></div>
              <div className='block-one-subtitle'>Be the provider of sweet, sweet caffeine.</div>
              <div className='block-one-text'>
                <div className='block-one-cost'>
                  <span>$10,000 <div className='cost-subs'>on Training Days</div></span>
                  <span>$15,000 <div className='cost-subs'>on Conference Days</div></span>
                </div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>Your signage clearly indicating the sponsor of a continental breakfast and coffee.</li>
                  <li className='block-one-bullet'>Shared booth space (1/2 x 6 ft. Table) on conference days.</li>
                  <li className='block-one-bullet'>1 conference pass for your team.</li>
                  <li className='block-one-bullet'>A 10% discount off of additional conference briefings passes and/or training courses.</li>
                  <li className='block-one-bullet'>Corporate logo and link to website on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Tweets and other announcements from @locomocosec thanking you for your sponsorship.</li>
                  <li className='block-one-bullet'>Attendee list upon request.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                </ul>
              </div>
            </div>


            <div className='block-one'>
              <div className='block-one-title'>Daycare Sponsorships <span className='block-availability'>(1 remaining available)</span></div>
              <div className='block-one-text'>
                <div className='block-one-cost'>$7,500</div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>Multiple tweets from @locomocosec thanking you for your family-specific sponsorship.</li>
                  <li className='block-one-bullet'>Booth Space (1 x 6 ft. Table) on conference days.</li>
                  <li className='block-one-bullet'>1 conference pass for your team.</li>
                  <li className='block-one-bullet'>A 10% discount off of additional conference briefings passes and/or training courses.</li>
                  <li className='block-one-bullet'>Corporate logo and link to website on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                </ul>
              </div>
            </div>


            <div className='block-one'>
              <div className='block-one-title'>Diversity & Inclusion Sponsorships</div>
              <div className='block-one-subtitle'>Sponsor travel and admission to members of underrepresented groups in the technical community. Residual funds will be donated to a local charity.</div>
              <div className='block-one-subtitle'>Your sponsorship will cover the hotel, airfare, training, and conference admission for individuals from underrepresented or marginalized backgrounds.</div>
              <div className='block-one-text'>
                <div className='block-one-cost'>
                  <span>$5,000 <div className='cost-subs'>per grantee</div></span></div>
                <ul className='block-one-bullets'>
                  <li className='block-one-bullet'>1 conference pass for your team per 10k sponsored.</li>
                  <li className='block-one-bullet'>A 10% discount off conference briefings passes and/or training courses.</li>
                  <li className='block-one-bullet'>Corporate logo and link to website on the locomocosec.com sponsors page.</li>
                  <li className='block-one-bullet'>Tweets and other announcements from @locomocosec thanking you for your sponsorship.</li>
                  <li className='block-one-bullet'>Opportunity to contribute a branded item to conference swag bag.</li>
                </ul>
              </div>
            </div>


          </div> */}

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Current Sponsors</div>
            <div className='transparent-block-text'>Thank you so much to our sponsors! LocoMocoSec wouldn't happen without them.</div>
          </div>
          <div className='transparent-block-container'>
            <a href='https://www.brex.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={brex} alt='Brex' className='block-logo-img'/>
            </a>

            <a href='https://discernibleinc.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={discernible} alt='Discernible' className='block-logo-img'/>
            </a>

            <a href='https://www.google.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={google} alt='Google' className='block-logo-img'/>
            </a>

            <a href='https://www.leviathansecurity.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={leviathan} alt='Leviathan' className='block-logo-img'/>
            </a>

            <a href='https://www.microsoft.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={microsoft} alt='Microsoft' className='block-logo-img'/>
            </a>

            <a href='https://www.riskbasedsecurity.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={rbs} alt='Risk Based Security' className='block-logo-img'/>
            </a>

            <a href='https://www.securecodewarrior.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={scw} alt='Secure Code Warrior' className='block-logo-img'/>
            </a>

            <a href='https://semgrep.dev/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={semgrep} alt='Semgrep' className='block-logo-img'/>
            </a>

            <a href='https://www.twilio.com/'
              target='_blank' rel='noopener noreferrer'
              className='block-logo'>
              <img src={twilio} alt='Twilio' className='block-logo-img'/>
            </a>

          </div>


        </div>

      </div>
    
    </div>

  );
}