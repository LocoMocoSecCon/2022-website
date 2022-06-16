import React, { useEffect } from 'react';
import keynotes from '../../content/keynotes';
import speakers from '../../content/speakers';
import './Agenda.css';

export default function Agenda() {

  let speakerList = [];

  speakers.forEach(obj => {
    obj.speaker.forEach(speaker => {
      speakerList.push(speaker);
    });
  });


  useEffect(() => {
    const agenda = document.getElementsByClassName('sessionize-loader')[0];
    console.log(agenda);
    const agendaContainer = document.getElementsByClassName('agenda-session')[0];
    setTimeout(()=>{
      agendaContainer.appendChild(agenda);

    }, 1000);
  }, []);


  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Event Agenda</h1>

        <div className='transparent-block'>
          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Monday, June 27, 2022</div>
            <div className='agenda-day-header'>Training Workshops</div>
            <li className='transparent-block-text'>Early Arrivals (throughout the Day)</li>
            <li className='transparent-block-text'>Hospitality / Registration Desk Open for Check in</li>
            <li className='transparent-block-text'>3 Training Workshops</li>
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Tuesday, June 28, 2022</div>
            <div className='agenda-day-header'>Training Workshops</div>
            <li className='transparent-block-text'>Hospitality / Registration Desk Open for Check in and sponsorship set up</li>
            <li className='transparent-block-text'>3 Training Workshops</li>
            <li className='transparent-block-text'>Main Attendee Arrivals (throughout the day)</li>
            <li className='transparent-block-text'>Welcome Reception (at hotel)</li>
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Wednesday, June 29, 2022</div> 
            <div className='agenda-day-header'>Conference</div>
            <li className='transparent-block-text'>Continental Breakfast and Coffee/ Tea Station</li>
            <li className='transparent-block-text'>Hospitality / Registration Desk</li>
            <li className='transparent-block-text'>General Session</li>
            <li className='transparent-block-text'>Lunch</li>
            {/* <li className='transparent-block-text'>Group Offsite Experience</li> */}
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Thursday, June 30, 2022</div>
            <div className='agenda-day-header'>Conference</div>
            <li className='transparent-block-text'>Continental Breakfast and Coffee/ Tea Station</li>
            <li className='transparent-block-text'>Hospitality / Registration Desk</li>
            <li className='transparent-block-text'>General Session</li>
            <li className='transparent-block-text'>Lunch</li>
            <li className='transparent-block-text'>Conference Conclusion</li>
          </div>

          <div className='agenda-session'>


          
          
          
          
          
          
          
          </div>

        </div>

      </div>
    
    </div>

  );
}



