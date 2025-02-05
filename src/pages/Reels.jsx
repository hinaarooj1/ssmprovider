import React, { useEffect, useRef, useState } from 'react';
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

const PackageCard = ({ title, likes, oldPrice, newPrice, availablePackages, isBestSeller }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addPackage, updateCheckoutData } = useCheckout();
  const handleOpenModal = () => {
    setIsModalVisible(true);
    addPackage({
      title, likes, originalPrice: oldPrice, discountedPrice: newPrice, availablePackages


    });

    updateCheckoutData("selected", "reel views")
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set to midnight
    const difference = midnight - now;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="pacote mx-auto bg-white gap-4 !w-[240px] !h-min min-w-fit min-h-[450px]">

        {isBestSeller && <span className="sell" style={{ backgroundColor: "#00bf63" }}>Mais Vendido</span>}
        <img src="../eng.gif" className="h-10 mt-3 rounded-full" alt="promocao" />
        <div className="max-w-full w-full text-center z-10 px-3">
          <div className="title-rounded">
            <h3 className="text-lg font-extrabold text-white">{title}</h3>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="heading-title">
            {likes} <br /><span className="text-lg">Visualizações para Reels</span>
          </h1>
          <div className="rounded-[10px] rotate-0 bg-[#FF0000] px-4 py-2">
            <p className="text-white text-base font-medium text-center">
              Oferta acaba em: {timeLeft.hours.toString().padStart(2, "0")}:
              {timeLeft.minutes.toString().padStart(2, "0")}:
              {timeLeft.seconds.toString().padStart(2, "0")}
            </p>
          </div>
        </div>
        <div className="w-full flex-col flex items-center gap-2">
          <div className="divider"></div>
          <div className="flex items-end gap-2 h-min">
            <h2 className="text-red text-base font-semibold line-through mb-[7px]">R${oldPrice}</h2>
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

const Reels = () => {
  const iframeRef = useRef();

  useEffect(() => {
    const loadVimeoScript = () => {
      if (!document.querySelector("script[src='https://player.vimeo.com/api/player.js']")) {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    loadVimeoScript();
  }, []);

  return (
    <>
      <Header />
      <Link to="/" className="flex items-center fixed text-white text-sm font-medium top-20 left-[20px] z-20 px-4 py-2 mt-2 back !w-fit h-min"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4999 12H3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>Back to home</Link>
      {/* video */}
      <div className="this-vio">

        <div className="video-js vjs-16-9 !w-full vjs-big-play-centered vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v8 vjs-user-active vjs_video_554-dimensions" id="vjs_video_554">
          <iframe className="this-ifrm"
            ref={iframeRef}
            src="https://player.vimeo.com/video/1053215858?byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Video vendas você mais engajado"
          ></iframe>
          {/* <div className="vjs-poster">
          <picture className="vjs-poster">
            <img src="../thumbnailMain.jpg" alt="Video Thumbnail" />
          </picture>
        </div> */}
        </div>

      </div>
      {/* video */}
      <div className="w-full poti-17 lg:px-10 pt-28 grid grid-flow-cols grid-cols-1 lg:grid-cols-2 gap-y-8 justify-center items-end">
        <PackageCard
          title="Pacote Basico"
          likes="1.000"
          oldPrice="19,90"
          newPrice="9,90"
          availablePackages=""
        />
        <PackageCard
          title="Pacote Iniciante"
          likes="5.000"
          oldPrice="39,99"
          newPrice="19,90"
          availablePackages=""
        />
        <PackageCard
          title="Pacote Premium"
          likes="10.000"
          isBestSeller={true}
          oldPrice="74,90"
          newPrice="39,90"
          availablePackages=""
        />
        <PackageCard
          title="Pacote Profissional"
          likes="50.000"
          oldPrice="149,90"
          newPrice="79,90"
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

export default Reels;

