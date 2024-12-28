import React from 'react';
import './iphone.css'; // Import the CSS file

const Iphone = () => {
  return (
    <div className="custom-container py-5">
      {/* Figure with image */}
      <figure className="custom-figure">
        <img
          src="../iPhone.png"
          className="custom-image"
          alt="iPhone"
        />
      </figure>

      {/* Text layer 1 */}
      <div className="custom-text-layer">
        <h1 className="custom-heading opcion">
          Sua melhor{' '}
          <span className="custom-highlight">escolha.</span>
        </h1>
      </div>

      {/* Text layer 2 */}
      <div className="custom-text-layer-2">
        <h1 className="custom-heading-2">
          Sua melhor{' '}
          <span className="custom-transparent">escolha.</span>
        </h1>
      </div>

      {/* Decorative div */}
      <div className="custom-decorative"></div>
    </div>
  );
};

export default Iphone;
