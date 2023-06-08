import { Helmet } from 'react-helmet-async';
import Slider from './Slider/Slider';
import PopularClass from './PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kitchen Champ || Home</title>
            </Helmet>
          

            <div className='mt-10'>
            <Slider></Slider>
            <PopularClass></PopularClass>
            </div>
        </div>
    );
};

export default Home;