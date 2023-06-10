import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";

const Registration = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className="mt-28">
        <Helmet>
            <title>Kitchen Champ || Register</title>
        </Helmet>
        <div>
        <div>
            <h2 className='text-center text-3xl'>Register Champ!! </h2>
            <form >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" className="input input-bordered" />
                    </div>    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6 mb-10 w-3/5  mx-auto">
                    <input className="btn btn-warning btn-block" type="submit" value="Register" />
                </div>
            </form>

        </div>
        </div>
    </div>
    );
};

export default Registration;