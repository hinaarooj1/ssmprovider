import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import Header from '../components/Header';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Header />
      <div className="max-w-screen w-screen h-screen max-h-screen lg:overflow-hidden relative">
        <div className="bg-[#fff] shadow-2xl overflow-y-scroll shadow-black pb-3 pt-3 rounded-s-2xl log w-[85vw] lg:w-[40%] mt-20 lg:mt-28 2xl:mt-44 scroll-div lg:max-h-[70vh] 2xl:max-h-[50vh] flex flex-col px-10 mx-auto transition-all duration-200 ease-in-out transform" id="style-1">
          <h1 className="text-black text-2xl font-bold mb-5 lg:mb-14 text-center">Iniciar sessão no painel do cliente</h1>
          <form onSubmit={handleSubmit} className="flex flex-col z-40 items-center w-full gap-2">
            <div className="mb-4 w-full input-data">
              <input
                name="email"
                type="text"
                id="email"
                className="w-full p-2 border-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="underline"></div>
              <label htmlFor="email" className="block text-black">E-mail</label>
            </div>
            <div className="mb-4 w-full input-data">
              <input
                name="password"
                type="password"
                id="password"
                className="w-full p-2 border-2 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="underline"></div>
              <label htmlFor="password" className="block text-black">Senha</label>
            </div>
            <button type="submit" className="bg-green-500 text-white mx-auto w-fit font-bold mt-1 px-4 py-2 rounded-full">
              Iniciar sessão
            </button>
            <button className="outfit font-light underline text-red-400">
              Esqueceu sua senha ou não sabe?
            </button>
          </form>
          <div>
            <div className="flex flex-col mt-6 w-full gap-2 items-center content-center justify-center mx-auto">
              <InstagramServiceCard
                to="/followers"
                title="Seguidores Instagram"
                description="Serviços em promoção, clique aqui"
                discount="45% OFF"
                badge="CURTIDAS BONUS"
                icon={<UserGroupIcon />}
              />
              <InstagramServiceCard
                to="/instagram/curtidas"
                title="Curtidas Instagram"
                description="a partir de R$ 10,00"
                discount="34% OFF"
                badge="SALE POR HOJE!"
                icon={<HeartIcon />}
              />
              <InstagramServiceCard
                to="/instagram/views"
                title="Visualizações Stories Instagram"
                description="a partir de R$ 10,00"
                discount="35% OFF"
                badge="MAIS VENDIDO"
                icon={<PlusCircleIcon />}
              />
              <InstagramServiceCard
                to="/instagram/reels"
                title="Visualizações Reels Instagram"
                description="a partir de R$ 10,00"
                discount="20% OFF"
                badge="ENTREGA INMEDIATA"
                icon={<VideoIcon />}
              />
              <InstagramServiceCard
                to="/instagram/comentarios"
                title="Comentarios Instagram"
                description="a partir de R$ 8,90"
                discount="20% OFF"
                badge="ENTREGA INMEDIATA"
                icon={<CommentIcon />}
              />
            </div>
          </div>
        </div>
        <div className="absolute overflow-hidden elipse1 -z-10"></div>
        <div className="absolute overflow-hidden elipse2 -z-10"></div>
        <ToastContainer />
      </div>
    </>
  );
};

const InstagramServiceCard = ({ to, title, description, discount, badge, icon }) => (
  <Link to={to} className="pacoteCard-instagram !w-full">
    <div className="pacoteCard-svg">
      {icon}
    </div>
    <div className="pacoteCard-text">
      <h3 className="outfit">{title}</h3>
      <p className="outfit">
        {description} <span className="bg-[#c339ff] rounded-[20px] text-white py-0.5 px-1.5">{discount}</span>
      </p>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="16px" viewBox="0 0 10 16" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g id="Listview" transform="translate(-112.000000, -120.000000)" stroke="#A1A1A2" strokeWidth="2.178">
            <polyline id="Path" points="114 122 120 128 114 134"></polyline>
          </g>
        </g>
      </svg>
    </div>
    <div className="px-4 py-2 gradient absolute -right-4 rounded-t-xl rounded-e-xl -top-2 -rotate-0 text-xs h-min text-white font-semibold ubuntu">
      {badge}
    </div>
  </Link>
);

const UserGroupIcon = () => (
  <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
  </svg>
);

const HeartIcon = () => (
  <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
  </svg>
);

const PlusCircleIcon = () => (
  <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
  </svg>
);

const VideoIcon = () => (
  <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
  </svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" version="1.1" id="Layer_1" width="32px" height="32px" viewBox="796 796 200 200" enableBackground="new 796 796 200 200">
    <path d="M896.001,812.517c-55.23,0-100.001,31.369-100.001,70.071c0,18.018,9.72,34.439,25.67,46.851  c3.721,2.895,5.446,7.685,4.424,12.286l-6.872,30.926c-0.498,2.242,0.419,4.561,2.316,5.855c1.896,1.295,4.391,1.304,6.297,0.022  l36.909-24.804c3.238-2.176,7.17-3.074,11.032-2.516c6.532,0.945,13.294,1.448,20.226,1.448c55.227,0,99.999-31.37,99.999-70.069  C996,843.886,951.229,812.517,896.001,812.517z"></path>
  </svg>
);

export default Login;

