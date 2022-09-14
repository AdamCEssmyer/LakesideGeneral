import React from 'react';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';


export default function App(){
  return(
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <AboutUs />
      <ContactUs />
      <Home />
    </main>
  );
}