import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useRef } from "react";
import Swal from "sweetalert2";
import { HashLoader } from "react-spinners";

const Registration = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, loading } = useAuth();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    }
    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div className="mt-28">
            <Helmet>
                <title>Kitchen Champ || Register</title>
            </Helmet>
            {!loading ? <>
            <HashLoader className="text-center text-5xl mx-auto my-12" color="rgba(214, 189, 54, 0.86)"></HashLoader>
            </> :
            <>
            <div>
                <div>
                    <h2 className='text-center text-3xl'>Register Champ!! </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate__animated animate__fadeInBottomRight">
                            {/* name */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })}
                                    name="name" placeholder="Name"
                                    className="input border-4 input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input border-4 input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}

                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/
                                })}
                                    name="password"
                                    placeholder="password" className="input input-bordered border-4" />

                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase  and a special character.</p>}
                            </div>
                            {/* confirm password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register('confirmPassword',
                                    {
                                        required: true,
                                        validate: (value) => value === password.current || "Passwords do not match"

                                    }
                                )} name="confirmPassword"
                                    placeholder="password"
                                    className="input input-bordered border-4" />
                                {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Confirm Password is required</p>}
                                <p className="text-red-600">{errors.confirmPassword?.message}</p>
                            </div>
                            {/* Photo Url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"   {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered border-4" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            {/* Gender */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <input type="text" {...register("gender", { required: false })} name="gender" placeholder="Male/Female/Trans" className="input input-bordered border-4" />
                            </div>
                            {/* Phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" {...register("phone", { required: false })} name="phone" placeholder="phone" className="input input-bordered border-4" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" {...register("address", { required: false })}
                                    name="address" placeholder="address" className="input input-bordered border-4" />
                            </div>
                        </div>
                        <div className="form-control mt-6 mb-10 w-3/5  mx-auto">
                            <input className="btn btn-warning btn-block" type="submit" value="Register" />
                            <div className="mt-2 mx-auto">
                                Already a champ? <Link to="/login" className="text-blue-600">Login</Link>
                            </div>
                        </div>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>

                </div>
            </div>
            </>
            }
        </div>
    );
};

export default Registration;