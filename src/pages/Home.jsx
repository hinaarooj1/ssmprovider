import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MainCards from '../components/MainCards';
import CardInfo from '../components/CardInfo';
import PacotesSection from '../components/PacotesSection';
import Iphone from '../components/Iphone';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';


function Home() {
  return (
  	<>
  	<Header/>
  	<Banner/>
    <MainCards/>
    <CardInfo/>
    <PacotesSection/>
    <Iphone/>
    <FAQSection/>
    <Footer/>
    </>
  );
}

export default Home;
