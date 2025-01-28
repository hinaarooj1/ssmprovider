import React, { createContext, useContext, useState, useEffect } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [checkoutData, setCheckoutData] = useState({
        selected: "",
        username: "",
        name: "",
        email: "",
        phone: "",
        cpf: "",
        packages: [],
        userInfo: [],
        paymentInfo: [],
        userProfile: "",
        totalPrice: "",

        // Stores selected packages
    });
    const [time, setTime] = useState(300); // 5 minutes in seconds
    console.log('checkoutData: ', checkoutData);

    // Function to update checkout data
    const updateCheckoutData = (field, value) => {
        setCheckoutData((prev) => ({ ...prev, [field]: value }));
    };

    // Timer logic - starts when username is set and continues until it reaches 0
    useEffect(() => {
        let interval;

        if (checkoutData.username) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime > 0) {
                        return prevTime - 1; // Decrease time by 1 second
                    } else {
                        clearInterval(interval); // Stop the timer at 0
                        return 0;
                    }
                });
            }, 1000);
        } else {
            setTime(0); // Reset the timer to 5 minutes if username is empty
        }

        // Cleanup the interval when username is empty or on component unmount
        return () => {
            clearInterval(interval);
        };
    }, [checkoutData.username]);

    // Format time as MM:SS
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    // Function to add a package (overwrites the existing packages)
    const addPackage = (newPackage) => {
        setCheckoutData((prev) => ({
            ...prev,
            packages: [newPackage], // Overwrite the packages array with the new package
        }));
    };
    const addInfo = (newPackage) => {
        setCheckoutData((prev) => ({
            ...prev,
            userInfo: [newPackage], // Overwrite the packages array with the new package
        }));
    };
    const addPaymentInfo = (newPackage) => {
        setCheckoutData((prev) => ({
            ...prev,
            paymentInfo: [newPackage], // Overwrite the packages array with the new package
        }));
    };

    return (
        <CheckoutContext.Provider
            value={{
                checkoutData,
                updateCheckoutData,
                addPackage,
                addInfo,
                addPaymentInfo,
                time: formatTime(time), // Provide formatted time
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => useContext(CheckoutContext);
