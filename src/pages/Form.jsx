import React, { useState, useEffect } from "react";
import './Checkout.css';
import Footer from '../components/Footer';
import axios from 'axios'
import { useCheckout } from "../context/CheckoutContext";
import TimerHead from "../components/TimerHead";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constant";


const Form = () => {// Starting time in seconds

  // Handle change of checkbox

  const { updateCheckoutData, checkoutData, addPaymentInfo } = useCheckout();
  const [isDisable, setisDisable] = useState(false);
  const [moreFollow, setmoreFollow] = useState(false);
  const [moreLikes, setmoreLikes] = useState(false);
  const [moreViews, setmoreViews] = useState(false);
  const [moreComments, setmoreComments] = useState(false);
  const [totalPrice, settotalPrice] = useState(0);
  const [orderData, setOrderData] = useState({
    serviceID: "",
    link: "",
    quantity: "",
  });

  let navigate = useNavigate()
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(true);
  const isValidCPF = (cpf) => {
    // Remove non-numeric characters
    cpf = cpf.replace(/[^\d]+/g, '');

    // Check if the CPF length is 11 digits
    if (cpf.length !== 11) return false;

    // Check if the CPF is made up of all the same digits
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Validate CPF using checksum formula
    const calcChecksum = (cpfPart, weights) => {
      let sum = 0;
      for (let i = 0; i < cpfPart.length; i++) {
        sum += parseInt(cpfPart[i]) * weights[i];
      }
      const mod = sum % 11;
      return mod < 2 ? 0 : 11 - mod;
    };

    const firstPart = cpf.substring(0, 9);
    const secondPart = cpf.substring(9, 11);

    // Validate first and second digits using checksum calculation
    const firstChecksum = calcChecksum(firstPart, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
    const secondChecksum = calcChecksum(firstPart + firstChecksum, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);

    return firstChecksum === parseInt(secondPart[0]) && secondChecksum === parseInt(secondPart[1]);
  };

  const handleSubmit = async () => {

    console.log(checkoutData);
    if (!checkoutData.username || !checkoutData.name || !checkoutData.email || !checkoutData.phone || checkoutData.packages.length == 0 || checkoutData.userInfo.length == 0

    ) {
      toast.error("Por favor, preencha todos os campos.");
      return
    }

    if (isValidCPF(cpf)) {
      setIsValid(true);
    } else {
      setIsValid(false);
      return
    }
    updateCheckoutData("cpf", cpf)
    updateCheckoutData("totalPrice", totalPrice)
    // will be moved

    let formData = {
      username: checkoutData.username,
      name: checkoutData.name,
      email: checkoutData.email,
      phone: checkoutData.phone,
      taxID: cpf,
      selectedPackage: checkoutData.packages[0],
      price: totalPrice,
      extra: {},
      selected: checkoutData.selected,
      link: checkoutData.link

    }
    if (moreFollow) {
      formData.extra = {
        description: "100 Seguidores - Instagram",
        price: 600
      };
    }

    if (moreLikes) {
      formData.extra = {
        description: "100 Curtidas - Instagram",
        price: 400
      };
    }

    if (moreViews) {
      formData.extra = {
        description: "100 visualizações em vídeos - Instagram",
        price: 400
      };
    }

    if (moreComments) {
      formData.extra = {
        description: "2 Comentarios - Instagram",
        price: 400
      };
    }
    setisDisable(true)
    try {
      const res = await axios.post(`${baseUrl}/openpix/create-charge`, formData);
      console.log('res: ', res);


      if (res.data.success === true) {
        addPaymentInfo(res.data.resposne.charge.paymentMethods.pix)
        toast.success("Pedido realizado com sucesso!");
        updateCheckoutData("correlationID", res.data.correlationID)
        navigate('/pay/pending')



        // Call the second API to create the order


      } else {
        console.log("sja");
        toast.error("Ocorreu um erro ao realizar o pedido.");
      }
    } catch (err) {
      toast.error("Ocorreu um erro ao realizar o pedido.");

      console.log('err: ', err);
      // setError(err.response?.data || 'An error occurred');
      // setResponse(null);
    } finally {
      setisDisable(false)
    }
  }
  useEffect(() => {
    if (Array.isArray(checkoutData.packages) && checkoutData.packages.length > 0) {
      let totalPrice = 0; // Variable to store the total price of all packages

      checkoutData.packages.forEach(packageOne => {
        if (packageOne.discountedPrice !== undefined) {
          let priceString = packageOne.discountedPrice.replace(',', '.').trim();

          let price = parseFloat(priceString);

          if (moreLikes) {
            price += 6;
          }
          if (moreFollow) {
            price += 4;
          }
          if (moreComments) {
            price += 4;
          }
          if (moreViews) {
            price += 4;
          }

          totalPrice += price;
        } else {
          console.error('Discounted price is not available for a package.');
        }
      });

      // Set the total price after processing all packages
      settotalPrice(totalPrice.toFixed(2));
    } else {
      console.error('No packages found in checkoutData.');
      // Set a default total price if no packages are available
      settotalPrice(0);
    }
  }, [moreFollow, moreLikes, moreViews, moreComments, checkoutData]);


  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden relative">
        <TimerHead />
        <div className="flex lg:items-start items-center gap-14 w-screen overflow-hidden flex-col lg:flex-row justify-center h-full">
          <div className="lg:w-[550px] w-[90%] mt-10 flex-col rounded-2xl py-4 border-purple-400 border backdrop-blur-xl lg:mt-12 px-4 items-center flex bg-[#f4f4f4] gap-2" id="form">
            <h1 className="font-bold text-black text-xl">
              Finalizar Compra
            </h1>
            <form className="flex flex-col items-center gap-4 w-full">
              <div className="input-data noaa instagram insta-ci">
                <span className="span-input">
                  <input className="w-full  input-field" disabled={true} style={{ opacity: 0.8 }} value={checkoutData.username} placeholder="Instagram..." id="service_input" />
                </span>
              </div>
              <div className="input-data noaa cnpj" style={{ marginBottom: "20px" }}>
                <span className="span-input">
                  <input className="w-full input-field" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF..." id="cnpj" />
                  {!isValid ? <span className="text-red-400">
                    Campo obrigatório - CPF: necessário somente para emissão da nota fiscal.
                  </span> : <span className="text-red-400">
                    CPF: necessário somente para emissão da nota fiscal
                  </span>

                  }
                </span>
              </div>
              {/* <div className="flex flex-col w-full bg-white rounded-md pb-4">
                <div className="bg-[#79009C] sm:py-3 px-3 py-4 text-white font-bold text-center rounded-md rounded-b-none">
                  <p className="duration-700">
                    As ofertas abaixo são EXCLUSIVAS para essa compra!
                  </p>
                </div>
                {checkoutData.selected === "followers" ? <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
                  <div className="flex sm:flex-row items-center w-full">
                    <img className="mr-5 w-13 h-13 md:h-20 md:w-20" src="../ig-follow.svg" />
                    <div className="flex flex-col lg:flex-row items-start justify-start w-full">
                      <div className="w-full md:mr-3">
                        <p className="font-bold text-purple-700 md:text-base">
                          <p>
                            Adicione mais
                            <strong>
                              <span className="bg-[#f7f2fd]">{" "}
                                100 Seguidores {" "}
                              </span>
                            </strong>
                            por apenas:
                          </p>
                        </p>
                        <del className="text-red-600 text-sm mr-1">
                          R$18
                        </del>
                        <span className="text-green-600 font-bold text-base">
                          R$6
                        </span>
                      </div>
                      <div className="w-full md:w-auto">

                        <button onClick={() => setmoreFollow(!moreFollow)} type="button" className={`text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 ${moreFollow ? "bg-red-600 hover:bg-red-800 " : 'bg-green-600 hover:bg-green-800'} transition-all animate-pulse-red`}>
                          <span>

                            {moreFollow ? "ELIMINAR" : "ADICIONAR"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> : ""}
                {checkoutData.selected === "likes" ? <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
                  <div className="flex sm:flex-row items-center w-full">
                    <img className="mr-5 w-13 h-13 md:h-20 md:w-20" src="../ig-likes.svg" />
                    <div className="flex flex-col lg:flex-row items-start justify-start w-full">
                      <div className="w-full md:mr-3">
                        <p className="font-bold text-purple-700 md:text-base">
                          <p>
                            Adicione mais
                            <strong>
                              <span className="bg-[#f7f2fd]">{" "}
                                100 Curtidas {" "}
                              </span>
                            </strong>
                            por apenas:
                          </p>
                        </p>
                        <p />
                        <del className="text-red-600 text-sm mr-1">
                          R$7
                        </del>
                        <span className="text-green-600 font-bold text-base">
                          R$4
                        </span>
                      </div>
                      <div className="w-full md:w-auto">

                        <button onClick={() => setmoreLikes(!moreLikes)} type="button" className={`text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 ${moreLikes ? "bg-red-600 hover:bg-red-800 " : 'bg-green-600 hover:bg-green-800'} transition-all animate-pulse-red`}>
                          <span>

                            {moreLikes ? "ELIMINAR" : "ADICIONAR"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> : ''}
                {checkoutData.selected === "reel views" || checkoutData.selected === "story views" ? <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
                  <div className="flex sm:flex-row items-center w-full">
                    <img className="mr-5 w-13 h-13 md:h-20 md:w-20" src="../ig-video-views.svg" />
                    <div className="flex flex-col lg:flex-row items-start justify-start w-full">
                      <div className="w-full md:mr-3">
                        <p className="font-bold text-purple-700 md:text-base">
                          <p>
                            Adicione mais
                            <strong>
                              <span className="bg-[#f7f2fd]">{" "}
                                100 visualizações em vídeos {" "}
                              </span>
                            </strong>
                            por apenas:
                          </p>
                        </p>
                        <p />
                        <del className="text-red-600 text-sm mr-1">
                          R$7
                        </del>
                        <span className="text-green-600 font-bold text-base">
                          R$4
                        </span>
                      </div>
                      <div className="w-full md:w-auto">

                        <button onClick={() => setmoreViews(!moreViews)} type="button" className={`text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 ${moreViews ? "bg-red-600 hover:bg-red-800 " : 'bg-green-600 hover:bg-green-800'} transition-all animate-pulse-red`}>
                          <span>

                            {moreViews ? "ELIMINAR" : "ADICIONAR"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> : ""}
                {checkoutData.selected === "comments" ? <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
                  <div className="flex sm:flex-row items-center w-full">
                    <img className="mr-5 w-13 h-13 md:h-20 md:w-20" src="../ig-comments.svg" />
                    <div className="flex flex-col lg:flex-row items-start justify-start w-full">
                      <div className="w-full md:mr-3">
                        <p className="font-bold text-purple-700 md:text-base">
                          <p>
                            Adicione mais
                            <strong>
                              <span className="bg-[#f7f2fd]">{" "}
                                2 Comentarios {" "}
                              </span>
                            </strong>
                            por apenas:
                          </p>
                        </p>
                        <p />
                        <del className="text-red-600 text-sm mr-1">
                          R$6
                        </del>
                        <span className="text-green-600 font-bold text-base">
                          R$4
                        </span>
                      </div>
                      <div className="w-full md:w-auto">
                        <button onClick={() => setmoreComments(!moreComments)} type="button" className={`text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 ${moreComments ? "bg-red-600 hover:bg-red-800 " : 'bg-green-600 hover:bg-green-800'} transition-all animate-pulse-red`}>
                          <span>

                            {moreComments ? "ELIMINAR" : "ADICIONAR"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> : ""}
              </div> */}
              <button onClick={handleSubmit} disabled={isDisable} style={{ opacity: isDisable ? 0.6 : 1 }} type="button" className="bg-green-500 text-white mx-auto w-fit hover:bg-green-700 transition-all duration-150 mt-4 px-4 py-2 rounded-md">
                Pagar
              </button>
            </form>
          </div>
          <div className="flex-col rounded-2xl py-6 px-8 border-purple-400 border backdrop-bur-xl lg:mt-10 items-center flex bg-[#f4f4f4]">
            {checkoutData.userInfo && checkoutData.userInfo != null && checkoutData.userInfo?.length != 0 ?

              <div className="flex mb-8 items-center justify-start w-full gap-4">
                <img className="rounded-full w-16 h-16 object-contain" src={checkoutData.userProfile} />
                <h3 className="font-bold text-xl">
                  @{checkoutData.userInfo[0].username}
                </h3>
              </div>
              : null}
            {checkoutData.packages && checkoutData.packages.length !== 0 ? (
              checkoutData.selected === "followers" ? (
                <div className="w-full text-[#525252] font-normal flex justify-between">
                  <span className="text-base font-light w-[60%]">
                    {checkoutData.packages[0].title} - {checkoutData.packages[0].followers} Seguidores - Instagram
                  </span>
                  <span className="pixel-data-pay">{checkoutData.packages[0].discountedPrice}</span>
                </div>
              ) : checkoutData.selected === "comments" ? (
                <div className="w-full text-[#525252] font-normal flex justify-between">
                  <span className="text-base font-light w-[60%]">
                    {checkoutData.packages[0].title} - {checkoutData.packages[0].comments} Comentários - Instagram
                  </span>
                  <span className="pixel-data-pay">{checkoutData.packages[0].discountedPrice}</span>
                </div>
              ) : checkoutData.selected === "likes" ? (
                <div className="w-full text-[#525252] font-normal flex justify-between">
                  <span className="text-base font-light w-[60%]">
                    {checkoutData.packages[0].title} - {checkoutData.packages[0].likes} Curtidas - Instagram
                  </span>
                  <span className="pixel-data-pay">{checkoutData.packages[0].discountedPrice}</span>
                </div>
              ) : checkoutData.selected === "reel views" || checkoutData.selected === "story views" ? (
                <div className="w-full text-[#525252] font-normal flex justify-between">
                  <span className="text-base font-light w-[60%]">
                    {checkoutData.packages[0].title} - {checkoutData.packages[0].likes} Visualizações - Instagram
                  </span>
                  <span className="pixel-data-pay">{checkoutData.packages[0].discountedPrice}</span>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {moreFollow && <div className="w-full text-[#525252] font-normal flex justify-between" ><span className="text-base font-light w-[60%]">100 Seguidores - Instagram</span><span className="pixel-data-pay">6</span></div>}
            {moreLikes && <div className="w-full text-[#525252] font-normal flex justify-between" ><span className="text-base font-light w-[60%]">100 Curtidas - Instagram</span><span className="pixel-data-pay">4</span></div>
            }
            {moreViews && <div className="w-full text-[#525252] font-normal flex justify-between" ><span className="text-base font-light w-[60%]">100 visualizações em vídeos - Instagram</span><span className="pixel-data-pay">4</span></div>}
            {moreComments && <div className="w-full text-[#525252] font-normal flex justify-between" ><span className="text-base font-light w-[60%]">2 Comentarios - Instagram</span><span className="pixel-data-pay">4</span></div>}


            <span className="text-sm text-[#525252] mt-12 font-normal text-left ml-0 mr-auto">
              Tem um cupom?
            </span>
            <div className="w-full h-[0.6px] mt-2 bg-[#acacac]">
            </div>
            <div className="w-full flex mt-4 text-lg font-medium justify-between">
              <span className>
                Total
              </span>
              <span>
                R${totalPrice}
              </span>
            </div>
            <ul className="sidebar-list clearfix">
              <li>
                <span className="icon-list">
                  <svg fill="none" height="32px" viewBox="0 0 24 24" width="32px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0001 7L9.0001 18L4 13" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    </path>
                  </svg>
                </span>
                <div className="sidebar-list-txt">
                  <span className="loop_head_sec wfacp-normal">
                    Não precisamos da senha
                  </span>
                </div>
              </li>
              <li>
                <span className="icon-list">
                  <svg fill="none" height="32px" viewBox="0 0 24 24" width="32px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0001 7L9.0001 18L4 13" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    </path>
                  </svg>
                </span>
                <div className="sidebar-list-txt">
                  <span className="loop_head_sec wfacp-normal">
                    Não é preciso seguir ninguém
                  </span>
                </div>
              </li>
              <li>
                <span className="icon-list">
                  <svg fill="none" height="32px" viewBox="0 0 24 24" width="32px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0001 7L9.0001 18L4 13" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    </path>
                  </svg>
                </span>
                <div className="sidebar-list-txt">
                  <span className="loop_head_sec wfacp-normal">
                    Suporte Humano via Chat
                  </span>
                </div>
              </li>
            </ul>
            <div className="flex flex-col w-full mt-10">
              <h3 className="font-bold text-xl text-[#333333] text-left ml-0 mr-auto">
                DEPOIMENTOS DE CLIENTES
              </h3>
              <div className="client-list flex flex-col mt-4 gap-6">
                <div className="client flex w-full gap-4">
                  <div className="img">
                    <img className="w-16 h-16 rounded-full" src="../testimonial-1.webp" />
                  </div>
                  <div className="list flex gap-1 flex-col max-w-[300px]">
                    <h3 className="font-semibold mt-1 text-black text-lg loop_head_sec">
                      Seguidores Reais e Entrega Rápida
                    </h3>
                    <div className="flex gap-1">
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                    </div>
                    <div className="text-[#525252] italic text-lg">
                      <p>
                        Consegui 13 mil seguidores em questão de minutos, são perfis reais e brasileiros interagindo com meu perfil!
                      </p>
                    </div>
                    <span className="mt-1 text-sm text-[#525252]">
                      @rayssahungria
                    </span>
                  </div>
                </div>
                <div className="client flex w-full gap-4">
                  <div className="img">
                    <img className="w-16 h-16 rounded-full" src="../testimonial-2.webp" />
                  </div>
                  <div className="list flex gap-1 flex-col max-w-[300px]">
                    <h3 className="font-semibold mt-1 text-black text-lg loop_head_sec">
                      Mais Credibilidade No Meu Perfil
                    </h3>
                    <div className="flex gap-1">
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                    </div>
                    <div className="wfacp-testing-text wfacp-testi-content-color">
                      <p>
                        Meu Instagram profissional ganhou mais visualizações desde que iniciei esta parceria e venho recebendo mais convites para cursos e palestras desde então.
                      </p>
                    </div>
                    <span className="wfacp-testimani-user-name wfacp-testi-content-color">
                      @letis.alvares
                    </span>
                  </div>
                </div>
                <div className="client flex w-full gap-4">
                  <div className="img">
                    <img className="w-16 h-16 rounded-full" src="../testimonial-3.webp" />
                  </div>
                  <div className="list flex gap-1 flex-col max-w-[300px]">
                    <h3 className="font-semibold mt-1 text-black text-lg loop_head_sec">
                      Cumprem O Que Prometem
                    </h3>
                    <div className="flex gap-1">
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                      <img className="w-4 h-4" src="../star.svg" />
                    </div>
                    <div className="wfacp-testing-text wfacp-testi-content-color">
                      <p>
                        Gostei muito e amei o site. Agora tenho mais visibilidade e engajamento de forma rápida e natural!
                      </p>
                    </div>
                    <span className="wfacp-testimani-user-name wfacp-testi-content-color">
                      @richelly_groomer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
      <Footer />

      {/* modal */}



    </>
  );
};

export default Form;
