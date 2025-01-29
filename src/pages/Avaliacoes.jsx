import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './avaliacoes.css';
import { Link } from 'react-router-dom';
import BottomBar from '../components/bottomBar';


const Avaliacoes = () => {
  return (
    <div className='its-main'>
      <Header />
      <main className="lg:pt-[84px] 2xl:pt-[10%] !z-20 pt-[90px] text-white lg:px-16 2xl:px-24">
        <div className="flex my-auto w-full flex-col lg:flex-row gap-8 items-center">
          <div className="lg:max-w-[55%] px-10 md:px-1 2xl:max-w-[60%] flex flex-col my-auto h-full gap-0 sm:gap-5 lg:gap-12 pb-3">
            <div>
              <h1 className="xl:leading-title montserrat text-2xl font-extrabold md:text-3xl xl:text-7xl xl:tracking-tight">
                VoceMaisEngajado é confiável? Veja Avaliações
              </h1>
              <div className="mt-4 flex justify-center text-sm md:mt-6 md:text-lg lg:justify-start xl:text-2xl 2xl:text-3xl">
                <div className="mr-4 text-yellow-400">
                  ★★★★★
                </div>
                <div className="whitespace-nowrap font-semibold">
                  4960 Avaliações Verificadas
                </div>
              </div>
              <p className="mt-4 opacity-60 montserrat">
                VoceMaisEngajado é a solução confiável para impulsionar o engajamento nas redes sociais. Com um compromisso firme com a transparência e a segurança, oferecemos serviços de alta qualidade para aumentar seguidores, curtidas, comentários e compartilhamentos de forma autêntica e eficaz. Nossa abordagem ética garante resultados reais e duradouros, enquanto nossa equipe de especialistas oferece suporte personalizado para atender suas necessidades específicas. Confie na VoceMaisEngajado para fortalecer sua presença online e alcançar seus objetivos de marketing digital com confiança.
              </p>
              <svg aria-hidden="true" className="h-6 w-6 mx-auto mt-10 animate-bounce" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" fill="currentColor">
                </path>
              </svg>
            </div>
          </div>
          <div className="flex my-auto w-full flex-col lg:flex-row gap-8 items-center">
            <figure className="w-80 mx-auto rotate-12">
              <img className="object-contain h-full w-full" src="../icon-social.png" />
            </figure>
          </div>
        </div>
      </main>

      <svg className="waves bg-[#5E05F2] rotate-0 -mt-2 z-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs><g className="parallax"><use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(86,11,131,0.4)" /><use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.05)" /><use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.01)" /><use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" /></g></svg>

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
              <Link to="/followers" className="mr-3 flex items-center" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">
                <img className="ls-is-cached lazyloaded" alt="ícone produto" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" srcSet="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
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
                    <Link to="/followers" className="font-extrabold" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">Seguidores Instagram</Link>
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
              <Link to="/followers" className="mr-3 flex items-center" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">
                <img className="ls-is-cached lazyloaded" alt="ícone produto" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" srcSet="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
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
                    <Link to="/followers" className="font-extrabold" title="Comprar Seguidores Instagram | Seguidores Reais e Baratos">Seguidores Instagram</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              M.Z
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              Serviço eficiente e bem pontual, suporte prestativo nota 10 🌟
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por M.Z
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 27/06/2024{" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ... More review items would go here ... */}
          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              Matheus
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              Tudo certo
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por Matheus
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 26/06/2024
                        {" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... More review items would go here ... */}
          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              CURTIDAS NO INSTAGRAM
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              NOTA 10 ! SERVIÇO RÁPIDO. RECOMENDO COM CERTEZA !
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por CURTIDAS NO INSTAGRAM
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 10/06/2024
                        {" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... More review items would go here ... */}
          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              350 seguidores Antes
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              Agora tenho 3553 , mudou totalmente meu alcance para conseguir clientes
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por 350 seguidores Antes
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 13/11/2024
                        {" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... More review items would go here ... */}
          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              Realmente funciona
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              Antes eu tinha poucos seguidores e ter seguidores faz toda diferença
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por Realmente funciona
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 20/11/2024
                        {" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... More review items would go here ... */}
          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              Carina
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              Meu perfil tinha poucos seguidores, após comprar 300 seguidores meu perfil teve mais interações. Comprei seguidores e meu perfil ganhou de brinde visualização dos stories, curtidas...Enfim, o site entrega mais que o prometido. Super indico!
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por Carina
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 27/11/2024
                        {" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... More review items would go here ... */}
          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              Confiança
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              Rápido, eficiente e confiança vc adquire nessa plataforma.
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por Confiança
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 04/12/2024
                        {" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... More review items would go here ... */}
          {/* ... More review items would go here ... */}
          <div className="flex transform flex-col rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
            <b className="text-lg font-extrabold text-gray-700">
              Serviço rápido e muito confiável
            </b>
            <div className="my-1 flex flex-row text-xl text-yellow-400">
              ★★★★★
              <span className="sr-only">
                25 de 5 estrelas
              </span>
            </div>
            <blockquote className="prose text-gray-600">
              Eu tinha 800 seguidores em poucos minutos fui pra 3 mil. Comprei 2.500 seguidores e chegou muito rápido. Minha conta melhorou mto após a compra minhas clientes piram quando vêem que tenho mais de 3 mil seguidores ❤️
            </blockquote>
            <div className="mt-2 flex flex-row">
              <Link to="/followers" className="mr-3 flex items-center">
                <img className="ls-is-cached lazyloaded" width="44px" height="44px" src="https://seguidores.storage.googleapis.com/images/menu-comprar-seguidores-instagram.svg?v=6" />
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-start text-sm">
                    <div>
                      por Serviço rápido e muito confiável
                    </div>
                    <div className="flex justify-start">
                      <abbr style={{ textDecoration: 'none' }}>
                        em 18/12/2024
                        {" "}
                      </abbr>&nbsp;
                      <img className="ls-is-cached lazyloaded" width="15px" height="15px" src="https://seguidores.storage.googleapis.com/images/user-verified.svg" />
                    </div>
                  </div>
                  <div className="flex justify-start text-sm">
                    <span className="whitespace-nowrap">
                      após comprar
                    </span>&nbsp;
                    <Link to="/followers" className="font-extrabold">
                      Seguidores Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... More review items would go here ... */}

        </div>

      </div>
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Avaliacoes;

