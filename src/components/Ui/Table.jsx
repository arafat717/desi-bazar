/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
const Table = ({ data }) => {
  console.log(data);
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
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">
                  <img src={item.image} alt="" className="w-16 rounded-full" />
                </td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">$ {item.price}</td>
                <td className="py-3 px-6">
                  <AiFillDelete className="text-white bg-red-600 p-1 rounded-lg cursor-pointer text-4xl hover:bg-black duration-300" />
                </td>
                <td className="py-3 px-6">
                  <MdSystemUpdateAlt className="text-white bg-blue-600 p-1 rounded-lg cursor-pointer text-4xl hover:bg-black duration-300" />
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