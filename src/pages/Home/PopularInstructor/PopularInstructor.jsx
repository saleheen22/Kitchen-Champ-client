// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import './PopularInstructor.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const carousel = (slider) => {

    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}
const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: myClass = [], refetch, isLoading } = useQuery(
        ['myClass'], async () => {
            const res = await axiosSecure.get('/topinstructor')
            return res.data;
        })
    console.log(myClass)



    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )



    return (
        <div className='mb-48 mx-auto animate__animated animate__zoomIn'>
            <p className='text-center text-3xl my-12
        '>Meet Our Popular Instructors</p>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Working On it. Will add later</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            <div className="wrapper">

                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>

                        {/* no1 */}
                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={myClass[0]?.pic} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-2 p-0'>{myClass[0]?.name} </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>





                        </div>
                        {/* no 2 */}
                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={myClass[1]?.pic} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-2 p-0'>{myClass[1]?.name} </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>
                        {/* no 3 */}
                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={myClass[2]?.pic} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-2 p-0'>{myClass[2]?.name} </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>
                        {/* no 4 */}
                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={myClass[3]?.pic} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-2 p-0'>{myClass[3]?.name} </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>
                        {/* no 5 */}
                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={myClass[4]?.pic} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-2 p-0'>{myClass[4]?.name} </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>
                        {/* no 6 */}

                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={myClass[5]?.pic} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-2 p-0'>{myClass[5]?.name} </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructor;



{/* <div className={`carousel__cell number-slide${index}  group `} style={divStyle(img2)}><button className='btn btn-sm btn-outline hidden group-hover:block mt-32 btn-warning hover:visible
' >View Profile</button></div> */}