import React, { useState, useEffect } from "react";
import './Checkout.css';
import Footer from '../components/Footer';

const Checkout = () => {
  const [time, setTime] = useState(5.00); // Starting time in seconds

  useEffect(() => {
    // Set an interval to decrease time every 10 milliseconds
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return (prevTime - 0.01).toFixed(2); // Decrease time by 0.01 seconds
        } else {
          clearInterval(interval); // Clear the interval when time reaches 0
          return "0.00";
        }
      });
    }, 1000); // Update every 10ms to simulate the countdown in 0.01 second intervals

    return () => clearInterval(interval); // Cleanup the interval when component is unmounted
  }, []);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden relative">
        <div className="bg-green-400 py-2 gap-2 w-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
            <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm-.548 15l-3.452-3.362 1.237-1.239 2.215 2.123 4.382-4.475 1.238 1.238-5.62 5.715z"></path>
          </svg>
          <span className="text-white font-extrabold text-base">COMPRA 100% SEGURA</span>
        </div>
        <div className="bg-red-700 text-yellow-300 py-2 px-4 gap-2 w-full items-center flex justify-center">
          <div className="flex gap-1 items-center">
            <span className="time text-lg font-semibold">{parseFloat(time).toFixed(2)}</span>
            <figure className="w-6">
              <img src="../wait.gif" alt="" className="w-full h-full" />
            </figure>
          </div>
          <span className="font-normal text-base">Estamos aguardando sua confirmação... Não perca essa oferta!</span>
        </div>
        <ul className="w-full flex h-1 bg-[#b5b5b58e]">
          <li className="w-1/3 h-full bg-green-400 ml-0 mr-auto"></li>
        </ul>
        <div className="flex lg:items-start mx-auto items-center gap-14 w-screen overflow-hidden flex-col lg:flex-row justify-center h-full">
          <div className="react-card-flip lg:mt-12 mt-10" style={{ zIndex: "auto" }}>
            <div className="react-card-flipper" style={{ height: "100%", perspective: "1000px", position: "relative", width: "100%" }}>
              <div className="react-card-front" style={{ backfaceVisibility: "hidden", height: "100%", position: "relative", transform: "rotateY(0deg)", transition: "0.25s", width: "100%", zIndex: 2 }}>
                <div className="lg:w-[550px] w-[90%] flex-col mx-auto rounded-2xl py-4 border-purple-400 border  px-4 items-center flex bg-[#f4f4f4] gap-2" id="form">
                  <h1 className="font-bold text-black text-xl">Finalizar Compra</h1>
                  <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
                    <div className="input-data name">
                      <span className="span-input">
                        <img src="../name.svg" />
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Nome..."
                          className="w-full input-field"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </span>
                    </div>
                    <div className="input-data email">
                      <span className="span-input">
                        <img src="../gmail.svg" />
                        <input
                          name="email"
                          type="email"
                          id="email"
                          placeholder="Email..."
                          className="w-full input-field"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </span>
                    </div>
                    <div className="input-data phone">
                      <span className="span-input">
                        <img src="../phone.svg" />
                        <input
                          name="phone"
                          type="text"
                          id="phone"
                          placeholder="Telefone..."
                          className="w-full input-field"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </span>
                    </div>
                    <div className="input-data instagram">
                      <span className="span-input">
                        <img src="../instagram.svg" />
                        <input
                          name="instagram"
                          type="text"
                          id="instagram"
                          placeholder="Link"
                          className="w-full input-field"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-bold text-2xl w-full hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 transition ease-in-out animation-finally mt-1"
                    >
                      Continuar
                    </button>
                  </form>
                </div>
              </div>
              <div className="react-card-back" style={{ backfaceVisibility: "hidden", height: "100%", position: "absolute", transform: "rotateY(-180deg)", transition: "0.25s", width: "100%", zIndex: 1 }}>
                <div className="lg:w-[550px] w-[90%] min-w-[80%] lg:min-w-[550px] mx-auto flex-col rounded-2xl py-4 border-purple-400 border backdrop-blur-xl px-4 items-center flex bg-[#f4f4f4] gap-2" id="form">
                  <h1 className="font-bold text-black text-xl">Selecione as publicações</h1>
                  <svg aria-hidden="true" className="w-16 h-16 py-4 text-gray-200 mx-auto animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                  </svg>
                  <div className="flex flex-col items-center gap-2">
                    <button className="mx-2 rounded-md bg-pink-200 p-2 text-center text-xs lg:text-sm">
                      Ainda não encontrou o que procurava? <span className="text-purple-600">Você pode realizar a compra informando o link do vídeo ou foto aqui.</span>
                    </button>
                  </div>
                  <button className="px-5 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-bold text-2xl w-full hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 transition ease-in-out animation-finally mt-1">
                    Selecionar Postagens
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
