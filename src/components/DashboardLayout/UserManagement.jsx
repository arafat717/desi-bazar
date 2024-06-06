import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const { user } = useAuth();
  const [useUser, setUseUser] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUseUser(data));
  }, [user]);

  console.log(useUser);

  return (
    <>
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-2xl font-semibold">User Management</h1>
          <p className="mt-4">
            <span className="font-semibold">Name:</span> {useUser?.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {useUser?.email}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {useUser?.age}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {useUser?.phone}
          </p>
        </div>
        <Link to={`/dashboard/user-edit/${useUser?._id}`}>
          <button className="btn btn-secondary">Edit Profile</button>
        </Link>
      </div>
    </>
  );
};

export default UserManagement;
