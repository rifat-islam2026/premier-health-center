import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";

function UpdateProfile() {
  const { user } = useContext(AuthContext);

  const handelUpdateProfile = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    // console.log(name,email,photo)

        // updateProfile
        
  }
  return (
    <div className="mx-auto w-1/2 m-10 p-5 bg-success">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <form onSubmit={handelUpdateProfile}>
        <div className="flex flex-col gap-3">
          <div>
            <label className="label">
              <span className="label-text text-white">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={user.displayName}
              className="input input-bordered input-md w-full max-w-xs" /> 
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">User Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={user.email}
              className="input input-bordered input-md w-full max-w-xs" />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered input-md w-full max-w-xs" />
          </div>
        </div>
        <button
          
          className="btn btn-info px-7 mt-3 "
          type="submit">
          Saving</button>
      </form>
    </div>

  )
}

export default UpdateProfile
