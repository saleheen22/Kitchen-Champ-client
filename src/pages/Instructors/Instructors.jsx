
const Instructors = () => {
    return (
        <div className="mt-28 max-w-screen-xl mx-auto">
            <div className="overflow-x-auto max-h-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Pic & Name</th>
                            <th>Email</th>
                            {/* <th>Email</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://balbetta.sirv.com/pics/miizanur-rahman-removebg-preview.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default Instructors;