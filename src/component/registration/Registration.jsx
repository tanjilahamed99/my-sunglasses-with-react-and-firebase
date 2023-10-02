import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className=" min-h-screen bg-base-200 mx-auto justify-center container pt-10">
            <div className="">
                <div className="text-center pb-5">
                    <h1 className="text-5xl font-bold ">Login now!</h1>
                </div>
                <div className="card  w-[50%]  shadow-2xl bg-base-100 mx-auto">
                    <form className="card-body w-[100%]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Registration</button>
                        </div>
                    <p>already have account <Link className="font-bold" to={'/login'}>login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;