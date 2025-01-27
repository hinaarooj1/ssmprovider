import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { CheckoutProvider } from "./context/CheckoutContext";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckoutProvider>
      <App />
      <ToastContainer
        position="bottom-center"
        transition={Slide}
        autoClose={2000}
        closeButton={false}
        pauseOnFocusLoss={false}
        theme="colored"
      />
    </CheckoutProvider>
  </StrictMode>,
)
