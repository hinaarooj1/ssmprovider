import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BottomBar = () => {
    const [isBottom, setisBottom] = useState(true);
    let toggleHide = () => {
        setisBottom(false)
    }
    setTimeout(() => {
        setisBottom(false)

    }, 15000);
    useEffect(() => {

        setisBottom(true)
    }, []);

    return (
        <div className="fixed bottom-4 z-50 mx-4">
            {isBottom &&
                <div className={`flex h-min w-full items-center space-x-4 rounded-lg border bg-white p-2 shadow-lg lg:w-[350px]  `}>
                    <img className="h-16 w-16" src="../instagram-notificacao.svg?" />
                    <div className="flex flex-col text-xs">
                        <p className="text-base font-bold text-purple-600">
                            Novo pedido
                        </p>
                        <div>
                            <p>
                                <a className="font-bold text-purple-600 hover:underline">
                                    Melissa comprou 5000 seguidores
                                </a>
                            </p>
                            <div className="flex flex-col">
                                <div className="mt-1 flex items-center">
                                    <span className="mr-2 text-gray-500">
                                        Há 14 minutos
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <Link to="/followers" className="text-purple-600 hover:underline">
                                        Ver pacotes ➜
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span onClick={toggleHide} className="absolute right-2 top-2 cursor-pointer text-gray-500">
                        ✖
                    </span>


                </div>
            }
        </div>


    );
}

export default BottomBar;
