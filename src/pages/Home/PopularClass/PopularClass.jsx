import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PopularClass.css';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: myClass = [] } = useQuery(
      ['instructor'], async () => {
          const res = await axiosSecure.get('/popularclass')
          return res.data;
      })


  return (
    <div>
      <p className="text-center text-3xl my-6 "><h1>Our Popular Classes</h1></p>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=" animate__animated animate__fadeInLeft"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
      
        {
          myClass.map(cls => 
            <>
            <div key={cls._id} className="card w-96 glass h-full">
          <figure><img className='h-64 w-full' src={cls.image} alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">{cls.className}</h2>
            <p>Instructor: <span>{cls.instructorName}</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Learn now!</button>
            </div>
          </div>
        </div>
            </>
            
            )
        }
        

      </Carousel>
    </div>
  );
};

export default PopularClass;