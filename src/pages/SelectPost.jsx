import React, { useState, useEffect } from "react";
import './Checkout.css';
import Footer from '../components/Footer';
import axios from 'axios'
import { useCheckout } from "../context/CheckoutContext";
import TimerHead from "../components/TimerHead";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constant";
import { toast } from "react-toastify";


const SelectPost = () => {// Starting time in seconds
  const [userInsta, setuserInsta] = useState(
    null

  ); // Starting time in seconds
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setisLoading] = useState(true); // Starting time in seconds
  const [isDisable, setisDisable] = useState(true); // Starting time in seconds
  const [manualInput, setmanualInput] = useState(false); // Starting time in seconds

  let navigate = useNavigate()


  const { updateCheckoutData, checkoutData, addInfo } = useCheckout();


  let toggleInput = () => {
    setmanualInput(!manualInput)
    if (!manualInput) {
      setSelectedPost(null)
    }
  }

  const fetchInstagramData = async () => {

    setisLoading(true)
    const response = await axios.get(`${baseUrl}/instagram-posts`, {
      params: { username: checkoutData.username },
    });


    try {
      // const info = await infoRequest;

      console.log('response.data: ', response.data);
      if (response.data.success) {
        setuserInsta(response.data.response.data.items)

        setisDisable(false)
        //  removeable  
        // let imageUrl = response.data.response.data.profile_pic_url
        const fetchImage = async (imageUrl) => {
          try {
            const proxyUrl = `${baseUrl}/proxy-image?imageUrl=${encodeURIComponent(imageUrl)}`;
            const response = await fetch(proxyUrl);
            const blob = await response.blob();
            return URL.createObjectURL(blob); // Return the object URL
          } catch (error) {
            console.error("Error fetching image:", error);
            return imageUrl; // Fallback to the original image
          }
        };

        // Process each post's thumbnail URL
        const updateThumbnails = async () => {
          const updatedItems = await Promise.all(
            response.data.response.data.items.map(async (post) => {
              const newImageUrl = await fetchImage(post.thumbnail_url);
              return { ...post, thumbnail_url: newImageUrl }; // Replace with the proxied image
            })
          );

          setuserInsta(updatedItems); // Update state with modified image URLs

        };

        // Call the function to update thumbnails
        updateThumbnails();
        setisLoading(false)
      } else {
        console.error("Username not found.");

      }
    } catch (error) {
      console.error('Error fetching Instagram data:', error);


    }
  };
  const handlePostClick = (postUrl) => {
    setSelectedPost(postUrl); // Store the selected post URL
    setmanualInput(false)

  };


  let goNext = () => {
    console.log(selectedPost);
    if (selectedPost === null || selectedPost.trim() === "") {
      toast.error('selecione uma postagem ou insira a url da postagem')
      return
    }
    updateCheckoutData("link", selectedPost)
  }
  useEffect(() => {
    if (checkoutData.username) {

      fetchInstagramData();
    }
  }, []);
  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden relative">
        <TimerHead />
        {checkoutData.username !== "" && checkoutData.userInfo?.length > 0 ?

          <div className="lg:mt-12 mt-10">
            <div className="lg:w-[550px] w-[90%] min-w-[80%] lg:min-w-[550px] mx-auto flex-col rounded-2xl py-4 border-purple-400 border backdrop-blur-xl px-4 items-center flex bg-[#f4f4f4] gap-2" id="form">
              <h1 className="font-bold text-black text-xl">
                Selecione as publicações
              </h1>
              <div className="flex lg:flex-row flex-col mt-2 items-center lg:justify-between w-full px-4">
                <div className="flex items-center gap-4">
                  <figure>
                    <img className="rounded-full w-16 h-16 object-contain" src={checkoutData.userProfile} />
                  </figure>
                  <span className="text-[#40474f] font-bold text-lg">
                    @{checkoutData.userInfo[0].username}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                    <b className="text-lg font-bold text-[#5d5d5d]">
                      {checkoutData.userInfo[0].media_count}
                    </b>
                    Posts
                  </span>
                  <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                    <b className="text-lg font-bold text-[#5d5d5d]">
                      {checkoutData.userInfo[0].follower_count}
                    </b>
                    Seguidores
                  </span>
                  <span className="flex flex-col text-lg text-[#969696] font-bold items-center">
                    <b className="text-lg font-bold text-[#5d5d5d]">
                      {checkoutData.userInfo[0].following_count}
                    </b>
                    Seguindo
                  </span>
                </div>
              </div>
              {isLoading ?

                <svg aria-hidden="true" className="w-16 h-16 py-4 text-gray-200 mx-auto animate-spin dark:text-gray-600 fill-blue-600" fill="none" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor">
                  </path>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill">
                  </path>
                </svg> : <>

                  <div className="grid grid-flow-row lg:gap-y-2 gap-y-1 gap-x-1 lg:gap-x-4 grid-cols-4">
                    {userInsta.map((post, index) => (
                      <button
                        key={index}
                        onClick={() => handlePostClick(post.thumbnail_url)}
                        className={`aspect-h-4 lg:h-32 h-16 w-16  aspect-w-4 lg:w-32 ring-transparent  ring rounded-md focus-within:ring-purple-500 bg-transparent bg-cover  `}
                        style={{ backgroundImage: `url(${post.thumbnail_url})` }}  // Ensure `post.imageUrl` contains a valid URL
                      >
                        <input
                          type="checkbox"
                          className={`${selectedPost === post.thumbnail_url ? "h-full w-full checked-bg   bg-purple-500 rounded-md  text-purple-600 opacity-0  border-blue-500  !opacity-75" : "h-full w-full checked:bg-purple-500 rounded-md text-purple-600 opacity-0"}`}

                          id={`selectedPost-${index}`} // Unique ID for each input
                        />
                      </button>
                    ))}


                  </div>

                </>
              }
              <div className="flex flex-col items-center gap-2">
                <button onClick={toggleInput} className="mx-2 rounded-md bg-pink-200 p-2 text-center text-xs lg:text-sm">
                  Ainda não encontrou o que procurava?
                  <span className="text-purple-600">
                    Você pode realizar a compra informando o link do vídeo ou foto aqui.
                  </span>
                </button>
              </div>
              {manualInput &&
                <div className="relative h-14 w-full rounded-md px-2"><div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg aria-hidden="true" className="h-4 w-4 text-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" fill="currentColor" /></svg></div>
                  <input value={selectedPost} onChange={(e) => setSelectedPost(e.target.value)} className="rounded-t rounded-b border-b block h-14 w-full border-gray-300 pl-9  text-xs text-gray-700 focus:outline-none placeholder-gray-400 placeholder:text-xs focus:border-purple-500 focus:ring-purple-500 lg:text-sm lg:placeholder:text-sm" placeholder="Digite o link da postagem" autoComplete="off" title="Link" type="text" />

                </div>
              }

              <button disabled={isDisable} onClick={
                goNext
              }
                style={{ opacity: isDisable ? 0.5 : 1 }} className="px-5 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-bold text-2xl w-full hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 transition ease-in-out animation-finally mt-1">
                Continuar
              </button>
            </div>
          </div> : ""
        }

      </div>
      <Footer />




    </>
  );
};

export default SelectPost;
