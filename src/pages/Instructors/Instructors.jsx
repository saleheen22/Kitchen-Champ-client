
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { HashLoader } from "react-spinners";
import './Instructor.css'
const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], isLoading } = useQuery(
        ['instructor'], async () => {
            const res = await axiosSecure.get("/instructors1")
            return res.data;
        })
        console.log(instructors);

    console.log(instructors)
    if (isLoading) {
        return <>
            <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
        </>
    }
    return (
        <div className="mt-36 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-3 gap-5">
                {
                    instructors.map(inst => <>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl h-auto">
                            <figure><img className="card-image" src={inst.pic} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{inst.name}</h2>
                                <p>Email : <span> {inst.email}</span></p>
                                
                                <div className="card-actions justify-end">
                                    <button className="btn btn-warning">Connect</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Instructors;