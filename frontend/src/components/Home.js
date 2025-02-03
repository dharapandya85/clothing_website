import React from 'react';
import About from './About';
import Products from './Products';
//import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <About />
      <Products />
      
    </div>
  );
};

export default Home;
