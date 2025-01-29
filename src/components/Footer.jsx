import { Link } from 'react-router-dom';
import './footer.css';
export default function Footer() {
  return (
    <footer className="bg-transparent mt-6 lg:mt-[180px]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="space-y-8">
            <Link to="/" className="flex items-center lg:justify-start justify-center gap-2">
              <figure className="w-36">
                <img className="w-full h-full object-contain" src="../logo-purple.png" />
              </figure>
            </Link>
            <address className="text-sm not-italic leading-6 text-gray-400">
              suporte@vocemaisengajado.com.br
            </address>
            <p className="pt-2 leading-6 text-gray-400 mt-0">
              <a href="https://www.instagram.com/vocemaisengajadooficial" className="flex items-center" target="_blank">
                <i className="bi bi-instagram"></i>
                <span className="ml-1 text-white">
                  vocemaisengajadooficial
                </span>
              </a>
            </p>
            <p className="pb-8 leading-6 text-gray-400 xl:pb-0 mt-[10px]">
              <a href="https://wa.me/5591989905821" className="flex justify-start"  >
                <img className="mt-1 h-4 w-4 lazyloaded" src="https://seguidores.storage.googleapis.com/images/whatsapp.svg" />
                <span className="ml-1 text-[#32ed87]">
                  (91) 98990-5821
                </span>
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Serviços
              </div>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to='/' className="text-base text-gray-300 hover:text-white">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/followers" className="text-base text-gray-300 hover:text-white">
                    Serviços
                  </Link>
                </li>

              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Informações
              </div>
              <p className='text-gray-400 mt-4'>Endereço: Passagem São Pedro Número 100 cep 67.145-050, Ananindeua-Pa - Brasil</p>
              {/* <ul className="mt-4 space-y-4">
                <li>
                  <button className="text-base text-gray-300 hover:text-white">
                    Suporte
                  </button>
                </li>
                <li>
                  <a className="text-base text-gray-300 hover:text-white" target="_blank">
                    Termos
                  </a>
                </li>
                <li>
                  <Link className="text-base text-gray-300 hover:text-white" to="/privacy-policy">
                    Privacidade
                  </Link>
                </li>
              </ul> */}
            </div>
            <figure className="mt-0 mb-auto col-span-2 lg:col-span-1">
              <img className="w-full h-full object-contain" src="../pagamento.webp" />
            </figure>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-12">

          <p className="text-center text-sm leading-6 text-gray-400">
            Copyright © 2024 - 2024 · VocêMaisEngajado.com.br
          </p>
          <div className="mt-2 text-center">
            <Link to="/privacy-policy" className="text-white text-decoration-none mx-2">Política de privacidade</Link>
            <span className="mx-2 khara">|</span>
            <Link to="/terms-of-use" className="text-white text-decoration-none mx-2">Termos de Uso e Compra</Link>
            <span className="mx-2 khara">|</span>
            <Link to="/cookie-policy" className="text-white text-decoration-none mx-2">Política de cookies</Link>
            <span className="mx-2 khara">|</span>
            <Link to="/disclaimer" className="text-white text-decoration-none mx-2">Termos de responsabilidade</Link>
          </div>
        </div>
      </div>
    </footer>


  );
}

