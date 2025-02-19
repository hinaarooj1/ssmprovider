import React, { useState, useEffect } from "react";
import { useCheckout } from "../context/CheckoutContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ModalComponent = ({ onClose }) => {
  const [username, setusername] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);
  let navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const { updateCheckoutData } = useCheckout();
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleClose = () => {
    setIsModalVisible(false);
    onClose();  // Calling the onClose prop when closing the modal
  };
  const addUsername = () => {
    if (username === "") {
      toast.error("Por favor, digite o seu @usuario");
      return;
    }
    if (isChecked === false) {
      toast.error("Por favor, concorde com os termos de serviço.");
      return;
    }
    updateCheckoutData("username", username);
    navigate("/pay/checkout")
    setIsModalVisible(false);

    onClose();  // Calling the onClose prop when closing the modal
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalVisible]);

  return (
    <>
      <div className="fixed modall flex items-center justify-center top-0 left-0 w-screen h-full min-h-screen backdrop-blur-xl z-40">
        <div className="modal1 position-relative h-fit lg:pb-12 bg-purple-700 px-12 py-2 pt-8 lg:pt-12 flex-col flex rounded-lg">
          <img
            loading="lazy"
            alt="Seguidores"
            src="../ig-follow.svg"
            className="popup-icon"
          />
          <button className="close" onClick={handleClose}>
            ×
          </button>
          <div className="flex flex-col">
            <h1 className="text-white text-center text-xl lg:text-4xl font-extrabold">
              Vamos Começar!
            </h1>
            <div>
              <input
                type="text"
                autoCapitalize="none"
                autoComplete="off"
                placeholder="Digite o seu @usuario"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="input-username"
              />
            </div>
            <div className="mx-auto text-center">
              <span className="text-sm font-semibold text-red-200">
                Por favor, aceita os termos e condições.
              </span>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <label className="checkbox">
                <input checked={isChecked}
                  onChange={handleCheckboxChange} type="checkbox" className="checkbox__input" />
                <span className="checkbox__inner"></span>
              </label>
              <span className="text-white [&>a]:text-[#ffffffde] [&>a]:underline [&>a]:italic [&>a]:hover:text-[#ffffffc4]">
                Li e estou de acordo com os{" "}
                <a target="_blank" rel="noopener noreferrer" href="/terms-condic.pdf">
                  termos <br />
                  de compra
                </a>{" "}
                e de{" "}
                <a target="_blank" rel="noopener noreferrer" href="/terms-res.pdf">
                  responsabilidade
                </a>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl pagamento font-extrabold">Pagamento</h3>
            </div>
            <button onClick={addUsername} className="payment">
              <img
                loading="lazy"
                src="../icon-billet.svg"
                width="32"
                height="32"
                alt="Boleto"
              />
              Pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
