import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Footer from "../components/Footer";
import { useCheckout } from "../context/CheckoutContext";
import TimerHead from "../components/TimerHead";
import "./pending.css";
import { toast } from "react-toastify";
import axios from 'axios'
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/constant";
const Pending = () => {
    const { checkoutData } = useCheckout();
    const [isLoading, setisLoading] = useState(true);
    const [payStatus, setpayStatus] = useState(false);
    const [isDone, setisDone] = useState({ status: "ACTIVE" });
    const checkStatus = async () => {

        console.log(checkoutData);
        if (!checkoutData.username || !checkoutData.name || !checkoutData.email || !checkoutData.phone || checkoutData.packages.length == 0 || checkoutData.userInfo.length == 0

        ) {
            return
        }

        // will be moved


        try {
            let formData = {
                correlationID: checkoutData.correlationID,
            };

            try {
                const res = await axios.post(`${baseUrl}/openpix/webhook`, formData);
                checkoutData.packages[0]
                const charge = res.data.resposne.charges.find(charge => charge.correlationID === checkoutData.correlationID);
                console.log('charge: ', charge);

                if (charge) {

                    if (charge.status === "ACTIVE") {
                        setpayStatus(true)
                        setisDone({ status: "PAID" })  // Stop polling when paid
                        console.log("Payment completed! Proceeding with order...");

                        let serviceID = "";
                        let quantity = "";
                        let link = "";
                        const formatNumber = (value) =>
                            typeof value === "string" ? parseInt(value.replace(/\./g, ""), 10) : value;
                        if (checkoutData.selected === "followers") {
                            link = checkoutData.username;
                            let followers = formatNumber(checkoutData.packages[0].followers);



                            if (followers === 100) {
                                serviceID = 3878;
                                quantity = 110;
                            } else if (followers === 600) {
                                serviceID = 4112;
                                quantity = 660;
                            } else if (followers === 3000) {
                                serviceID = 6178;
                                quantity = 3000;
                            } else {
                                serviceID = 6178;
                                quantity = followers;
                            }
                        } else if (checkoutData.selected === "likes") {
                            link = checkoutData.link;
                            serviceID = 4379;
                            quantity = formatNumber(checkoutData.packages[0].likes);
                        } else if (checkoutData.selected === "story views") {
                            link = checkoutData.link;
                            serviceID = 1339;
                            quantity = formatNumber(checkoutData.packages[0].likes);
                        } else if (checkoutData.selected === "reel views") {
                            link = checkoutData.link;
                            serviceID = 5528;
                            quantity = formatNumber(checkoutData.packages[0].likes);
                        } else if (checkoutData.selected === "comments") {
                            link = checkoutData.link;
                            serviceID = 5502;
                            quantity = "checkoutData.commentContent";
                        }

                        const orderData = {
                            serviceID,
                            link,
                            quantity
                        };

                        // Call the second API to create the order
                        const orderRes = await axios.post(`${baseUrl}/raja/create-order`, orderData);
                        console.log('orderRes: ', orderRes);


                        console.log('orderRes.data.response.order: ', orderRes.data.response.order);
                        if (orderRes.data.success && orderRes.data.response.order) {
                            toast.success("Pedido concluído com sucesso");
                            setTimeout(() => {

                                setisDone({ status: "COMPLETED" });
                            }, 4000);

                        } else {
                            toast.error("Falha ao criar ordem.");
                            console.error("Order API error:", orderRes.data.error);
                        }
                    } else if (charge.status === "EXPIRED" || charge === undefined || charge === null) {
                        setisDone({ status: "EXPIRED" })
                        console.log("Payment is expired...");
                    }
                } else {
                    setisDone({ status: "EXPIRED" })
                    console.log("No charge found for the given correlationID.");
                }
            } catch (error) {
                console.error("Error while checking payment status:", error);
            }
            // Check every 5 seconds

        } catch (err) {
            toast.error("Ocorreu um erro ao realizar o pedido.");
            console.error("Error in API call:", err);
        } finally {
            setisLoading(false);
        }
    }
    console.log(isDone);
    useEffect(() => {

        checkStatus()
    }, []);
    useEffect(() => {
        let intervalId;

        // Function to start checking payment status every 5 seconds
        const startCheckingStatus = () => {
            if (!payStatus) {
                console.log("run it");
                intervalId = setInterval(() => {
                    checkStatus();
                }, 5000); // Check every 5 seconds
            }
        };

        startCheckingStatus();

        // Cleanup function
        return () => {
            clearInterval(intervalId); // Clear the interval when component unmounts
        };
    }, [payStatus]);
    // useEffect(() => {
    //     const paymentInterval = setInterval(checkPaymentStatus, 5000); // Check every 5s
    //     return () => clearInterval(paymentInterval); // Cleanup on unmount
    // }, []);
    return (
        <>
            <div className="min-h-screen w-screen overflow-hidden relative">
                <TimerHead />

                {checkoutData.name !== "" && checkoutData.paymentInfo?.length > 0 ? (
                    isDone.status === "ACTIVE" ?
                        <div
                            className="lg:w-[550px] min-h-fit mx-auto w-fit flex-col rounded-2xl py-6 z-40 border-purple-400 border backdrop-blur-xl lg:mt-12 px-10 items-center flex bg-[#f4f4f4] gap-2 "
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
                        : isDone.status === "PAID" ?
                            <div
                                className="lg:w-[550px] min-h-fit mx-auto w-fit flex-col rounded-2xl py-6 z-40 border-purple-400 border backdrop-blur-xl lg:mt-12 px-10 items-center flex bg-[#f4f4f4] gap-2 "
                                id="payment-info"
                            >
                                <div className="w-full text-center flex flex-col items-center">
                                    <h1 className="font-bold text-[#6c18cd] text-xl">
                                        Pagamento concluído com sucesso, estamos processando seu pedido
                                    </h1>



                                </div>
                            </div> : isDone.status === "EXPIRED" ? <div
                                className="lg:w-[550px] min-h-fit mx-auto w-fit flex-col rounded-2xl py-6 z-40 border-purple-400 border backdrop-blur-xl lg:mt-12 px-10 items-center flex bg-[#f4f4f4] gap-2 "
                                id="payment-info"
                            >
                                <div className="w-full text-center flex flex-col items-center">
                                    <h1 className="font-bold text-[#6c18cd] text-xl">
                                        O pagamento expirou ou nenhuma cobrança foi encontrada
                                    </h1>

                                    <Link to="/" type="button" className="pix-code mt-5">

                                        Back to home
                                    </Link>

                                </div>
                            </div> : isDone.status === "COMPLETED" ? <div
                                className="lg:w-[550px] min-h-fit mx-auto w-fit flex-col rounded-2xl py-6 z-40 border-purple-400 border backdrop-blur-xl lg:mt-12 px-10 items-center flex bg-[#f4f4f4] gap-2 "
                                id="payment-info"
                            >
                                <div className="w-full text-center flex flex-col items-center">
                                    <h1 className="font-bold text-[#6c18cd] text-xl">
                                        Pedido concluído com sucesso
                                    </h1>

                                    <Link to="/" type="button" className="pix-code mt-5">

                                        Back to home
                                    </Link>

                                </div>
                            </div> : ""
                ) : null}
            </div>
            <Footer />
        </>
    );
};

export default Pending;
