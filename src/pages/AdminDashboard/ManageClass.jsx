import { FaBan, FaCheck, FaPencilAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { HashLoader } from "react-spinners";

const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch, isLoading } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/class')
        return res.data;
    })
    console.log(allClass)
    if(isLoading){
        return <>
        <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
        </>
    }
    return (

        <div className="my-16 mx-auto">
            <h2 className="text-5xl ms-80 ps-40">All The Classes</h2>
            <div>
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>

            <div className="overflow-x-auto mx-auto ms-28 mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold">
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th className="text-end">Price</th>
                            <th>Status</th>
                            <th className="text-center">Approval</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                      {
                        allClass.map((cls, index) => 
                        <tr key={cls._id}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{cls.className}</td>
                        <td>{cls.instructorName}</td>
                        <td>{cls.email}</td>
                        <td className="text-end">{cls.seats}</td>
                        <td className="text-end"> {cls.price}
                        </td>

                        <td>{cls.Status}</td>
                        <td>
                            <div className="grid grid-cols-3 gap-3 ">
                                <button className="btn btn-success "><FaCheck></FaCheck></button>

                                <button className="btn btn-error">
                                    <FaBan></FaBan>
                                </button>

                                <button className="btn btn-warning" onClick={() => window.my_modal_1.showModal()}>

                                    <FaPencilAlt></FaPencilAlt>
                                </button>
                            </div>
                        </td>

                    </tr>
                        
                            )
                      }

                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default ManageClass;