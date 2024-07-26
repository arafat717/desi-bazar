/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { IoStarSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiDeviceRotateLight } from "react-icons/pi";
import { TiArrowMoveOutline } from "react-icons/ti";
import "./Card.css";

/* eslint-disable react/no-unescaped-entities */
const Card = ({ food }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { image, name, price, _id } = food;
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartInfo = {
        productId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("https://grocary-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          if (data.insertedId) {
            toast.success("Product add Successful");
          }
        });
    } else {
      Swal.fire({
        title: "Please Login for add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    // <div className="card bg-base-100 shadow-xl mt-2">
    //   <figure>
    //     <img src={image} alt="Shoes" className="w-[400px] h-[180px]" />
    //   </figure>
    //   <div className="card-body border border-t-orange-100">
    //     <h2 className="card-title">
    //       {name}
    //       <div className="badge badge-secondary">${price}</div>
    //     </h2>
    //     <p>{description}</p>
    //     <div className="flex justify-end gap-2">
    //       <div className="badge badge-outline cursor-pointer">
    //         <Link to={`/product/${_id}`}>Details</Link>
    //       </div>
    //       <div
    //         onClick={() => handleAddToCart(food)}
    //         className="badge badge-outline cursor-pointer"
    //       >
    //         Purchase
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mainCard h-[380px] w-[280px] transition-all">
      <img src={image} className="w-full h-[180px] image-style" alt="" />
      <div className="p-5 text-center">
        <div className="flex justify-center text-yellow-500 text-[16px] gap-1">
          <IoStarSharp></IoStarSharp>
          <IoStarSharp></IoStarSharp>
          <IoStarSharp></IoStarSharp>
          <IoStarSharp></IoStarSharp>
          <IoStarSharp></IoStarSharp>
        </div>
        <div className="icons">
          <TiArrowMoveOutline className="m-2 text-[40px] bg-green-100 p-[8px] rounded hover:bg-green-500"></TiArrowMoveOutline>
          <SlLike className="m-2 text-[40px] bg-green-100 p-[8px] rounded hover:bg-green-500"></SlLike>
          <PiDeviceRotateLight className="m-2 text-[40px] bg-green-100 p-[8px] rounded hover:bg-green-500"></PiDeviceRotateLight>
        </div>
        <h1 className="text-xl font-bold my-2">{name}</h1>
        <p className="text-xl font-bold flex items-center justify-center gap-2">
          <span className="text-gray-400 line-through">$10.99</span>
          <span className="text-red-600 text-xl font-bold ">${price}</span>
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleAddToCart(food)}
          className="customButton px-14 py-2 flex items-center justify-center gap-2 rounded bg-green-300 transition hover:bg-green-700 hover:text-white"
        >
          <FaPlus className="mt-[2px]"></FaPlus>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
