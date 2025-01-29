import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pacote from '../components/Pacote';
import Header from '../components/Header';
import PacotesSection from '../components/PacotesSection';
import Iphone from '../components/Iphone';
import Footer from '../components/Footer';
import BottomBar from '../components/bottomBar';


const Followers = () => {
  const packages = [
    {
      title: "Pacote Iniciante",
      followers: 100,
      bonusLikes: 200,
      originalPrice: "19,00",
      discountedPrice: "9,90",
      availablePackages: 33
    },
    {
      title: "Pacote Iniciante Plus",
      followers: 600,
      bonusLikes: 300,
      originalPrice: "38,00",
      discountedPrice: "29,90",
      availablePackages: 13
    },
    {
      title: "Pacote Intermediario",
      followers: 3000,
      bonusLikes: 3000,
      originalPrice: "200,00",
      discountedPrice: "97,90",
      availablePackages: 6
    },
    {
      title: "Pacote Premium",
      followers: 5000,
      bonusLikes: 5000,
      originalPrice: "250,00",
      discountedPrice: "129,90",
      availablePackages: 14
    },
    {
      title: "Pacote Profissional",
      followers: 10000,
      bonusLikes: 10000,
      originalPrice: "500,00",
      discountedPrice: "197,00",
      availablePackages: 10
    },
    {
      title: "Pacote Gold",
      followers: 20000,
      bonusLikes: 20000,
      originalPrice: "1000,00",
      discountedPrice: "347,00",
      availablePackages: 10
    },
    {
      title: "Pacote Profissional",
      followers: 50000,
      bonusLikes: 50000,
      originalPrice: "1900,94",
      discountedPrice: "889,90",
      availablePackages: 5,
      isBestSeller: true
    },
    {
      title: "Pacote Profissional",
      followers: 100000,
      bonusLikes: 100000,
      originalPrice: "3000,00",
      discountedPrice: "1500,00",
      availablePackages: 4
    }
  ];

  return (
    <>
      <a href="/" className="flex items-center fixed text-white text-sm font-medium top-20 left-[20px] z-20 px-4 py-2 mt-2 back !w-fit h-min"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4999 12H3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>Back to home</a>
      <Header />
      <div className="pb-5 w-full lg:px-28 pt-28 grid grid grid-flow-cols grid-cols-1 lg:grid-cols-3 gap-y-8 justify-center items-end">
        {packages.map((pkg, index) => (
          <Pacote key={index} {...pkg} />
        ))}
      </div>
      <PacotesSection />
      <Iphone />
      <Footer />
      <BottomBar />
    </>
  );
};

export default Followers;

