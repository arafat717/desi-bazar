import { useQuery } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users, refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      return res.json();
    },
  });

  const handleMakeAdmin = (id) => {
    console.log(id);
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Total users: {users?.length}</h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Make</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item?.name}</td>
              <td>${item?.email}</td>
              <td>
                {users.role === "admin" ? (
                  "admin"
                ) : (
                  <FaUserShield
                    onClick={() => handleMakeAdmin(item._id)}
                    className="text-white bg-purple-600 p-1 rounded-lg cursor-pointer text-4xl hover:bg-black duration-300"
                  ></FaUserShield>
                )}
              </td>
              <th>
                <AiFillDelete
                  onClick={() => handleDelete(item)}
                  className="text-white bg-red-600 p-1 rounded-lg cursor-pointer text-4xl hover:bg-black duration-300"
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
