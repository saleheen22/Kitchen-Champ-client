import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pay = () => {
    const location = useLocation();
    const {price, _id} = location.state;
    console.log(price, _id);
   


    return (
        <div className='ms-52'>
            <h2>This is pay</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} id={_id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pay;