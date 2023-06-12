import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../hooks/useCart';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pay = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum+ item.price, 0);
    const price = parseFloat(total.toFixed(2))
    console.log('this is cart', cart)
    return (
        <div className='ms-52'>
            <h2>This is pay</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pay;