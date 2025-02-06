import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

export default function Header() {
  const location = useLocation(); // Get the current path
  const currentPath = location.pathname;
  const [isActive, setIsActive] = useState(false);
  let toggleNav = () => {
    setIsActive(!isActive);
  }
  return (
    <>
      <nav className="navbar-new lg:gap-32 gap-2 !z-40 w-full md:!flex items-center justify-between">
        <div className="flex hidden-oon  items-center gap-2 !z-20 px-6">
          <Link to="/"> <figure className="h-12 min-w-[100px] md:max-w-none 2xl:h-16 mt-1">
            <img className="w-full h-full ml-0 mr-auto object-contain" src="../logo-white.png" />
          </figure></Link>
        </div>
        <div className="navbar-center  lg:shadow-nav">
          <div className={`${isActive ? "nab-act" : ""} bg-transparent no-nab md:px-0 px-6 flex-col md:flex-row flex gap-4 justify-center fixed md:static font-bold w-full md:pb-0 items-center !z-20`}>
            <Link
              className={`navlink-button ${currentPath === '/' ? 'selected-button-nav' : ''}`}
              to="/"
            >
              Home
            </Link>
            <a
              className={`navlink-button ${currentPath === '/followers' ? 'selected-button-nav' : ''}`}
              href="#offers"
            >
              Pacotes
            </a>
            <Link
              className={`navlink-button ${currentPath === '/faq' ? 'selected-button-nav' : ''}`}
              to="/faq"
            >
              F.A.Q
            </Link>
            <Link
              className={`navlink-button ${currentPath === '/avaliacoes' ? 'selected-button-nav' : ''}`}
              to="/avaliacoes"
            >
              Avaliacoes
            </Link>
            {/* <Link
              className={`navlink-button ${currentPath === '/tiktok/followers' ? 'selected-button-nav' : ''}`}
              to="/tiktok/followers"
            >
              TikTok!
            </Link> */}
            {/* <Link
              className={`navlink-button ${currentPath === '/dashboard' ? 'selected-button-nav' : ''}`}
              to="/dashboard"
            >
              Dashboard
            </Link> */}
          </div>
        </div>
        <div className="flex hidden-oon  items-center gap-2 !z-20">
          <button className="btn-buy">
            Comprar
          </button>
          {/* <a className="btn-log-ext">
            <span className="mdi mdi-account-key lg:hidden block">
            </span>
            <span className="block lg:hidden">
              Fazer
              login
            </span>
            <Link to="/login" className="lg:block text-white hidden log-span">
              Login
            </Link>
          </a> */}
        </div>
      </nav>
      <nav className={` ${isActive ? 'navact' : ""} md:!hidden navbar-old ubuntu flex flex-[1] false mt-2 items-center overflow-hidden !z-30 w-[98%] rounded-full -mt-3 lg:px-4 lg:w-[90%] mx-auto lg:mt-2 lg:border-[#a6ddd293] lg:border lg:rounded-[120px] lg:shadow-[#06D1A9] lg:shadow-nav`}>
        <div className="max-h-[40px] gap-2 !z-20 px-6 flex items-center">
          <figure className="h-[54px] w-[54px]  ml-0 mr-auto">
            <img className="w-full h-full object-contain" src="../rocket-3.png" />
          </figure>
        </div>
        <div className="hidden justify-end lg:flex !z-20">
          <div className="lg:bg-transparent lg:px-0 px-6 flex-col lg:flex-row flex gap-4 pb-5 fixed lg:static font-bold w-full lg:pb-0 bg-[#ffffff] pt-14 lg:pt-0 backdrop-blur-sm backdrop-null lg items-center rounded-b-3xl !z-20 lg:border-none border border-[#ffffff1b]">
            <a className="selected !text-gray-500 lg:!text-purple-400 navlink">
              Home
            </a>
            <a href="#offers" className="navlink nav-li">
              Pacotes
            </a>
            <a className="navlink nav-li">
              F.A.Q
            </a>
            <a className="navlink nav-li">
              Avaliacoes
            </a>
            <a className="navlink nav-li">
              TikTok!
            </a>
            <a href="https://wa.me/5591989905821" className="navlink lg:flex hidden items-center gap-2 bg-white rounded-lg px-2 py-1 hover:!text-purple-400 !text-purple-600 nav-li w-fit">
              <img className="h-4 w-4 lazyloaded" src="https://seguidores.storage.googleapis.com/images/whatsapp.svg" />
              <span>
                (91) 98990-5821
              </span>
            </a>
            <a className="navlink nav-li">
              Dashboard
            </a>
            <a className="log-btn ({isActive:t})=>t?hc:&quot;navlink nav-li&quot;">
              <span className="mdi mdi-account-key lg:hidden block">
              </span>
              <span className="block lg:hidden">
                Fazer login
              </span>
              <Link to="/login" className="lg:block hidden log-span">
                Login
              </Link>
            </a>
          </div>
        </div>
        <div className="flex w-[75px] gap-6 justify-end mr-6 items-center lg:hidden !z-20">
          <a href="https://wa.me/5591989905821" target='_blank' className>
            <img className="h-4 w-4 lazyloaded" src="https://seguidores.storage.googleapis.com/images/whatsapp.svg" />
          </a>
          <button className={`${isActive ? "text-black" : 'text-white '}`} onClick={toggleNav}>
            <svg className="lucide lucide-menu" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
              <line x1={4} x2={20} y1={12} y2={12}>
              </line>
              <line x1={4} x2={20} y1={6} y2={6}>
              </line>
              <line x1={4} x2={20} y1={18} y2={18}>
              </line>
            </svg>
          </button>
        </div>
        <div className="absolute h-[220%] md:hidden w-full z-10">
          <svg className="absolute h-full w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,176C672,192,768,192,864,192C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#fff" fillOpacity="0.2">
            </path>
          </svg>
          <svg className="absolute h-full w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,144C672,128,768,96,864,69.3C960,43,1056,21,1152,32C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff" fillOpacity="0.15">
            </path>
          </svg>
          <svg className="absolute h-full w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0L48,5.3C96,11,192,21,288,42.7C384,64,480,96,576,112C672,128,768,128,864,128C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff" fillOpacity="0.3">
            </path>
          </svg>
        </div>
      </nav>
    </>
  );
}
