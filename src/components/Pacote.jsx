import React, { useState } from "react";
import PropTypes from "prop-types";
import "./pacote.css";
import ModalComponent from "./model";
import './model.css';

const Pacote = ({
  title,
  followers,
  bonusLikes,
  originalPrice,
  discountedPrice,
  availablePackages,
  isBestSeller,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="pacote mx-auto bg-white gap-4 false min-h-[520px]">
      {isBestSeller && <span className="sell">Mais Vendido</span>}
      <img src="../eng.gif" className="h-10 mt-3 rounded-full" alt="promocao" />
      <div className="max-w-full w-full text-center z-10 px-3">
        <div className="title-rounded">
          <h3 className="text-xl font-extrabold text-white">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="heading-title">
          {followers.toLocaleString()} <br />
          <span className="text-lg">Seguidores Instagram</span>
        </h1>
        <div className="rounded-[10px] rotate-1 bg-[#FF0000] px-4 py-2">
          <p className="text-white text-base font-medium text-center">
            +{bonusLikes.toLocaleString()} Curtidas Bonus <br />
            <span className="font-semibold"> Somente Hoje</span>
          </p>
        </div>
      </div>
      <div className="w-full flex-col flex items-center gap-2">
        <div className="divider"></div>
        <div className="flex items-end gap-2 h-min">
          <h2 className="text-[#999999] text-base font-semibold line-through mb-[7px]">
            R${originalPrice.toFixed(2)}
          </h2>
          <h2 className="text-[#1E1127] text-3xl font-bold">
            R${discountedPrice.toFixed(2)}
          </h2>
        </div>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-2">
            <span>
              <svg
                aria-hidden="true"
                className="fill-[#1E1127] w-4 h-4"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
            </span>
            <span className="text-sm outfit font-semibold text-[#525252]">
              100% Seguro e Confidencial
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <svg
                aria-hidden="true"
                className="fill-[#1E1127] w-4 h-4"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
            </span>
            <span className="text-sm outfit font-semibold text-[#525252]">
              Não precisamos da sua senha
            </span>
          </li>
          <li className="text-[#FF0000] d-flex">
            <span className="mdi mdi-cart-arrow-right text-lg text-black"></span>
            <span className="text-[#525252] outfit font-semibold ml-1.5">
              Pacotes disponíveis:{" "}
            </span>
            <b className="text-[#FF0000] font-bold text-lg outfit">
              {availablePackages}
            </b>
          </li>
        </ul>
      </div>
      <button className="button-buy" onClick={handleOpenModal}>
        Comprar Agora
      </button>

      {isModalVisible && (
        <ModalComponent onClose={handleCloseModal} />
        )}
    </div>
  );
};

Pacote.propTypes = {
  title: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  bonusLikes: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  availablePackages: PropTypes.number.isRequired,
  isBestSeller: PropTypes.bool,
};

Pacote.defaultProps = {
  isBestSeller: false,
};

export default Pacote;
