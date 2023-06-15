import './Slider.css';
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gif from '../../../../public/logo/chef1.png'
import gif2 from '../../../../public/logo/multiple-chefs.png'
import gif1 from '../../../../public/logo/chef.png'
import { Link } from 'react-router-dom';

const Slider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className='mb-10 mt-28  text-white'>
            <Slider1 {...settings}>
      <div className='slider '>
      <div className='grid md:grid-cols-2'>
      <div className='md:w-3/4 pt-14 md:pt-24 md:mx-auto text-justify  mx-14 '>
       <p>Attention students! Do not let your summer break slip away. Turn it into a productive culinary exploration with Kitchen Champ. Hone your cooking skills, expand culinary knowledge, and unleash creativity in the kitchen. Gain confidence as you whip up mouthwatering dishes, impressing family and friends. Whether a beginner or budding chef, Kitchen Champ offers a summer of culinary growth, inspiration, and delicious achievements. Transform your break into a memorable culinary adventure!</p>
       <Link to = "/classes"> <button className='btn btn-warning mt-4 mb-4'> Enroll Now </button></Link>
      </div>
      
          <div className='ms-10 order-first md:order-last'>

            <div className='grid grid-cols-2'>
            <img className='gif' src={gif1} alt="" />
            <img className='gif' src={gif} alt="" />
            </div>
          </div>
      </div>
        
      </div>
      <div className='slider '>
      <div className='grid md:grid-cols-2'>
      <div className='md:w-3/4 pt-14 md:pt-24 md:mx-auto text-justify  mx-14 h-1/2'>
       <p>Embark on a culinary adventure guided by acclaimed chefs from five-star hotels. Our renowned instructors, including Michelin-starred chefs and culinary competition winners, bring their expertise and passion to your kitchen. Learn their specialty dishes, gain insights, and refine your skills to become a true Kitchen Champ. Immerse yourself in their culinary wisdom, unlocking your potential and igniting your creativity. Join us on this remarkable journey of cooking, learning, and inspiration. Get ready to elevate your culinary prowess with our esteemed chefs as your mentors!</p>
      <Link to = "/classes"> <button className='btn btn-warning mt-4 mb-4'> Enroll Now </button></Link>
      </div>
      
          <div className='ms-10 align-items-center order-first md:order-last'>

            <img className='gif pe-10' src={gif2} alt="" />
          </div>
      </div>
      </div>
  


    </Slider1>
   


        </div>

    );
};

export default Slider;