import React from 'react';
import './Agenda.css';


export default function Agenda() {
  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Event Agenda</h1>

        <div className='transparent-block'>
          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Monday, June 27, 2022 (Training Workshops)</div>
            <div className='transparent-block-text'>Early Arrivals (throughout the Day)</div>
            <div className='transparent-block-text'>Loco Moco Security Conference Registration Desk Open for Check in</div>
            <div className='transparent-block-text'>2 Training Workshops</div>
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Tuesday, June 28, 2022 (Training Workshops)</div>
            <div className='transparent-block-text'>Loco Moco Security Conference Registration Desk Open for Check in and sponsorship set up</div>
            <div className='transparent-block-text'>2 Training Workshops</div>
            <div className='transparent-block-text'>Main Attendee Arrivals (throughout the day)</div>
            <div className='transparent-block-text'>Welcome Reception (at hotel)</div>
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Wednesday, June 29, 2022 (Conference)</div>
            <div className='transparent-block-text'>Continental Breakfast</div>
            <div className='transparent-block-text'>Hospitality Desk / Registration</div>
            <div className='transparent-block-text'>General Session (mid-morning – afternoon)</div>
            <div className='transparent-block-text'>AM/PM Coffee Break</div>
            <div className='transparent-block-text'>Lunch</div>
            <div className='transparent-block-text'>Group Offsite Experience</div>
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>Thursday, June 30, 2022 (Conference)</div>
            <div className='transparent-block-text'>Continental Breakfast</div>
            <div className='transparent-block-text'>General Session</div>
            <div className='transparent-block-text'>AM/PM Coffee Break</div>
            <div className='transparent-block-text'>Lunch</div>
            <div className='transparent-block-text'>Conference Conclusion</div>
          </div>

        </div>

      </div>
    
    </div>

  );
}