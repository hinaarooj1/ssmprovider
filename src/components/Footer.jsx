import { Link } from 'react-router-dom';
import './footer.css';
export default function Footer() {
  return (
    <footer className="text-white p-5">
      <div className="container-fluid">
        <div className="row">
          {/* Logo Column */}
          <div className="col-12 col-md-3 mb-4">
            <div className="logo mb-3">
              <img src="/Engaja.png" alt="Engaja Logo" height="50" />
            </div>
            <div className="contact-info">
              <p className="mb-4">suporte@vocemaisengajado.com.br</p>
              <p className="mb-4">
                <a href="https://wa.me/5591989905821" className="wa text-white text-decoration-none">
                  <i className="bi bi-whatsapp"></i> (91) 98990-5821
                </a>
              </p>
              <p className="mb-4">
                <a href="https://www.instagram.com/vocemaisengajadooficial" className="text-white text-decoration-none">
                  <i className="bi bi-instagram"></i>  vocemaisengajadooficial
                </a>
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-4">Serviços</h5>
            <ul className="list-unstyled">
              <li className="mb-4"><a href="#" className="text-white text-decoration-none">Início</a></li>
              <li className="mb-4"><a href="#" className="text-white text-decoration-none">Serviços</a></li>
              <li className="mb-4"><a href="#" className="text-white text-decoration-none">Mais vendido</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-4">Informações</h5>
            <ul className="list-unstyled">
              <li className="mb-4"><a href="#" className="text-white text-decoration-none">Suporte</a></li>
              <li className="mb-4"><a href="#" className="text-white text-decoration-none">Termos</a></li>
              <li className="mb-4"><Link to="/privacy-policy" className="text-white text-decoration-none">Privacidade</Link></li>
            </ul>
          </div>

          {/* Payment Methods Column */}
          <div className="col-12 col-md-3 mb-4">
            <div className="payment-methods">
              <img src="/pagamento.webp" alt="Métodos de Pagamento" className="img-fluid mb-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar mt-4 pt-3 border-top">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <small>
                Copyright © 2024 - {new Date().getFullYear()} - VocêMaisEngajado.com.br
              </small>
              <div className="mt-2">
                <Link to="/privacy-policy" className="text-white text-decoration-none mx-2">Política de privacidade</Link>
                <span className="mx-2">|</span>
                <Link to="/terms-of-use" className="text-white text-decoration-none mx-2">Termos de Uso e Compra</Link>
                <span className="mx-2">|</span>
                <Link to="/cookie-policy" className="text-white text-decoration-none mx-2">Política de cookies</Link>
                <span className="mx-2">|</span>
                <Link to="/disclaimer" className="text-white text-decoration-none mx-2">Termos de responsabilidade</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

