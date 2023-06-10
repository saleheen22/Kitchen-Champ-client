import { Helmet } from "react-helmet";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import logo1 from '../../../public/logo/white-transparentBg.png'
import logo2 from '../../../public/logo/black-tansparentBg.png'
import './Login.css';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();



    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState("");
    const [passtext, setPasstext] = useState('text');
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const {signIn} = useAuth();
    const changeEye1 = () =>{
        setPasstext('password');
    }
    const changeEye2 = () => {
        setPasstext('text');
    }
    const onSubmit = data => {

        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            reset();
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError(error.message);

        })

    }
    // const location = useLocation();
    // const check = location.state;



    // const [theme, setTheme] = useState(check);

    // useEffect(()=> {
    //     const th = check;
    //     setTheme(th);
    //     console.log('inside login', th);
    // } ,[localStorage.getItem('theme')])

    return (
        <div className="mt-28">
            <Helmet>
                <title>Kitchen Champ || Login</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content grid md:grid-cols-2 md:gap-20">
                        <div className="text-center md:me-20">
                            <h1 className="text-5xl font-bold">Whisk Your Way In!</h1>
                            <p className="py-6 ms-10 text-justify">
                                {/* { theme === 'dark' ? <>
                                <img className="login-logo" src={logo2} alt="" />
                                </> :
                                <img className="login-logo" src={logo1} alt="" />
                                } */}

                                Welcome to Kitchen Champ, the ultimate culinary destination! Login effortlessly using your email and password, or leverage the convenience of Google login. Embark on a culinary adventure like no other, explore exciting features, and unlock a world of gastronomic delights. Join us today and unleash your inner kitchen champion!
                            </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ms-24">
                           <form onSubmit={handleSubmit(onSubmit)}>
                           <div className="card-body animate__animated animate__tada">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    
                                  {passtext === 'text' ? 
                                    <>
                                      <input type = "text" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />

                                      <label className="label"><FaEye onClick={changeEye1}></FaEye></label>
                                    </>  
                                    :
                                    <>
                                      <input type = "password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                    
                                      <label className="label"><FaEyeSlash onClick={changeEye2}></FaEyeSlash></label>
                                    </>
                                }
 
                                    
                                   
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Login</button>
                                </div>
                                <SocialLogin></SocialLogin>
                            </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;