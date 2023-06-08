import { Helmet } from 'react-helmet-async';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kitchen Champ || Home</title>
            </Helmet>
          

            <div className='mt-10'>
            <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;