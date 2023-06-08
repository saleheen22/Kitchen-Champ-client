import { Helmet } from 'react-helmet-async';
import Slider from './Slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kitchen Champ || Home</title>
            </Helmet>
          

            <div className='mt-10'>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            </div>
        </div>
    );
};

export default Home;