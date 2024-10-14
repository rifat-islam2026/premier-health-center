import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

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
                alert("Login successfully")
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
                                loginError && <p className="text-red-600 bg-red-200 p-2 my-2">{loginError}</p>
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
