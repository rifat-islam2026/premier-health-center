import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


function Register() {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const accept = e.target.terms.checked;
        // console.log(accept);
        
        // reset error 
        setRegisterError('')

        if (!password.length > 6) {
            setRegisterError('Password should be at least 6 characters and longer.')
            return;
        }
        else if (!/([A-Z])(?=.*[a-z])/.test(password)) {
            setRegisterError('Your password should have at last or one uppercase and lowercase characters.')
            return;
        }
       else if (!accept) {
            setRegisterError('Please accept your terms and conditions.')
            return;
        }
        createUser(email, password)
            .then(result => {
                alert("Register successfully")
                e.target.reset()
                navigate('/login')
            console.log(result)
            })
            .catch(error => {
                setRegisterError(error.message)
            console.log(error)
        })
    }
    return (
        <div>
            <div>
                <div className="flex-col">
                    <div className="text-center">
                        <h1 className="md:text-5xl text-3xl font-bold py-5">Please Register</h1>
                    </div>
                    <div className="max-w-lg shrink-0 border p-5 m-5 mx-auto">
                        <form
                            onSubmit={handelRegister}
                            className="card-body">
                            {
                                registerError && <p className="text-red-600 bg-red-200 p-2 my-2">{registerError}</p>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <div className="label flex items-center justify-between pt-2">
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="terms" />
                                        <p className="font-semibold">Remember Me</p>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="font-semibold text-center py-2">Already have an account? <Link className="text-orange-500" to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center mb-10">
                <span className="font-semibold">OR</span>
                <br />
               <button className="btn btn-outline rounded-full mt-5"> <FaGoogle className="text-lg"/>  Login With Google</button> <br />
               <button className="btn btn-outline rounded-full mt-3"> <FaGithub className="text-lg"/>  Login With Github</button>
            </div>
        </div>
    )
}

export default Register
