import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import SliderPage1 from './components/SliderPage1';
import SliderPage2 from './components/SliderPage2';
import SliderPage3 from './components/SliderPage3';


const RouterFile = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='/slide1' element={<SliderPage1 />} />
          <Route path='/slide2' element={<SliderPage2 />} />
          <Route path='/slide3' element={<SliderPage3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterFile;
