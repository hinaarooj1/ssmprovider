import React, { useContext } from "react";
import { useCheckout } from "../context/CheckoutContext"; // Hook for route tracking

const TimerHead = () => {

    const { time } = useCheckout();

    return (
        <>
            <div className="bg-green-400 py-2 gap-2 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
                    <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm-.548 15l-3.452-3.362 1.237-1.239 2.215 2.123 4.382-4.475 1.238 1.238-5.62 5.715z"></path>
                </svg>
                <span className="text-white font-extrabold text-base">COMPRA 100% SEGURA</span>
            </div>
            <div className="bg-red-700 text-yellow-300 py-2 px-4 gap-2 w-full items-center flex justify-center">
                <div className="flex gap-1 items-center">
                    <span className="time text-lg font-semibold">{time}</span>
                    <figure className="w-6">
                        <img src="../wait.gif" alt="" className="w-full h-full" />
                    </figure>
                </div>
                <span className="font-normal text-base">Estamos aguardando sua confirmação... Não perca essa oferta!</span>
            </div>
            <ul className="w-full flex h-1 bg-[#b5b5b58e]">
                <li className="w-1/3 h-full bg-green-400 ml-0 mr-auto"></li>
            </ul>
        </>
    );
};

export default TimerHead;
