import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(
        ['users'], async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        })
    return (
        <div className=" my-16 mx-auto animate__animated animate__bounceIn ">
            <h2 className="text-5xl ms-80 ps-40">All The users</h2>

            <div className="mx-auto ms-64 mt-10">
              <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl">
                                <th  >
                                 #
                                </th>
                                <th  >Pic</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Current Role</th>
                                <th className="ms-10 ps-24 ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => 
                                <tr key={user._id}>
                                <th>
                                {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                            
                                    </div>
                                </td>
                                <td>
                                <div className="font-bold">{user.name}</div>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                {user?.role}
                                </td>
                                <td>
                                <div className="grid grid-cols-2 gap-3 ">
                                    <button className="btn btn-outline btn-success w-28">Make Instructor</button>
                                    <button className="btn btn-outline w-28  btn-warning">Make Admin</button>
                                    </div>
                                </td>
                             
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

export default ManageUsers;