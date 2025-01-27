import React from 'react';
import './iphone.css'; // Import the CSS file

const Iphone = () => {
  return (
    // <div className="flex items-center lg:w-[700px] relative mx-auto">
    //   <figure className="mx-auto w-[80%] lg:w-[300px] z-10 -rotate-15 mt-10">
    //     <img className="w-full h-full object-cover" src="../iPhone.png" />
    //   </figure>
    //   <div className="absolute w-full z-20 elip">
    //     <h1 className="text-4xl lg:text-6xl ml- text-center mr-auto text-transparent opcion font-semibold">
    //       Vamos Bombar sua <span className="text-white no-stroke lg:text-[#C952D7]">
    //         Rede Social
    //       </span>
    //     </h1>
    //   </div>
    //   <div className="absolute w-full">
    //     <h1 className="text-4xl lg:text-6xl ml- text-center mr-auto text-white font-semibold">
    //       Vamos Bombar sua <span className="text-transparent">
    //         Rede Social
    //       </span>
    //     </h1>
    //   </div>
    //   <div className="-z-10 lg:left-[200px] lg:w-[205px] w-full lg:top-0 top-[50px] elipse309">
    //   </div>
    // </div>
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
          Vamos Bombar sua {' '}
          <span className="custom-highlight">Rede Social</span>
        </h1>
      </div>

      {/* Text layer 2 */}
      <div className="custom-text-layer-2">
        <h1 className="custom-heading-2">
          Vamos Bombar sua {' '}
          <span className="custom-transparent">Rede Social</span>
        </h1>
      </div>

      {/* Decorative div */}
      <div className="custom-decorative"></div>
    </div>
  );
};

export default Iphone;
