import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function UserInfo() {
    const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto w-1/2 m-10 p-5 text-center bg-success">
          <p>User email : {user.email}</p>
    </div>
  )
}

export default UserInfo
