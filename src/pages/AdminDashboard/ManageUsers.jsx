import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
   
   

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch, isLoading } = useQuery(
        ['users'], async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        })
    console.log(users);
    if(isLoading){
        return <>
        <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
        </>
    }


    const handleMakeAdmin = user => {
        fetch(`https://kitchen-champ-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    const isAdminButtonDisabled = (user) => {
        console.log('Insided button', user.isAdminClicked === true)
        return user.isAdminClicked === true;
      };

    const handleMakeInstructor = user => {
        fetch(`https://kitchen-champ-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    const isInstButtonDisabled = (user) => {
        console.log('Insided button', user.isAdminClicked === true)
        return user.isInstClicked === true;
      };

    return (
        <div className=" my-16 mx-auto  ">
            <Helmet>
            <title>Kitchen Champ || Manage Users</title>
            </Helmet>
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
                                            <div className="font-bold">{user.name}</div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td className="text-center">
                                            {user?.role}
                                        </td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-3 ">
                                                <button className="btn  btn-outline btn-success w-28 " onClick={() => handleMakeInstructor(user)}
                                                 disabled={isInstButtonDisabled(user)}
                                                
                                                >Make Instructor</button>
                                                <button className="btn btn-outline w-28  btn-warning"
                                                
                                                onClick={() => handleMakeAdmin(user)}
                                                
                                                disabled={isAdminButtonDisabled(user)}
                                                >Make Admin</button>
                                            </div>
                                        </td>
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

export default ManageUsers;