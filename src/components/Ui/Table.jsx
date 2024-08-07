/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import { Link } from "react-router-dom";
const Table = ({ data, handleDeleteProduct }) => {
  const handleDelete = async (id) => {
    await fetch(`https://grocary-server.vercel.app/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleDeleteProduct(id);
        toast.success("Delete Successful!");
      });
  };
  return (
    <div className="w-full mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">price</th>
              <th className="py-3 px-6">Action</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">
                  <img src={item.image} alt="" className="w-16 rounded-full" />
                </td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">$ {item.price}</td>
                <td className="py-3 px-6">
                  <AiFillDelete
                    onClick={() => handleDelete(item._id)}
                    className="text-white bg-red-600 p-1 rounded-lg cursor-pointer text-4xl hover:bg-black duration-300"
                  />
                </td>
                <td className="py-3 px-6">
                  <Link to={`/dashboard/product-edit/${item._id}`}>
                    <MdSystemUpdateAlt className="text-white bg-blue-600 p-1 rounded-lg cursor-pointer text-4xl hover:bg-black duration-300" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
