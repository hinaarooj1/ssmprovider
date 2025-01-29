import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/pacote.css';
import Header from '../components/Header';
import PacotesSection from '../components/PacotesSection';
import Iphone from '../components/Iphone';
import Footer from '../components/Footer';
import { useCheckout } from '../context/CheckoutContext';
import ModalComponent from '../components/model';
import BottomBar from '../components/bottomBar';

const CheckIcon = () => (
  <svg aria-hidden="true" className="fill-[#1E1127] w-4 h-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg>
);

const PackageCard = ({ title, likes, oldPrice, newPrice, availablePackages }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addPackage, updateCheckoutData } = useCheckout();
  const handleOpenModal = () => {
    setIsModalVisible(true);
    addPackage({
      title, likes, originalPrice: oldPrice, discountedPrice: newPrice, availablePackages


    });

    updateCheckoutData("selected", "story views")
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="pacote mx-auto bg-white gap-4 !w-[240px] !h-min min-w-fit min-h-[450px]">
        <img src="../eng.gif" className="h-10 mt-3 rounded-full" alt="promocao" />
        <div className="max-w-full w-full text-center z-10 px-3">
          <div className="title-rounded">
            <h3 className="text-lg font-extrabold text-white">{title}</h3>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="heading-title">
            {likes} <br /><span className="text-lg">Visualizações para Storys</span>
          </h1>
        </div>
        <div className="w-full flex-col flex items-center gap-2">
          <div className="divider"></div>
          <div className="flex items-end gap-2 h-min">
            <h2 className="text-[#999999] text-base font-semibold line-through mb-[7px]">R${oldPrice}</h2>
            <h2 className="text-[#1E1127] text-3xl font-bold">R${newPrice}</h2>
          </div>
        </div>
        <div>
          <ul>
            <li className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-lg outfit font-semibold text-[#525252]">100% Seguro e Confidencial</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-lg outfit font-semibold text-[#525252]">Não precisamos da sua senha</span>
            </li>
            <li className="text-[#FF0000] d-flex">
              <span className="mdi mdi-cart-arrow-right text-lg text-black"></span>
              <span className="text-[#525252] outfit font-semibold ml-1.5">Pacotes disponíveis: </span>
              <b className="text-[#FF0000] font-bold text-lg outfit">{availablePackages}</b>
            </li>
          </ul>
        </div>
        <button className="button-buy" onClick={handleOpenModal}>Comprar Agora</button>
      </div>
      {isModalVisible && (
        <ModalComponent onClose={handleCloseModal} />
      )}
    </>
  )
};

const Views = () => {
  return (
    <>
      <Header />
      <Link to="/" className="flex items-center fixed text-white text-sm font-medium top-20 left-[20px] z-20 px-4 py-2 mt-2 back !w-fit h-min"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4999 12H3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>Back to home</Link>
      <div className="w-full lg:px-10 pt-28 grid grid-flow-cols grid-cols-1 lg:grid-cols-2 gap-y-8 justify-center items-end">
        <PackageCard
          title="Pacote Basico"
          likes="1000"
          oldPrice="19.00"
          newPrice="9.90"
          availablePackages=""
        />
        <PackageCard
          title="Pacote Iniciante"
          likes="5.000"
          oldPrice="39.90"
          newPrice="19.90"
          availablePackages=""
        />
        <PackageCard
          title="Pacote Premium"
          likes="10.000"
          oldPrice="99.90"
          newPrice="49.90"
          availablePackages=""
        />
        <PackageCard
          title="Pacote Profissional"
          likes="100.000"
          oldPrice="550.00"
          newPrice="189.90"
          availablePackages=""
        />
      </div>
      <br />
      <br />
      <PacotesSection />
      <Iphone />
      <Footer />
      <BottomBar />
    </>
  );
};

export default Views;

