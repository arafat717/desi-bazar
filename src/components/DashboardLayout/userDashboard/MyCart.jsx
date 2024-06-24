import { AiFillDelete } from "react-icons/ai";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart?.reduce((sum, item) => parseFloat(item.price) + sum, 0);
  const totalsum = total?.toFixed(2);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full px-10">
        <p className="text-2xl font-bold">Tottal Product: {cart?.length}</p>
        <p className="text-2xl font-bold">
          Tottal Price: <span className="text-yellow-700">${totalsum}</span>
        </p>
        <button className="btn btn-info">Pay</button>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>${item?.price}</td>
                <th>
                  <AiFillDelete className="text-white bg-red-600 p-1 rounded-lg cursor-pointer text-4xl hover:bg-black duration-300" />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
