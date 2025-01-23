import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./mainCards.css";

const MainCards = () => {
  const [countTrigger, setCountTrigger] = useState(false);
  const sectionRef = useRef(null);

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
    <section className="main-cards" ref={sectionRef}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 m-auto thisd shadow-0 d-flex gap-4 py-3">
            {/* Card 1 */}
            <div className="card d-flex">
              <span>
                <i className="bi bi-gift-fill"></i>
              </span>
              <div className="">
                {countTrigger && (
                  <span className="font-bold poppins count">
                    <CountUp key={`card1-${countTrigger}`} end={98769} duration={2.5} />
                  </span>
                )}
                <br />
                <span className="poppins">Total de pedidos</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card">
              <span>
                <i className="bi bi-star-fill"></i>
              </span>
              <div className="">
                <span className="font-bold poppins">4.9</span>
                <br />
                <span className="poppins">Classificações de clientes</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card">
              <span>
                <i className="bi bi-people-fill"></i>
              </span>
              <div className="">
                {countTrigger && (
                  <span className="font-bold poppins count">
                    <CountUp key={`card2-${countTrigger}`} end={134456} duration={2.5} />
                  </span>
                )}
                <br />
                <span className="poppins">Numero de clientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCards;
