import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";

function Register() {
    const { createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const accept = e.target.terms.checked;
        const success = () => toast.success("Register successFully!");
        
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
                success();
                e.target.reset()
                navigate('/login')
                // updateProfile
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL:photo
                })
                console.log(result.user)
            })
            .catch(error => {
                setRegisterError(error.message)
        })
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className="flex-col">
                    <div className="text-center">
                        <h1 className="md:text-5xl text-3xl font-bold py-5">Please Register</h1>
                    </div>
                    <div className="max-w-lg shrink-0 border m-5 mx-auto">
                        <form
                            onSubmit={handelRegister}
                            className="card-body">
                            {
                                registerError && <div role="alert" className="alert alert-warning">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 stroke-current"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span>{registerError}</span>
                                </div>
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
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input
                                    name="photo"
                                    type="text"
                                    placeholder="Photo Url"
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
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <span
                                        onClick={()=>setShowPassword(!showPassword)}
                                        className="absolute top-4 right-4 text-xl text-gray-500">
                                        { showPassword ?
                                            <FaEye /> :
                                            <FaEyeSlash/>
                                        }
                                        </span>
                                </div>
                            </div>
                            <div className="label flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="terms" className="form-checkbox h-4 w-4 scale-110" />
                                    <p className="font-semibold">Remember Me</p>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
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
