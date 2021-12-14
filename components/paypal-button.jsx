import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Script from 'next/script';



export default function paypalButton() {
    const initialOptions = {
        "client-id": "your-id",
        currency: "EUR",
        intent: "capture",
        "data-client-token": "abc123xyz==",
    };

    return (
      
        <PayPalScriptProvider options={{ "client-id": "your-id" }}>
            <PayPalButtons style={{ layout: "horizontal", color: "blue" }} />
            <PayPalButtons style={{ layout: "horizontal", color: "white"}} />
            
        </PayPalScriptProvider>
      
    );
}