import React from 'react';
import './Speakers.css';

// import speakers
import alex from '../../static/speakers/alex_smolen.png';
import arshan from '../../static/speakers/arshan_dabirsiaghi.jpeg';
import art from '../../static/speakers/art_maddalena.jpeg';
import chenoa from '../../static/speakers/keynotes/Chenoa.jpeg';
import clint from '../../static/speakers/clint_gibler.jpeg';
import coleen from '../../static/speakers/keynotes/coleen.png';
import colleen from '../../static/speakers/colleen_dai.png';
import dino from '../../static/speakers/keynotes/dino.webp';
import jake from '../../static/speakers/jake_mertz.jpeg';
import jaroslav from '../../static/speakers/jaroslav_lobacevski.jpeg';
import jeremiah from '../../static/speakers/keynotes/jeremiah_grossman.jpeg';
import jim from '../../static/speakers/keynotes/jim.jpeg';
import joe from '../../static/speakers/joe_rozner.jpeg';
import kelley from '../../static/speakers/kelley_robinson.jpeg';
import kym from '../../static/speakers/keynotes/kym.png';
import martin from '../../static/speakers/martin_georgiev.jpeg';
import nathanial from '../../static/speakers/nathanial_lattimer.jpeg';
import nishchala from '../../static/speakers/nishchala_tangirala.jpeg';
import patrick from '../../static/speakers/patrick_thomas.jpeg';
import philippe from '../../static/speakers/philippe_de_ryck.jpeg';
import serge from '../../static/speakers/serge_pastukhov.jpeg';
import travis from '../../static/speakers/travis_mcpeak.jpeg';

export default function Speakers() {
  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Speakers</h1>

        <div className='speakers'>
          <div className='speaker-bubbles'>
              <div className='speaker-bubble'>
                <img src={alex} className='speaker-image' alt='Alex Smolen'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Alex Smolen</div>
                  <div className='speaker-title'>Director of Security</div>
                  <div className='speaker-company'>LaunchDarkly</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={arshan} className='speaker-image' alt='Arshan Dabirsiaghi'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Arshan Dabirsiaghi</div>
                  <div className='speaker-title'>Chief Scientist</div>
                  <div className='speaker-company'>Contrast Security</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={art} className='speaker-image' alt='Art Maddalena'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Art Maddalena</div>
                  <div className='speaker-title'>Lead of Forensics and Incident Response</div>
                  <div className='speaker-company'>Yahoo</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={chenoa} className='speaker-image' alt='Chenoa Farnsworth'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Chenoa Farnsworth</div>
                  <div className='speaker-title'>Managing Partner</div>
                  <div className='speaker-company'>Blue Startups</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={clint} className='speaker-image' alt='Clint Gibler'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Clint Gibler</div>
                  <div className='speaker-title'>Head of Security Research</div>
                  <div className='speaker-company'>r2c</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={coleen} className='speaker-image' alt='Coleen Coolidge'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Coleen Coolidge</div>
                  <div className='speaker-title'>CISO</div>
                  <div className='speaker-company'>Twilio</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={colleen} className='speaker-image' alt='Colleen Dai'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Colleen Dai</div>
                  <div className='speaker-title'>Security Researcher</div>
                  <div className='speaker-company'>r2c</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={dino} className='speaker-image' alt='Dino Dai Zovi'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Dino Dai Zovi</div>
                  <div className='speaker-title'>Head of Security</div>
                  <div className='speaker-company'>Cash App at Square</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={jake} className='speaker-image' alt='Jake Mertz'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Jake Mertz</div>
                  <div className='speaker-title'>Security Engineer</div>
                  <div className='speaker-company'>LaunchDarkly</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={jaroslav} className='speaker-image' alt='Jaroslav Lobacevski'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Jaroslav Lobacevski</div>
                  <div className='speaker-title'>Senior Security Researcher</div>
                  <div className='speaker-company'>GitHub</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={jeremiah} className='speaker-image' alt='Jeremiah Grossman'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Jeremiah Grossman</div>
                  <div className='speaker-title'>CEO</div>
                  <div className='speaker-company'>Bitdiscovery</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={jim} className='speaker-image' alt='Jim Manico'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Jim Manico</div>
                  <div className='speaker-title'>Founder and CEO</div>
                  <div className='speaker-company'>Manicode Security</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={joe} className='speaker-image' alt='Joe Rozner'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Joe Rozner</div>
                  <div className='speaker-title'>Sr. Manager Offensive Security</div>
                  <div className='speaker-company'>Yahoo</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={kelley} className='speaker-image' alt='Kelley Robinson'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Kelley Robinson</div>
                  <div className='speaker-title'>Developer Evangelist</div>
                  <div className='speaker-company'>Twilio</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={kym} className='speaker-image' alt='Kymberlee Price'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Kymberlee Price</div>
                  <div className='speaker-title'>Senior Director of Product Security</div>
                  <div className='speaker-company'>New Relic</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={martin} className='speaker-image' alt='Martin Georgiev'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Martin Georgiev</div>
                  <div className='speaker-title'>Product Security Engineering Manager</div>
                  <div className='speaker-company'>Uber</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={nathanial} className='speaker-image' alt='Nathanial Lattimer'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Nathanial Lattimer</div>
                  <div className='speaker-title'>Senior Security Engineer</div>
                  <div className='speaker-company'>Robinhood</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={nishchala} className='speaker-image' alt='Nishchala Tangirala'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Nishchala Tangirala</div>
                  <div className='speaker-title'>Security Engineer</div>
                  <div className='speaker-company'>Atlassian</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={patrick} className='speaker-image' alt='Patrick Thomas'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Patrick Thomas</div>
                  <div className='speaker-title'>Senior Security Partner</div>
                  <div className='speaker-company'>Netflix</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={philippe} className='speaker-image' alt='Philippe De Ryck'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Philippe De Ryck</div>
                  <div className='speaker-title'>Founder of Pragmatic Web Security</div>
                  <div className='speaker-company'>Google Developer Expert</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={serge} className='speaker-image' alt='Serge Pastukhov'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Serge Pastukhov</div>
                  <div className='speaker-title'>Security Engineer</div>
                  <div className='speaker-company'>Uber</div>
                </div>
              </div>
              <div className='speaker-bubble'>
                <img src={travis} className='speaker-image' alt='Travis McPeak'/>
                <div className='speaker-text-content'>
                  <div className='speaker-name'>Travis McPeak</div>
                  <div className='speaker-title'>Security Leader</div>
                  <div className='speaker-company'>Databricks</div>
                </div>
              </div>









          </div>

          </div>
        </div>

    
    </div>

  );
}