import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { HashLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";


const MyClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: myClass = [], refetch, isLoading } = useQuery(
        ['instructor'], async () => {
            const res = await axiosSecure.get(`/myclass?email=${user.email}`)
            return res.data;
        })
    if(isLoading){
        return <>
        <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
        </>
    }
    return (
        <div className=" my-16 mx-auto  ">
        <h2 className="text-5xl ms-80 ps-40">All The users</h2>

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
                            <th>FeedBack</th>
                            <th>Current Status</th>
                            <th className="text-center">Update</th>
                            <th className="text-end">Total Students</th>
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
                                                    <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{cls.className}</div>
                                    </td>
                                    <td className="text-red-600">{cls.Feedback}</td>
                                    <td className="text-center">
                                        {cls.Status}
                                    </td>
                                    <td>
                                        <div>
                                            <button className="btn  btn-outline btn-success w-28 " 
                                            
                                            >Update</button>
                                  
                                        </div>
                                    </td>
                                    <td className="text-end">534343434</td>
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
    );
};

export default MyClass;