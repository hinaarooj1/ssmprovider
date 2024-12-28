import React from 'react';
import './pacote.css';


const CheckIcon = () => (
  <svg aria-hidden="true" className="fill-[#1E1127] w-4 h-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg>
);

const TiktokPackage = ({ 
  title, 
  followers, 
  bonusLikes, 
  originalPrice, 
  discountedPrice, 
  isGold = false,
  isBestSeller = false,
  availablePackages
}) => {
  const packageClass = isGold ? "pacote-gold mx-auto bg-[#25172e8f] text-white gap-4 undefined false animate-gold" : "pacote mx-auto bg-white gap-4 false min-h-[450px]";
  const titleClass = isGold ? "title-rounded-gold" : "title-rounded";
  const buttonClass = isGold ? "button-buy-gold" : "button-buy";
  const headingClass = isGold ? "heading-title !text-white" : "heading-title";
  const checkIconClass = isGold ? "fill-[#fff]" : "fill-[#ffffff]";

  return (
    <div className={packageClass}>
      {isBestSeller && <span className="sell">Mais Vendido</span>}
      <img src={isGold ? "../pacotes-gold.gif" : "../eng.gif"} className={isGold ? "h-8 mt-3" : "h-10 mt-3 rounded-full"} alt="promocao" />
      <div className="max-w-full w-full text-center z-10 px-3">
        <div className={titleClass}>
          <h3 className="text-xl font-extrabold text-white">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className={headingClass}>
          {followers.toLocaleString()} <br />
          <span className="text-lg">Seguidores TikTok</span>
        </h1>
        <div className="rounded-[10px] rotate-1 bg-[#FF0000] px-4 py-2">
          <p className="text-white text-base font-medium text-center">
            +{bonusLikes.toLocaleString()} Curtidas Bonus <br />
            <span className="font-semibold"> Somente Hoje</span>
          </p>
        </div>
      </div>
      <div className="w-full flex-col flex items-center gap-2">
        <div className={isGold ? "divider-gold" : "divider"}></div>
        <div className="flex items-end gap-2 h-min">
          <h2 className="text-[#999999] text-base font-semibold line-through mb-[7px]">
            R${originalPrice.toFixed(2)}
          </h2>
          <h2 className={isGold ? "text-white text-3xl font-bold" : "text-[#1E1127] text-3xl font-bold"}>
            R${discountedPrice.toFixed(2)}
          </h2>
        </div>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-2">
            <span><CheckIcon /></span>
            <span className={`text-${isGold ? 'sm' : 'lg'} outfit font-semibold text-[${isGold ? '#fff' : '#525252'}]`}>
              100% Seguro e Confidencial
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span><CheckIcon /></span>
            <span className={`text-${isGold ? 'sm' : 'lg'} outfit font-semibold text-[${isGold ? '#fff' : '#525252'}]`}>
              Não precisamos da sua senha
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span><CheckIcon /></span>
            <span className={`text-${isGold ? 'sm' : 'lg'} outfit font-semibold text-[${isGold ? '#fff' : '#525252'}]`}>
              Seguidores em 1 minuto na sua conta.
            </span>
          </li>
          <li className="text-[#FF0000] d-flex">
            <span className={`mdi mdi-cart-arrow-right text-lg text-${isGold ? 'white' : 'black'}`}></span>
            <span className={`text-[${isGold ? '#bebebe' : '#525252'}] outfit font-semibold ml-1.5`}>
              Pacotes disponíveis:{' '}
            </span>
            <b className="text-[#FF0000] font-bold text-lg outfit">{availablePackages}</b>
          </li>
        </ul>
      </div>
      <button className={buttonClass}>
        {isGold ? "COMPRAR AGORA" : "Comprar Agora"}
      </button>
    </div>
  );
};

export default TiktokPackage;

