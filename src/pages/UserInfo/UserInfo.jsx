import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";

function UserInfo() {
    const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto w-1/2 m-10 p-5 text-center bg-success">
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Info</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-xl py-2">User name : {user.displayName}</h2>
      <p>User email : {user.email}</p>
    </div>

  )
}

export default UserInfo
