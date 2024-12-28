import React from 'react';
import TiktokPackage from '../components/TiktokPackage';
import Header from '../components/Header';
import PacotesSection from '../components/PacotesSection';
import Iphone from '../components/Iphone';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const packages = [
  {
    title: "Pacote Basico",
    followers: 350,
    bonusLikes: 200,
    originalPrice: 14.31,
    discountedPrice: 9.21,
    availablePackages: 0
  },
  {
    title: "Pacote Simple",
    followers: 600,
    bonusLikes: 300,
    originalPrice: 23.96,
    discountedPrice: 13.86,
    availablePackages: 0
  },
  {
    title: "Pacote Iniciante",
    followers: 1200,
    bonusLikes: 500,
    originalPrice: 36.92,
    discountedPrice: 27.82,
    availablePackages: 0
  },
  {
    title: "Pacote Iniciante Standard",
    followers: 2500,
    bonusLikes: 1200,
    originalPrice: 66.41,
    discountedPrice: 46.41,
    availablePackages: 0
  },
  {
    title: "Pacote Iniciante Plus",
    followers: 3500,
    bonusLikes: 1800,
    originalPrice: 91.01,
    discountedPrice: 63.01,
    availablePackages: 0,
    isBestSeller: true
  },
  {
    title: "Pacote Iniciante Premium",
    followers: 5000,
    bonusLikes: 2200,
    originalPrice: 113.02,
    discountedPrice: 82.92,
    availablePackages: 0
  },
  {
    title: "Pacote Gold Premium",
    followers: 50000,
    bonusLikes: 14000,
    originalPrice: 680.20,
    discountedPrice: 630.10,
    availablePackages: 5,
    isGold: true
  },
  {
    title: "Pacote Influencer",
    followers: 200000,
    bonusLikes: 39000,
    originalPrice: 2950.80,
    discountedPrice: 2716.70,
    availablePackages: 0,
    isGold: true
  },
  {
    title: "Pacote Gold Premium",
    followers: 100000,
    bonusLikes: 24000,
    originalPrice: 1460.40,
    discountedPrice: 1359.30,
    availablePackages: 0,
    isGold: true
  },
  {
    title: "Pacote Intermediário",
    followers: 7500,
    bonusLikes: 4500,
    originalPrice: 119.43,
    discountedPrice: 107.43,
    availablePackages: 0
  },
  {
    title: "Pacote Intermediário Diamond",
    followers: 10000,
    bonusLikes: 7500,
    originalPrice: 205.94,
    discountedPrice: 165.94,
    availablePackages: 0
  },
  {
    title: "Pacote Profissional +",
    followers: 20000,
    bonusLikes: 10000,
    originalPrice: 361.08,
    discountedPrice: 301.08,
    availablePackages: 0
  }
];

const TikTokFollower = () => {
  return (
    <>
    <Header/>
    <div className="w-full relative w-screen overflow-hidden pb-5">
      <div className="w-full lg:px-28 pt-28 grid grid grid-flow-cols grid-cols-1 lg:grid-cols-3 gap-y-8 justify-center items-end">
        {packages.map((pkg, index) => (
          <TiktokPackage key={index} {...pkg} />
        ))}
      </div>
      <div className="-z-10 lg:-left-[50px] -top-10 2xl:-left-[5vw] elipse303 hidden lg:block overflow-hidden"></div>
      <div className="-z-10 elipse304 lg:top-[-500px] 2xl:top-[-400px] 2xl:right-0 lg:-right-[300px] -right-[600px] top-[200px] overflow-hidden"></div>
      <div className="-z-10 elipse304 lg:bottom-0 2xl: 2xl:right-0 lg:right-[300px] -right-[600px] overflow-hidden"></div>
    </div>
    <PacotesSection/>
    <Iphone/>
    <Footer/>
    </>
  );
};

export default TikTokFollower;

