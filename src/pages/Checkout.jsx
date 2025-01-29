import React, { useState, useEffect } from "react";
import './Checkout.css';
import Footer from '../components/Footer';
import axios from 'axios'
import { useCheckout } from "../context/CheckoutContext";
import TimerHead from "../components/TimerHead";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constant";


const Checkout = () => {// Starting time in seconds
  const [userInsta, setuserInsta] = useState(
    null

  ); // Starting time in seconds

  const [userImg, setuserImg] = useState('../placeholder.png'); // Starting time in seconds
  const [isUser, setisUser] = useState(true); // Starting time in seconds
  const [isTour, setisTour] = useState(false); // Starting time in seconds
  const [isChecked, setIsChecked] = useState(false);
  const [isDisable, setisDisable] = useState(true);
  let navigate = useNavigate()
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
  const { updateCheckoutData, checkoutData, addInfo } = useCheckout();


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
    if (checkoutData.selected === "followers") {

      updateCheckoutData("link", checkoutData.username);
      navigate("/pay/form")
    } else {
      navigate("/pay/select")
    }

  };
  const fetchInstagramData = async () => {


    const response = await axios.get(`${baseUrl}/instagram-info`, {
      params: { username: checkoutData.username },
    });


    try {
      // const info = await infoRequest;

      if (response.data.success) {
        setuserInsta(
          response.data.response.data
        )
        addInfo(response.data.response.data)
        //  removeable 
        setisDisable(false)
        let imageUrl = response.data.response.data.profile_pic_url
        const fetchImage = async (imageUrl) => {
          try {
            const proxyUrl = `${baseUrl}/proxy-image?imageUrl=${encodeURIComponent(imageUrl)}`;
            const response = await fetch(proxyUrl);
            const blob = await response.blob();
            const imageObjectURL = URL.createObjectURL(blob);
            console.log('imageObjectURL: ', imageObjectURL);
            updateCheckoutData("userProfile", imageObjectURL);
            setuserImg(imageObjectURL);
          } catch (error) {
            console.error("Error fetching image:", error);
          }
        };
        fetchImage(imageUrl)

      } else {
        console.error("Username not found.");
        setisUser(false)
      }
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
      setisUser(false)

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
        <div className="flex lg:items-start mx-auto items-center gap-14 w-screen overflow-hidden flex-col lg:flex-row justify-center h-full">
          <div className="react-card-flip lg:mt-12 mt-10" style={{ zIndex: "auto" }}>
            <div className="react-card-flipper" style={{ height: "100%", perspective: "1000px", position: "relative", width: "100%" }}>
              <div className="react-card-front" style={{ backfaceVisibility: "hidden", height: "100%", position: "relative", transform: "rotateY(0deg)", transition: "0.25s", width: "100%", zIndex: 2 }}>
                <div className="lg:w-[550px] w-[90%] flex-col mx-auto rounded-2xl py-4 border-purple-400 border  px-4 items-center flex bg-[#f4f4f4] gap-2" id="form">
                  <h1 className="font-bold text-black text-xl">Finalizar Compra</h1>
                  <form onSubmit={handleSubmit} className="flex akjk flex-col items-cente gap- w-full">
                    <div className="input-data name">
                      <span className="span-input">
                        {/* <img src="../name.svg" /> */}
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
                    {errors.name && <span className="text-red-500 my-2q"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Campo requerido</font></font></span>}
                    <div className="input-data email">
                      <span className="span-input">
                        {/* <img src="../gmail.svg" /> */}
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
                    {errors.email && <span className="text-red-500 my-2q"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>O e-mail é inválido</font></font></span>}

                    <div className="input-data phone">
                      <span className="span-input">
                        {/* <img src="../phone.svg" /> */}
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
                    {errors.phone && <span className="text-red-500 my-2q"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Campo requerido</font></font></span>}

                    <div className="input-data instagram innna">
                      <span className="span-input">
                        {/* <img src="../instagram.svg" /> */}

                        <input
                          name="instagram"
                          type="text"
                          id="instagram"
                          placeholder="Link"
                          className="w-full input-field"
                          value={checkoutData.username}
                          disabled={true}
                          style={{ opacity: 0.7 }}
                        />
                      </span>
                    </div>
                    {errors.instagram && <span className="text-red-500 my-2q"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>adicionar link de postagem</font></font></span>}


                    <div className="input-data pl-2 gap-1.5 flex items-center justify-start w-full">
                      <input checked={isChecked}
                        onChange={handleCheckboxChange} className=" thweh" id="disable_analise" type="checkbox" />
                      <button type="button" onClick={() => setisTour(true)} className="text-left text-blue-400 hover:text-blue-600 font-medium text-xs justify-start">
                        Para alcançar seus seguidores, desmarque a opção:
                        <span className="text-blue-600">
                          “🚨 Desative o Sinalizar para Análise”.
                        </span>
                      </button>
                      <button type="button" onClick={() => setisTour(true)} className="bg-red-600 min-w-fit nunito font-medium text-white ring ring-red-600 border-white rounded-full shadow-lg transition-all duration-300 shadow-red-400">
                        <div className="min-w-fit bg-red-600 h-full rounded-full px-2 py-1 border-white border-2">
                          Veja o tutorial
                        </div>
                      </button>
                    </div>
                    {errors.tutorial && <span className="text-red-500 my-2q ajs" style={{ marginBottom: '30px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Campo requerido</font></font></span>}



                    <button
                      type="submit"
                      style={{ opacity: isDisable ? 0.5 : 1 }}
                      disabled={isDisable}
                      className="px-5 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-bold text-2xl w-full hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 transition ease-in-out animation-finally mt-1"
                    >
                      Continuar
                    </button>
                    {userInsta ? <div className="flex lg:flex-row flex-col mt-2 items-center lg:justify-between w-full px-4">
                      <div className="flex items-center gap-4">
                        <figure>
                          <img className="rounded-full w-16 h-16 object-contain" crossOrigin="anonymous"
                            alt="Profile Picture" src={userImg} />
                        </figure>
                        <span className="text-[#40474f] font-bold text-lg">
                          @{userInsta.username}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                          <b className="text-lg font-bold text-[#5d5d5d]">
                            {userInsta.media_count}
                          </b>
                          Posts
                        </span>
                        <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                          <b className="text-lg font-bold text-[#5d5d5d]">
                            {userInsta.follower_count}
                          </b>
                          Seguidores
                        </span>
                        <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                          <b className="text-lg font-bold text-[#5d5d5d]">
                            {userInsta.following_count}

                          </b>
                          Seguindo
                        </span>
                      </div>
                    </div> : <div>

                      {isUser ? "" : <p style={{ textAlign: 'center', marginBlock: '10px' }}>User Fetching failed</p>}
                    </div>}


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
                  <div className="flex lg:flex-row flex-col mt-2 items-center lg:justify-between w-full px-4">
                    <div className="flex items-center gap-4">
                      <figure>
                        <img className="rounded-full w-16 h-16 object-contain" src="data:image/jpeg;base64,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" />
                      </figure>
                      <span className="text-[#40474f] font-bold text-lg">
                        @ahmr.ch
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                        <b className="text-lg font-bold text-[#5d5d5d]">
                          20
                        </b>
                        Posts
                      </span>
                      <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                        <b className="text-lg font-bold text-[#5d5d5d]">
                          186
                        </b>
                        Seguidores
                      </span>
                      <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                        <b className="text-lg font-bold text-[#5d5d5d]">
                          322
                        </b>
                        Seguindo
                      </span>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* modal */}
      {isTour ? <>
        <div onClick={() => setisTour(false)} aria-hidden="true" className="rs-modal-backdrop rs-anim-fade rs-anim-in" />

        <div className="rs-modal-wrapper">
          <div className="!bg-[#020202] text-center lg:w-[90%] xl:w-[70%] rs-modal-sm rs-anim-bounce-in rs-modal" id="dialog-:r0:" style={{ display: 'block' }}>
            <div className="rs-modal-dialog">
              <div className="rs-modal-content">
                <div className="rs-modal-header">
                  <button onClick={() => setisTour(false)} className="rs-modal-header-close rs-btn-close">
                    <svg aria-hidden="true" aria-label="close" className="rs-icon" data-category="application" fill="currentColor" focusable="false" height="1em" viewBox="0 0 16 16" width="1em">
                      <path d="M2.784 2.089l.069.058 5.146 5.147 5.146-5.147a.5.5 0 01.765.638l-.058.069L8.705 8l5.147 5.146a.5.5 0 01-.638.765l-.069-.058-5.146-5.147-5.146 5.147a.5.5 0 01-.765-.638l.058-.069L7.293 8 2.146 2.854a.5.5 0 01.638-.765z">
                      </path>
                    </svg>
                  </button>
                  <h4 className="text-white font-bold text-2xl nunito rs-modal-title" id="dialog-:r0:-title">
                    Sinalizar para análise.
                  </h4>
                </div>
                <span className="text-[#c3c3c3] my-2 text-lg">
                  Necessário desativar essa função no perfil antes da compra para garantir a entrega do pedido.
                </span>
                <div className="flex lg:flex-row justify-around my-4 lg:gap-2 xl:gap-8 gap-8 flex-col">
                  <figure className="lg:h-[400px] w-full">
                    <img className="object-cover w-full h-full" src="../1.png" />
                  </figure>
                  <figure className="lg:h-[400px] w-full">
                    <img className="object-cover w-full h-full" src="../rsv2.png" />
                  </figure>
                  <figure className="lg:h-[400px] w-full">
                    <img className="object-cover w-full h-full" src="../rsv3.png" />
                  </figure>
                </div>
                <div className="flex justify-center rs-modal-footer">
                  <button onClick={() => setisTour(false)} className="w-[80%] !mx-auto hover:!bg-[#C114B0] transition-all duration-500 rs-btn rs-btn-primary">
                    Já desativei
                    <span className="rs-ripple-pond">
                      <span className="rs-ripple">
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div></> : ""}


    </>
  );
};

export default Checkout;
