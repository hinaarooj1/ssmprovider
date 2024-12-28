import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './avaliacoes.css';


const Avaliacoes = () => {
  return (
    <>
    <Header/>
    <main className="lg:pt-[84px] 2xl:pt-[10%] !z-20 pt-[90px] text-white lg:px-16 2xl:px-24  "><div className="flex my-auto w-full flex-col lg:flex-row gap-8 items-center"><div className="lg:max-w-[55%] px-10 md:px-1 2xl:max-w-[60%] flex flex-col my-auto h-full gap-0 sm:gap-5 lg:gap-12 pb-3"><div><h1 className="xl:leading-title montserrat text-2xl font-extrabold md:text-3xl xl:text-7xl xl:tracking-tight">EngajamaisVoce é confiável? Veja Avaliações</h1><div className="mt-4 flex justify-center text-sm md:mt-6 md:text-lg lg:justify-start xl:text-2xl 2xl:text-3xl" title="Avaliações de clientes"><div className="mr-4 text-yellow-400">★★★★★</div><div className="whitespace-nowrap font-semibold">4960 Avaliações Verificadas</div></div><p className="mt-4 opacity-60 montserrat">EngajaMaisVocê é a solução confiável para impulsionar o engajamento nas redes sociais. Com um compromisso firme com a transparência e a segurança, oferecemos serviços de alta qualidade para aumentar seguidores, curtidas, comentários e compartilhamentos de forma autêntica e eficaz. Nossa abordagem ética garante resultados reais e duradouros, enquanto nossa equipe de especialistas oferece suporte personalizado para atender suas necessidades específicas. Confie na EngajaMaisVocê para fortalecer sua presença online e alcançar seus objetivos de marketing digital com confiança.</p><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 mx-auto mt-10 animate-bounce"><path fill="currentColor" d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg></div></div><div className="flex my-auto w-full  flex-col lg:flex-row gap-8 items-center"><figure className="w-80 mx-auto rotate-12"><img src="../icon-social.png" className="object-contain h-full w-full" alt=""/></figure></div></div></main>
     <svg
      className="waves bg-[#5E05F2] rotate-0 -mt-2 z-40"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(86,11,131,0.4)" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.05)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.01)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>


     <div className="w-full px-4 pt-8 lg:px-16 2xl:px-24 bg-white py-5 mb-lg-5">
      <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
          <b className="text-lg font-extrabold text-gray-700">Solange Lima</b>
          <div className="my-1 flex flex-row text-xl text-yellow-400">
            ★★★★★
            <span className="sr-only">25 de 5 estrelas</span>
          </div>
          <blockquote className="prose text-gray-600">Serviço de qualidade e confiável,atendeu minhas expectativas.</blockquote>
          <div className="mt-2 flex flex-row">
            <a href="/followers" className="mr-3 flex items-center" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">
              <img className="ls-is-cached lazyloaded" alt="ícone produto" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" srcSet="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
            </a>
            <div className="flex items-center">
              <div className="flex flex-col justify-start">
                <div className="flex justify-start text-sm">
                  <div>por Solange Lima&nbsp;</div>
                  <div className="flex justify-start">
                    <abbr title="14/07/2024" style={{ textDecoration: 'none' }}>em 14/07/2024</abbr>&nbsp;
                    <img src="https://seguidores.storage.googleapis.com/images/user-verified.svg" alt="Usuário verificado" width="15px" height="15px" className="ls-is-cached lazyloaded" />
                  </div>
                </div>
                <div className="flex justify-start text-sm">
                  <span className="whitespace-nowrap">após comprar</span>&nbsp;
                  <a href="/followers" className="font-extrabold" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">Seguidores Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for the other reviews */}
        {/* I'm including one more as an example, but you would repeat this for all reviews */}

        <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
          <b className="text-lg font-extrabold text-gray-700">Muito bom!</b>
          <div className="my-1 flex flex-row text-xl text-yellow-400">
            ★★★★★
            <span className="sr-only">25 de 5 estrelas</span>
          </div>
          <blockquote className="prose text-gray-600">Ágil e pratico! Recomendo...</blockquote>
          <div className="mt-2 flex flex-row">
            <a href="/followers" className="mr-3 flex items-center" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">
              <img className="ls-is-cached lazyloaded" alt="ícone produto" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" srcSet="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
            </a>
            <div className="flex items-center">
              <div className="flex flex-col justify-start">
                <div className="flex justify-start text-sm">
                  <div>por Muito bom!&nbsp;</div>
                  <div className="flex justify-start">
                    <abbr title="09/07/2024" style={{ textDecoration: 'none' }}>em 09/07/2024</abbr>&nbsp;
                    <img src="https://seguidores.storage.googleapis.com/images/user-verified.svg" alt="Usuário verificado" width="15px" height="15px" className="ls-is-cached lazyloaded" />
                  </div>
                </div>
                <div className="flex justify-start text-sm">
                  <span className="whitespace-nowrap">após comprar</span>&nbsp;
                  <a href="/followers" className="font-extrabold" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">Seguidores Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ... More review items would go here ... */}

      </div>
      <div role="navigation" aria-label="Navegação da Paginação" className="flex items-center justify-between mt-2">
        <div className="flex flex-1 justify-between sm:hidden">
          <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 text-gray-700 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-700" disabled>« Anterior</button>
          <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 text-gray-700 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-700">Próxima »</button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm leading-5 text-gray-700">
              Mostrando<span> 1 </span>até<span> 8 </span>de<span> 84 </span>resultados
            </p>
          </div>
          <div>
            <span className="relative z-0 inline-flex rounded-md shadow-sm">
              <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm leading-5 text-gray-500 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-400 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-500" aria-label="« Anterior" disabled>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
              <button className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm leading-5 text-gray-700 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-500 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-700 bg-gray-100 font-semibold text-gray-500" aria-label="Ir para página 1">1</button>
              <button className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm leading-5 text-gray-700 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-500 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-700 " aria-label="Ir para página 2">2</button>
              <button className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm leading-5 text-gray-700 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-500 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-700 " aria-label="Ir para página 3">3</button>
              <span className="relative -ml-px inline-flex items-center border border-transparent bg-white px-4 py-2 text-sm leading-5 text-gray-700">...</span>
              <button className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm leading-5 text-gray-700 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-500 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-700 " aria-label="Ir para página 11">11</button>
              <button className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm leading-5 text-gray-500 ring-gray-300 transition duration-150 ease-in-out hover:text-gray-400 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring active:bg-gray-100 active:text-gray-500" aria-label="Próxima »">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Avaliacoes;

