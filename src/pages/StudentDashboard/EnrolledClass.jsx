import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const EnrolledClass = () => {




    
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();

    const { data: myClass = [], refetch, isLoading } = useQuery(
        ['myclass'], async () => {
            const res = await axiosSecure.get(`/mycart?email=${user?.email}`)
            return res.data;
        })


        const handleDelete = item => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/carts/delete/${item._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
        }
    
    if(isLoading){
        return <>
        <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
        </>
    }
    console.log(myClass)
    return (
        <div>
            <Helmet>
            <title>Kitchen Champ || Selected Class</title>
            </Helmet>
            <div>
            <div className=" my-16 mx-auto  ">
               
        <h2 className="text-5xl ms-48 ps-40">My Selected Classes</h2>

        <div className="mx-auto ms-64 mt-10">
            <div className="overflow-x-auto animate__animated animate__fadeInDown">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl">
                            <th  >
                                #
                            </th>
                            <th>Image</th>
                            <th>Class</th>
                            <th className="text-end">Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
 
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myClass.map((cls, index) =>
                                <tr key={cls._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cls.classImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{cls.className}</div>
                                    </td>
                                    <td className="text-end">${cls.price}</td>
                                    <td>
                                        <div>
                                        <Link to="/dashboard/student/pay" state ={cls}>
                                        
                                        <button className="btn  btn-outline btn-success w-28 "  
                                            
                                            >Pay</button>
                                        </Link>
                                  
                                        </div>
                                    </td>
                                    <td className="text-center text-red-600"><button onClick={() => handleDelete(cls)}><FaTrash></FaTrash></button></td>
                                
                                    {/* <td>
                                    <button className="btn btn-outline w-28  btn-warning" onClick={() => handleMakeAdmin1(user)}>Make rolee</button>
                                    </td> */}


                                </tr>

                            )
                        }




                    </tbody>


                </table>
            </div>
        </div>

    </div>
            </div>
        </div>
    );
};

export default EnrolledClass;