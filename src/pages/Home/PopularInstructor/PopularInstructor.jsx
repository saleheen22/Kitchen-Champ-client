// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import './PopularInstructor.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const img1 = "https://i.ibb.co/DpxYQxr/Abrar.jpg";

const img2 = "https://i.ibb.co/4Kb2yVr/Abrar-3-removebg-preview.png"
const img3 = "https://balbetta.sirv.com/pics/fatima-akter-removebg-preview.png"
const img4 = "https://balbetta.sirv.com/pics/miizanur-rahman-removebg-preview.png"
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
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )
    // const divStyle = (src) => ({
    //     backgroundImage: 'url('+ src + ')'
    // })


    return (
        <div className='mb-48 mx-auto'>
            <p className='text-center text-3xl my-12
        '>Meet Our Popular Instructors</p>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eveniet deleniti dignissimos ea perferendis, quas officia atque libero earum in incidunt et voluptate, aliquid ducimus ipsum ab dolores? Possimus itaque libero adipisci. Possimus ea vero, consectetur, commodi beatae temporibus dolor atque dignissimos amet, aliquid reprehenderit repudiandae perferendis eveniet repellat ullam!</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            <div className="wrapper">

                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>


                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={img1} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-1 p-0'>Rassie van der Dussen dfdfdfj </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>

                        <div className="carousel__cell number-slide3">3</div>
                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={img2} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-1 p-0'>Rassie van der Dussen dfdfdfj </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>

                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={img3} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-1 p-0'>Rassie van der Dussen dfdfdfj </p>

                                <button className='btn btn-xs btn-outline btn-warning  mt-2' onClick={() => window.my_modal_5.showModal()}>Profile</button>

                            </div>




                        </div>
                        <div className={`carousel__cell number-slide8 shadow-xl card card-compact border-0 `}>

                            <figure><img className='images' src={img4} alt="Shoes" /></figure>
                            <div className="card-body  h-1/6 group grid grid-cols-2 gap-2">
                                <p className='text-justify mt-1 p-0'>Rassie van der Dussen dfdfdfj </p>

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