import React, { useState, useEffect, useRef } from "react";

import Header from '../components/Header';
import PacotesSection from '../components/PacotesSection';
import Iphone from '../components/Iphone';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import CountUp from "react-countup";

import './home.css'
import BottomBar from "../components/bottomBar";
function Home() {
  const [countTrigger, setCountTrigger] = useState(false);
  const sectionRef = useRef(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountTrigger(true);
          } else {
            setCountTrigger(false);
          }
        });
      },
      { threshold: 0.5 } // Section must be 50% visible to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="relative">
        <Header />
        <main className="lg:pt-[84px] 2xl:pt-[10%] !z-20 pt-[90px] text-white lg:px-16 2xl:px-24">
          <div className="flex w-full flex-col lg:flex-row justify-between gap-8 items-center">
            <div className="lg:max-w-[55%] 2xl:max-w-[60%] flex flex-col h-full gap-0 sm:gap-5 lg:gap-12 pb-3">
              <div>
                <h1 className="font-weight-bold montserrat leading-tight lg:leading-snug lg:text-5xl 2xl:text-7xl text-3xl font-bold lg:text-left texxt t-centerext whitespace-pre-line lg:px-0 px-1">
                  Comprar {" "}
                  <span className="text-yello montserrat lg:text-5xl 2xl:text-7xl">
                    Seguidores
                  </span>
                  :
                  <br />
                  Garanta
                  mais {" "}
                  <span className="text-yello montserrat lg:text-5xl 2xl:text-7xl">
                    curtidas{" "}
                  </span>
                  e
                  <br />
                  <span className="text-yello montserrat lg:text-5xl 2xl:text-7xl">
                    visualizações{" "}
                  </span>
                  nas suas
                  <br />
                  postagens!
                </h1>
                <a>
                </a>
                <a className="mt-4 flex justify-center text-sm md:mt-6 md:text-lg lg:justify-start xl:text-2xl 2xl:text-3xl">
                  <div className="mr-4 text-yellow-400">
                    ★★★★★
                  </div>
                  <div className="whitespace-nowrap font-semibold">
                    4960 Avaliações Verificadas
                  </div>
                </a>
              </div>
              <div className="lg:max-w-[45%] lg:hidden block lg:my-auto w-[95%] mx-auto text-center card-home mt-5 mb-12">
                <div className="video-js vjs-16-9 !w-full vjs-big-play-centered vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v8 vjs-user-active vjs_video_554-dimensions" id="vjs_video_554">
                  <iframe className="this-ifrm"
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1051005378?byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
                <span>
                  ⚠️ Assista ao vídeo e descubra como funciona:
                </span>
              </div>
              <div className="lg:ml-0 flex flex-col gap-8 -mt-4 mx-auto">
                <a className="button-main-sel cursor-pointer">
                  Crescer Meu Instagram Agora
                  <span>
                  </span>
                  <span>
                  </span>
                  <span>
                  </span>
                  <span>
                  </span>
                </a>
                <div className="px-4 lg:px-0 xl:w-[80%] flex flex-wrap z-10 lg:gap-x-4 gap-y-1">
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      100% Seguro e Sigiloso
                    </span>
                  </span>
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      Não Pedimos sua Senha
                    </span>
                  </span>
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      Não Precisa Seguir Ninguém
                    </span>
                  </span>
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      Suporte Humanizado no Chat
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[45%] hidden lg:block lg:my-auto w-[80%] text-center card-home">
              <div className="video-js vjs-16-9 !w-full vjs-big-play-centered vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v8 vjs-user-active vjs_video_554-dimensions" id="vjs_video_554">
                <iframe className="this-ifrm"
                  ref={iframeRef}
                  src="https://player.vimeo.com/video/1051005378?byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
              ⚠️ Assista ao vídeo e descubra como funciona:
            </div>
          </div>
        </main>
        <svg className="waves bg-[#C114B0] rotate-0 -mt-2 -z-40" preserveAspectRatio="none" shapeRendering="auto" viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" id="gentle-wave">
            </path>
          </defs>
          <g className="parallax">
            <use fill="rgba(86,11,131,0.4)" x={48} xlinkHref="#gentle-wave" y={0}>
            </use>
            <use fill="rgba(255,255,255,0.05)" x={48} xlinkHref="#gentle-wave" y={3}>
            </use>
            <use fill="rgba(255,255,255,0.01)" x={48} xlinkHref="#gentle-wave" y={5}>
            </use>
            <use fill="#0A0010" x={48} xlinkHref="#gentle-wave" y={7}>
            </use>
          </g>
        </svg>
        <div className="relative w-full max-w-[100vw]" id="pacotes">
          <div className="relative lg:overflow-visible overflow-y-clip overflow-x-hidden">
            <section ref={sectionRef} className="main-cards w-full mt-32 lg:mt-20 px-8 lg:gap-8 gap-10 lg:px-16 2xl:px-24 flex lg:flex-row flex-col">
              <div className="card">
                <span>
                  <i className="mdi mdi-gift-open mdi-24px lg:mdi-48px">
                  </i>
                </span>
                <div className="flex flex-col text-white">
                  {countTrigger && (
                    <span className="font-bold poppins count">
                      <CountUp key={`card1-${countTrigger}`} end={98769} duration={2.5} />
                    </span>
                  )}
                  <span className="poppins">
                    Total de
                    pedidos
                  </span>
                </div>
              </div>
              <div className="card">
                <span>
                  <i className="mdi mdi-star mdi-24px lg:mdi-48px">
                  </i>
                </span>
                <div className="flex flex-col text-white">
                  <span className="font-bold poppins">
                    4.9
                  </span>
                  <span className="poppins">
                    Classificações
                    de clientes
                  </span>
                </div>
              </div>
              <div className="card">
                <span>
                  <i className="mdi mdi-account-multiple mdi-24px lg:mdi-48px">
                  </i>
                </span>
                <div className="flex flex-col text-white">
                  {countTrigger && (
                    <span className="font-bold poppins count">
                      <CountUp key={`card2-${countTrigger}`} end={134456} duration={2.5} />
                    </span>
                  )}
                  <span className="poppins">
                    Numero de
                    clientes
                  </span>
                </div>
              </div>
            </section>
            <section className="lg:px-24 2xl:px-28 px-4 mt-20">
              <div className="card-info w-full bg-[#68486932] rounded-3xl border border-[#A72CCE] text-white h-fit">
                <h1 className="font-bold text-center text-xl lg:text-4xl">
                  Desde 2014, mais de
                  <span className="text-[#c166dc] font-bold">
                    46.392
                  </span>
                  clientes
                  <span className="text-[#c166dc] font-bold">
                    satisfeitos
                  </span>
                  já impulsionaram suas
                  <span className="text-[#c166dc] font-bold">
                    contas no Instagram!
                  </span>
                </h1>
                <button className="w-fit px-4 py-2 font-bold ubuntu rounded-[120px] bg-[#a337c4] flex items-center mt-8">
                  Nossos
                  serviços
                  <i className="mdi mdi-arrow-right mdi-24px">
                  </i>
                </button>
              </div>
            </section>
            <div className="-z-10 lg:-left-[50px] -top-10 2xl:-left-[5vw] elipse303 hidden lg:block overflow-hidden">
            </div>
            <div className="-z-10 elipse304 lg:top-[-500px] 2xl:top-[-400px] 2xl:right-0 lg:-right-[300px] -right-[600px] top-[200px] overflow-hidden">
            </div>
          </div>
          <PacotesSection />
          <Iphone />
        </div>
        <div className="Toastify">
        </div>
      </div>
      <FAQSection />
      <Footer />
      <BottomBar />
    </>
  );
}

export default Home;
