import React, { useState, useEffect } from "react";
import './Checkout.css';
import Footer from '../components/Footer';
import axios from 'axios'
import { useCheckout } from "../context/CheckoutContext";
import TimerHead from "../components/TimerHead";


const Form = () => {// Starting time in seconds
  const [userInsta, setuserInsta] = useState(null); // Starting time in seconds
  const [isTour, setisTour] = useState(false); // Starting time in seconds
  const [isChecked, setIsChecked] = useState(false);
  const [isDisable, setisDisable] = useState(true);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    instagram: false,
    tutorial: false,
  });
  // Handle change of checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const { updateCheckoutData, checkoutData } = useCheckout();


  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!phone) newErrors.phone = true;
    if (!instagram) newErrors.instagram = true;
    if (!isChecked) newErrors.tutorial = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop further processing if validation fails
    }

    // Reset errors if validation passed
    setErrors({});
    // Handle form submission logic here

    updateCheckoutData("name", name);
    updateCheckoutData("email", email);
    updateCheckoutData("phone", phone);
    updateCheckoutData("link", instagram);

    // will be moved
    // let formData = {
    //   name: name,
    //   email: email,
    //   phone: phone,
    //   taxID: '09065645306',
    // }
    // try {
    //   const res = await axios.post(`http://localhost:4000/api/openpix/create-charge`, formData);
    //   console.log('res: ', res);
    //   // setResponse(res.data); // Display the response to the user
    //   // setError(null);
    // } catch (err) {
    //   console.log('err: ', err);
    //   // setError(err.response?.data || 'An error occurred');
    //   // setResponse(null);
    // }
  };
  const fetchInstagramData = async () => {
    const options = {
      method: 'GET',
      url:
        `https://instagram-scraper-2022.p.rapidapi.com/ig/posts_username/?user=${checkoutData.username}&nocors=false`,
      // params: {
      //   search_query: checkoutData.username, // Replace 'beast' with your desired search term
      // },
      headers: {
        'x-rapidapi-host': 'instagram-scraper-2022.p.rapidapi.com',
        'x-rapidapi-key': '356b659175msh1f8e37bdb4a5e5dp1f186djsn4b3fc71df9bf',
      },
    };

    try {
      const response = await axios.request(options);
      console.log('response: ', response);
      if (checkoutData.username) {

        setuserInsta(response.data.user)
        setisDisable(false)
        // Trim the username for safety
        // const trimmedUsername = checkoutData.username.trim();

        // // Perform validation
        // const matchedUser = response.data.data.users.find(
        //   (user) => user.username.toLowerCase() === trimmedUsername.toLowerCase()
        // );

        // if (matchedUser) {
        //   // Do something with the matched user
        // } else {
        //   console.error("No user found with the provided username.");
        // }

      } else {
        console.error("Username not found.");
      }
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
    }
  };

  useEffect(() => {
    if (checkoutData.username) {

      fetchInstagramData();
    }
  }, []);
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
                  <input className="w-full input-field" placeholder="CPF..." id="cnpj" />
                  <span className="text-red-400">
                    - CPF: necessário somente para emissão da nota fiscal.
                  </span>
                </span>
              </div>
              <div className="flex flex-col w-full bg-white rounded-md pb-4">
                <div className="bg-[#79009C] sm:py-3 px-3 py-4 text-white font-bold text-center rounded-md rounded-b-none">
                  <p className="duration-700">
                    As ofertas abaixo são EXCLUSIVAS para essa compra!
                  </p>
                </div>
                <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
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
                        <button className="text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 bg-green-600 hover:bg-green-800 transition-all animate-pulse-red">
                          <span>
                            ADICIONAR
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
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
                        <button className="text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 bg-green-600 hover:bg-green-800 transition-all animate-pulse-red">
                          <span>
                            ADICIONAR
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
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
                        <button className="text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 bg-green-600 hover:bg-green-800 transition-all animate-pulse-red">
                          <span>
                            ADICIONAR
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between border w-full border-gray-300 border-t-0 bg-yellow-100 py-4 px-4 items-center border-dotted">
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
                        <button className="text-xs tracking-widest ml-0 w-full font-bold text-white min-w-[135px] text-center py-3 px-2 rounded mt-2 bg-green-600 hover:bg-green-800 transition-all animate-pulse-red">
                          <span>
                            ADICIONAR
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-green-500 text-white mx-auto w-fit hover:bg-green-700 transition-all duration-150 mt-4 px-4 py-2 rounded-md">
                Pagar
              </button>
            </form>
          </div>
          <div className="flex-col rounded-2xl py-6 px-8 border-purple-400 border backdrop-bur-xl lg:mt-10 items-center flex bg-[#f4f4f4]">
            <div className="flex mb-8 items-center justify-start w-full gap-4">
              <img className="rounded-full w-16 h-16 object-contain" src="data:image/jpeg;base64,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" />
              <h3 className="font-bold text-xl">
                @ahmr.ch
              </h3>
            </div>
            <div className="w-full text-[#525252] font-normal flex justify-between">
              <span className="text-base font-light w-[60%]">
                Pacote Iniciante - 350 Seguidores - Instagram
              </span>
              <span className="pixel-data-pay">
                9.90
              </span>
            </div>
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
                R$9.90
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
