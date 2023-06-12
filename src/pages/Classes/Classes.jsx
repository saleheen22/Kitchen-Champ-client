import { HashLoader } from "react-spinners";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Classes = () => {
    const [data1, setData1] = useState();
    const [check, setCheck] = useState(true);
    const [axiosSecure] = useAxiosSecure();
    const [filteredUser, setFilteredUser] = useState('');

    const { user } = useAuth();
    const userEmail = user?.email;












    const { data: cls = [], isLoading } = useQuery(
        ['cls'], async () => {
            const res = await axiosSecure.get("/class/approve")
            return res.data;
        })
    console.log(cls);


    if (check && userEmail) {
        fetch('http://localhost:5000/allusers')
            .then(res => res.json())
            .then(data => {
                setCheck(false)
                console.log('this is the data', data);
                data.map(d => {
                    console.log('this is d.email', d.email)
                    console.log('this is userEmail', userEmail)
                    if (d.email == userEmail) {
                        console.log('MILSEEEEEEEEEEE')
                        setFilteredUser(d.role)
                    }
                })

            })
    }



    if (isLoading) {
        return <>
            <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
        </>
    }


    return (
        <div className="mt-40 max-w-screen-xl mx-auto">
            <h2 className="text-3xl text-center mt-14 ">All Our Classes</h2>

            <div className="grid grid-cols-3 gap-7 mb-28 mt-10">
                {
                    cls.map(c => <>
                        <div key={c._id} className="max-h-screen">
                            <div className={c.seats === 0 ? 'card w-96 h-full  shadow-xl bg-red-600': 'card w-96 h-full bg-base-100 shadow-xl'  }>
                                <figure><img className="card-image" src={c.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {c.className}
                                        {/* <div className="badge badge-secondary">Popular</div> */}
                                    </h2>
                                    <div className="">
                                        <p><span>Instructor :</span>{c.instructorName}</p>
                                        <p><span>Seats: </span>{c.seats}</p>
                                        <p> <span>Price : $</span>{c.price}</p>
                                        <p></p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {
                                            user ? <>
                                            
                                                {filteredUser === 'Student' ? <>
                                                    <button className="btn btn-warning" disabled={false}>Add</button>
                                                </> : <>
                                                    <button className="btn btn-warning" disabled={true}>Add</button>
                                                </>}
                                            
                                            </>:
                                            <>
                                            {
                                                c.seats === 0 ? <>
                                                <button className="btn btn-warning" disabled={true}>Add</button>
                                                </>
                                                :
                                                <>
                                                <button className="btn btn-warning">Add</button>
                                                </>

                                            }
                                            </>
                                }
                                        {/* <div className="badge badge-outline">Fashion</div>
                                 <div className="badge badge-outline">Products</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>


            <div>

            </div>

        </div>
    );
};

export default Classes;