import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const popups = [
    { name: "Melissa", action: "comprou 5000 seguidores", time: "14 minutos", link: "/followers" },
    { name: "Lucas", action: "comprou 2000 curtidas", link: "/instagram/curtidas", time: "8 minutos" },
    { name: "Sofia", action: "comprou 10.000 seguidores", link: "/followers", time: "20 minutos" },
    { name: "Carlos", action: "comprou 1000 visualizações", time: "5 minutos", link: "/instagram/reels" },
    { name: "Novo pedido", action: "comprou 5000 visualizações", time: "5 minutos", link: "/instagram/reels" },
    { name: "Fernanda", action: "comprou 3000 curtidas", link: "/instagram/curtidas", time: "12 minutos" },
    { name: "João", action: "comprou 7500 seguidores", link: "/followers", time: "10 minutos" },
    { name: "Beatriz", action: "comprou 1200 curtidas", link: "/instagram/curtidas", time: "7 minutos" },
    { name: "Gabriela", action: "comprou 1500 curtidas", link: "/instagram/curtidas", time: "9 minutos" },
    { name: "Roberto", action: "comprou 6500 seguidores", link: "/followers", time: "11 minutos" },
    { name: "Juliana", action: "comprou 900 curtidas", link: "/instagram/curtidas", time: "6 minutos" },
    { name: "Eduardo", action: "comprou 4200 seguidores", link: "/followers", time: "16 minutos" },
    { name: "Camila", action: "comprou 2300 curtidas", link: "/instagram/curtidas", time: "13 minutos" },
    { name: "Ana", action: "comprou 400 seguidores", link: "/followers", time: "3 minutos" }
];

const BottomBar = () => {
    const [isBottom, setIsBottom] = useState(true);
    const [randomPopup, setRandomPopup] = useState(popups[0]);

    useEffect(() => {
        // Pick a random popup on refresh
        const randomIndex = Math.floor(Math.random() * popups.length);
        setRandomPopup(popups[randomIndex]);

        // Show the popup
        setIsBottom(true);

        // Auto-hide after 15 seconds
        const timer = setTimeout(() => {
            setIsBottom(false);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-4 z-50 mx-4">
            {isBottom && (
                <div className="flex h-min w-full items-center space-x-4 rounded-lg border bg-white p-2 shadow-lg lg:w-[350px]">
                    <img className="h-16 w-16" src="../instagram-notificacao.svg?" alt="notification" />
                    <div className="flex flex-col text-xs">
                        <p className="text-base font-bold text-purple-600">Novo pedido</p>
                        <div>
                            <p>
                                <span className="font-bold text-purple-600">{randomPopup.name}</span> {randomPopup.action}
                            </p>
                            <div className="flex flex-col">
                                <div className="mt-1 flex items-center">
                                    <span className="mr-2 text-gray-500">Há {randomPopup.time}</span>
                                </div>
                                <div className="mt-2">
                                    <Link to="/followers" className="text-purple-600 hover:underline">
                                        Ver pacotes ➜
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span
                        onClick={() => setIsBottom(false)}
                        className="absolute right-2 top-2 cursor-pointer text-gray-500"
                    >
                        ✖
                    </span>
                </div>
            )}
        </div>
    );
};

export default BottomBar;
