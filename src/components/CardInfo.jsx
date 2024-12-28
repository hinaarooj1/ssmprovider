import React from 'react';
import './cardInfo.css';

const CardInfo = () => {
  return (
    <section className="px-4 lg:px-24 2xl:px-28 mt-20 info-section">
    <div className="container-fluid pb-5">
    <div className="row">
    <div className="col-md-11 m-auto">
      <div className="card-info w-100 bg-opacity-20 bg-primary rounded-3xl border text-white">
        <h1 className="font-bold text-center text-xl lg:text-4xl p-4">
          Desde 2014, mais de <span className="text-warning font-bold">46.392</span> clientes{' '}
          <span className="text-warning font-bold">satisfeitos</span> já impulsionaram suas{' '}
          <span className="text-warning font-bold">contas no Instagram!</span>
        </h1>
        <div className="text-center mt-4">
          <button className="btn btn-purple rounded-pill d-inline-flex align-items-center fw-bold">
            Nossos serviços
            <i className="bi bi-arrow-right-short fs-3"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default CardInfo;
