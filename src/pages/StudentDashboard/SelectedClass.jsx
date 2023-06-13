import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const SelectedClass = () => {

    const {user} = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: myClass = [], refetch, isLoading } = useQuery(
        ['myclass'], async () => {
            const res = await axiosSecure.get(`/myenrolledclass?email=${user?.email}`)
            return res.data;
        })
    return (
        <div>
            <Helmet>
            <title>Kitchen Champ || Enrolled Class</title>
            </Helmet>
            <div className="my-16 mx-auto ">
                         
        <h2 className="text-5xl ms-80 ps-40">Enrolled Class</h2>


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
                            <th >Instructor</th>
                            

 
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
                                                    <img src={cls.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{cls.className}</div>
                                    </td>
                                    <td>{cls.instructorName}</td>
                              
                                    
                                
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
    );
};

export default SelectedClass;