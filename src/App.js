import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home/Home';
import Venue from './pages/Venue/Venue';
import Sponsor from './pages/Sponsor/Sponsor';
import About from './pages/About/About';

// import components
import NavBar2 from './components/NavBar/NavBar';

// import css
import './App.css';


function App() {
  return (
    <>
      <NavBar2 />
      <div className='app'>
        <div className='gradient-overlay'></div>
        

        <div className='content'>

            <div className='container'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/sponsors' element={<Sponsor/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/venue' element={<Venue/>} />
                </Routes>
              </BrowserRouter>

            </div>

          </div>
      </div>
    </>

  );
}

export default App;
