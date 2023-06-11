
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { HashLoader } from "react-spinners";

const Instructors = () => {
    // const [axiosSecure] = useAxiosSecure();
    // const { data: instructors = [], isLoading } = useQuery(
    //     ['instructor'], async () => {
    //         const res = await axiosSecure.get("/instructor")
    //         return res.data;
    //     })

    //     console.log(instructors)
    // if(isLoading){
    //     return <>
    //     <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
    //     </>
    // }
    // return (
    //   <div className="mt-28 max-w-screen-xl mx-auto">
    //       <div className="grid grid-cols-3 gap-5">
    //        {
    //         instructors.map(inst => <>
    //          <div className="card card-side bg-base-100 shadow-xl">
    //             <figure><img src={inst.image} alt="Movie" /></figure>
    //             <div className="card-body">
    //                 <h2 className="card-title">New movie is released!</h2>
    //                 <p>Click the button to watch on Jetflix app.</p>
    //                 <div className="card-actions justify-end">
    //                     <button className="btn btn-primary">Watch</button>
    //                 </div>
    //             </div>
    //         </div>
    //         </>)
    //        }
    //     </div>
    //   </div>
    // );
};

export default Instructors;