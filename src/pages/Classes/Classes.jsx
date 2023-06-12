import { HashLoader } from "react-spinners";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [check, setCheck] = useState(true);
    const [axiosSecure] = useAxiosSecure();
    const [filteredUser, setFilteredUser] = useState('');

    const { user } = useAuth();
    const userEmail = user?.email;


    const handleCard = (id, img, clsName, price) => {
        if(user){
            const cart = {classId: id, studentEmail: userEmail, paid: 'No', classImg: img, className: clsName, price: price}
            console.log('This is inside the handlecard', cart)
            axiosSecure.post('/addcart', cart)
            .then(data => {
                
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added to your card successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'The class is already added!',
                        footer: '<a href="">Add a new class</a>'
                      })
                }
            })

        }

        else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please Login First',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        }
    }












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
                                            
                                                {filteredUser === 'Student' && c.seats>0 ? <>
                                                    <button className="btn btn-warning" onClick={()=> handleCard(c._id, c.image, c.className, c.price)} disabled={false}>Select</button>
                                                </> : <>
                                                    <button className="btn btn-warning" disabled={true}>Select</button>
                                                </>}
                                            
                                            </>:
                                            <>
                                            {
                                                c.seats === 0 ? <>
                                                <button className="btn btn-warning" disabled={true}>Select</button>
                                                </>
                                                :
                                                <>
                                                <button onClick={()=> handleCard(c._id, c.image, c.className, c.price)} className="btn btn-warning">Select</button>
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