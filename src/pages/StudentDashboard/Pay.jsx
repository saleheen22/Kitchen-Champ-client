import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pay = () => {
    const location = useLocation();
    const {price, _id, classId, classImg, className, instructorName} = location.state;
    // console.log()

   


    return (
        <div className='ms-52'>
            <h2>This is pay</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} id={_id} classId= {classId} image={classImg} className = {className} instructorName={instructorName}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pay;