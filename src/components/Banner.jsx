"use client"

import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './banner.css';

export default function Banner() {
  const [rating] = useState(5)
  const [reviews] = useState(4960)

  return (
    <div className="banner-container bg-purple position-relative overflow-hidden">
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-md-7 pe-lg-5 pe-md-3">
            <h1 className="display-4 text-white">
              Comprar <span className="text-cyan">Seguidores</span>:
            </h1>
            <h2 className="display-5 text-white mb-4">
              Garanta mais <span className="text-cyan">curtidas</span> e{" "}
              <span className="text-cyan">visualizações</span> nas suas postagens!
            </h2>

            {/* Rating Stars */}
            <div className="mb-3 d-flex align-items-center">
              <span className="text-warning fs-3">★★★★★</span>
              <span className="text-white ms-2 fw-bold fs-5">{reviews} Avaliações Verificadas</span>
            </div>

            {/* CTA Button */}
            <button className="button-main">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Crescer Meu Instagram Agora
</button>


        <div className="lg:px-0 xl:w-80 flex flex-wrap z-10 lg:gap-4 gap-1 pt-3 text-white btn-below-text">
      <div className="d-flex px-0 gap-4">
       <span className="lg:mx-0 mb-3 d-flex align-items-center gap-1 lg:gap-2 lg:text-base text-sm">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="16" height="16" viewBox="0 0 24 24" className="lg:h-4 lg:w-4 h-3 w-3">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"></path>
          </svg>
        </span>
        <span className="fw-semibold text-uppercase">100% Seguro e Sigiloso</span>
      </span>

      <span className="lg:mx-0 mb-3 d-flex align-items-center gap-1 lg:gap-2 lg:text-base text-sm">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="16" height="16" viewBox="0 0 24 24" className="lg:h-4 lg:w-4 h-3 w-3">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"></path>
          </svg>
        </span>
        <span className="fw-semibold text-uppercase">Não Pedimos sua Senha</span>
      </span>
      </div>

      <span className="lg:mx-0 mb-3 d-flex align-items-center gap-1 lg:gap-2 lg:text-base text-sm">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="16" height="16" viewBox="0 0 24 24" className="lg:h-4 lg:w-4 h-3 w-3">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"></path>
          </svg>
        </span>
        <span className="fw-semibold text-uppercase">Não Precisa Seguir Ninguém</span>
      </span>

      <span className="lg:mx-0 mb-3 d-flex align-items-center gap-1 lg:gap-2 lg:text-base text-sm">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="16" height="16" viewBox="0 0 24 24" className="lg:h-4 lg:w-4 h-3 w-3">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"></path>
          </svg>
        </span>
        <span className="fw-semibold text-uppercase">Suporte Humanizado no Chat</span>
      </span>
    </div>
</div>

          {/* Video Section */}
          <div className="col-md-5">
            <div className="position-relative">
              <div className="ratio ratio-16x9">
                <video className="rounded-3 shadow" controls controlsList="nodownload" poster="/thumbnailMain.jpg">
              <source src="/main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
  
              </div>
              <div className="text-center text-white mt-3">
                <i className="bi bi-exclamation-triangle-fill me-2 text-warning"></i>
                Assista ao vídeo e descubra como funciona.
              </div>
            </div>
          </div>
        </div>
      </div>

    <div>
      {/* Wave Animation */}
      <svg
        className="waves bg-[#C114B0] rotate-0 -mt-2 -z-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          ></path>
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(86,11,131,0.4)"></use>
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.05)"></use>
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.01)"></use>
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0A0010"></use>
        </g>
      </svg>
    </div>
    </div>

  )
}

