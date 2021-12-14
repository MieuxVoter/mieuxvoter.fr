import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Script from 'next/script';



export default function paypalButton() {
    const initialOptions = {
        "client-id": "AQXcvapvn8rfiK3idXXfXdJLRnF42WYNUANbV9uj7bn1SbztIfYj2Q-l0v2JERL-imtZrbZC7Ai2Jikv",
        currency: "EUR",
        intent: "capture",
        "data-client-token": "abc123xyz==",
    };

    return (
      
        <PayPalScriptProvider options={{ "client-id": "AQXcvapvn8rfiK3idXXfXdJLRnF42WYNUANbV9uj7bn1SbztIfYj2Q-l0v2JERL-imtZrbZC7Ai2Jikv" }}>
            <PayPalButtons style={{ layout: "horizontal", color: "blue" }} />
            <PayPalButtons style={{ layout: "horizontal", color: "white"}} />
            
        </PayPalScriptProvider>
      
    );
}