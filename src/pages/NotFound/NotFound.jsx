import { Link } from 'react-router-dom';
import logo from '../../../public/logo/404page.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='mx-auto '>
            <img className='h-96 w-96 mx-auto' src={logo} alt="" />
            <div className='mx-auto ms-96 ps-64'>
            <Link to="/"  ><button className='btn btn-success '>Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;