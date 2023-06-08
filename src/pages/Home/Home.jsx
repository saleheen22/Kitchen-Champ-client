import { Helmet } from 'react-helmet-async';
import Slider from './Slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Helmet>
                <title>Kitchen Champ || Home</title>
            </Helmet>
          

            <div className='mt-10'>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;