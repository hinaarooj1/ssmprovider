import React from "react";
import "./Checkout.css";
import Footer from "../components/Footer";
import { useCheckout } from "../context/CheckoutContext";
import TimerHead from "../components/TimerHead";
import "./pending.css";
import { toast } from "react-toastify";

const Pending = () => {
    const { checkoutData } = useCheckout();
    console.log('aacheckoutData: ', checkoutData);

    return (
        <>
            <div className="min-h-screen w-screen overflow-hidden relative">
                <TimerHead />

                {checkoutData.name !== "" && checkoutData.paymentInfo?.length > 0 ? (
                    <div
                        className="lg:w-[550px] min-h-fit mx-auto w-fit flex-col rounded-2xl py-6 z-40 border-purple-400 border backdrop-blur-xl lg:mt-12 px-10 items-center flex bg-[#f4f4f4] gap-2 animate__animated animate__flipInX"
                        id="payment-info"
                    >
                        <div className="w-full text-center flex flex-col items-center">
                            <h1 className="font-bold text-[#6c18cd] text-xl">
                                {checkoutData.name}, falta pouco!
                                <br />
                                Agora finalize o pagamento:
                            </h1>
                            <ol className="list-numbered mt-6">
                                <li>
                                    Clique no botão abaixo para copiar o seu código Pix.
                                </li>
                                <li>
                                    Abra o aplicativo do seu banco e entre na opção Pix.
                                </li>
                                <li>
                                    Escolha a opção Pagar, cole o código e finalize o pagamento.
                                </li>
                                <li className="font-semibold text-fuchsia-700">
                                    Após efetuar o pagamento,{" "}
                                    <span className="underline underline-offset-4 text-fuchsia-400">
                                        retorne ao site
                                    </span>{" "}
                                    para confirmar o pedido.
                                </li>
                            </ol>
                            <div className="dot-flashing my-6"></div>
                            <button onClick={() => {
                                const brCode = checkoutData.paymentInfo[0].brCode;
                                if (brCode) {
                                    navigator.clipboard.writeText(brCode)
                                        .then(() => toast.success('Código Pix copiado com sucesso!'))
                                        .catch(err => console.error('Erro ao copiar o código Pix:', err));
                                } else {
                                    toast.error('Nenhum código Pix disponível para copiar.');
                                }
                            }} type="button" className="pix-code mt-5">
                                <svg
                                    height={24}
                                    viewBox="0 0 24 24"
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
                                        fill="#fff"
                                    ></path>
                                </svg>
                                Copiar código Pix
                            </button>
                            <span className="qr-code">
                                {checkoutData.paymentInfo[0].brCode}
                            </span>
                            <span className="mt-4">
                                Valor:{" "}
                                <span className="mt-2 font-light">
                                    {checkoutData.totalPrice || "197.9"}
                                </span>
                            </span>
                            <span className="font-bold mt-5">QR CODE</span>
                            <figure className="h-80 mt-1">
                                <img
                                    className="w-full h-full object-cover"
                                    src={checkoutData.paymentInfo[0].qrCodeImage}
                                    alt="QR Code"
                                />
                            </figure>
                        </div>
                    </div>
                ) : null}
            </div>
            <Footer />
        </>
    );
};

export default Pending;
