import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home/Home';
import Venue from './pages/Venue/Venue';
import Sponsor from './pages/Sponsor/Sponsor';
import About from './pages/About/About';
import Training from './pages/Training/Training';
import Archives from './pages/Archives/Archives';
import Agenda from './pages/Agenda/Agenda';
import Safety from './pages/Safety/Safety';

// import components
import NavBar from './components/NavBar/NavBar';

// import assets
import logo from "./loco-moco-horizontal.png";
import './App.css';


function App() {
  var exampleCallback = function() {
    console.log('Order complete!');
  };

  window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '268236260877',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-268236260877',
    onOrderComplete: exampleCallback
  });


  const links = [{
    "href": "/",
    "label": "Home",
    "class": "nav-div-hover",
    "background": false,
  },
  {
      "id": "eventbrite-widget-modal-trigger-268236260877",
      "class": "nav-div-hover",
      "label": "Register",
      "background": false,
  },
  {
      "href": "/agenda",
      "label": "Agenda",
      "class": "nav-div-hover",
      "background": false,
  },
  {
      "href": "https://sessionize.com/locomocosec-2022/",
      "label": "CFP",
      "class": "nav-div-hover",
      "background": false,
  },
  {
      "href": "/venue",
      "label": "Venue",
      "class": "nav-div-hover",
      "background": false,
  },
  {
      "href": "/training",
      "label": "Training",
      "class": "nav-div-hover",
      "background": false,
  },
  {
      "href": "/sponsors",
      "label": "Sponsors",
      "class": "nav-div-hover",
      "background": false,
  },
  {
      "href": "/safety",
      "label": "Safety",
      "class": "nav-div-hover",
      "background": false,
  },
  {
      "href": "/about",
      "label": "About",
      "class": "nav-div-hover",
      "background": false,
  }]
  

  return (
    <>
      <NavBar logo={logo}
        links={links} 
        logoHref='/'
      />
      <div className='app'>
        <div className='gradient-overlay'></div>
        <div className='content'>
            <div className='container'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/sponsors' element={<Sponsor/>} />
                  <Route path='/agenda' element={<Agenda/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/venue' element={<Venue/>} />
                  <Route path='/training' element={<Training/>} />
                  <Route path='/archives' element={<Archives/>} />
                  <Route path='/safety' element={<Safety/>} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
      </div>
    </>

  );
}

export default App;
