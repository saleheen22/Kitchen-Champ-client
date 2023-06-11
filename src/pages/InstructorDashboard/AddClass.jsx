import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        

        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('Status', 'Pending');

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {instructorName, email, className, seats, price} = data;
                const newClass = {instructorName, email, className, seats: parseInt(seats), price: parseFloat(price), image:imgURL, Status: "Pending"}
                console.log(newClass)
                axiosSecure.post('/addclass', newClass)
                .then(data => {
                    console.log('after adding new class', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
        console.log(data);

    };
        
    



    return (
        <div>
            <Helmet>
                <title>Kitchen Champ || Add Class</title>
            </Helmet>


            <div className="mx-auto ms-80">
                <h2 className="my-12 text-3xl ">Add A Class</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate__animated animate__heartBeat">


                        {/* name */}

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" {...register("instructorName", { required: true,
                        })}
                        readOnly
                                name="instructorName" placeholder={user.displayName}
                                value={user.displayName}
                                className="input border-4 input-bordered" />

                        </div>

                        {/* email */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })}
                           readOnly
                       
                                name="email" placeholder={user.email}
                                value={user.email}
                                className="input border-4 input-bordered" />

                        </div>
                        {/* class name */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" {...register("className", { required: true })}
                                name="className" placeholder="Class Name"
                                className="input border-4 input-bordered" />
                        </div>
                        {/* class image */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Upload the image</span>
                            </label>
                            <input type="file"{...register("image", { required: true })}
                                name="image" 
                                className="file-input file-input-bordered border-4 " />

                        </div>
                        {/* Available Seats */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Seats</span>
                            </label>
                            <input type="number" {...register("seats", { required: true,
                        })}
                       
                                name="seats" placeholder="Total Seats"
                                className="input border-4 input-bordered" />

                        </div>
                        {/* Price */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register("price", { required: true,
                        })}
                        
                                name="price" placeholder="Price"
                                className="input border-4 input-bordered" />

                        </div>
               

                        <div className="form-control mt-6 mb-10 w-3/5  ">
                            <input className="btn btn-warning btn-block" type="submit" value="Add" />

                        </div>

                    </div>
                </form>
            </div>





        </div>
    );
};

export default AddClass;