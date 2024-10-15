import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const success = () => toast.success("Login successFully!");

    const handelLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const accept = e.target.terms.checked;

        // reset error 
        setLoginError('');

        if (!accept) {
            setLoginError('Please accept your terms and conditions.')
            return;
        }
        // signIn user 
        signInUser(email, password)
            .then(result => {
                success();
                e.target.reset()
                navigate('/')
                console.log(result.user);
            })
            .catch(error => {
                setLoginError(error.message)
                console.log(error)
            })
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                // Extract user information
                const user = result.user;
                console.log("Signed-in user info:", user);
            })
            .catch(error => {
                console.error("Error during Google sign-in:", error.message);
            });
    }
    const handelGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className="">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold py-5">Please Login</h1>
                    </div>
                    <div className="max-w-lg w-full shrink-0 border m-5 mx-auto">
                        <form
                            onSubmit={handelLogin}
                            className="card-body">
                            {
                                loginError && <div role="alert" className="alert alert-warning">
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
                                    <span>{loginError}</span>
                                </div>
                            }
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
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-4 right-4 text-xl text-gray-500">
                                        {showPassword ?
                                            <FaEye /> :
                                            <FaEyeSlash />
                                        }
                                    </span>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="font-semibold text-center py-2">Don’t have an account? <Link className="text-orange-500" to="/register">Create an account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center mb-10">
                <span className="font-semibold">OR</span>
                <br />
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline rounded-full mt-5"> <FaGoogle className="text-lg" />  Login With Google</button> <br />
                <button
                    onClick={handelGithubLogin}
                    className="btn btn-outline rounded-full mt-3"> <FaGithub className="text-lg" />  Login With Github</button>
            </div>
        </div>
    )
}

export default Login
