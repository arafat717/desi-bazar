/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

/* eslint-disable react/no-unescaped-entities */
const Card = ({ food }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { image, name, price, description, _id } = food;
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartInfo = {
        productId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartInfo),
      })
        .then((res) => res.json())
        .then((data) => {
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
    <div className="card bg-base-100 shadow-xl mt-2">
      <figure>
        <img src={image} alt="Shoes" className="w-[400px] h-[180px]" />
      </figure>
      <div className="card-body border border-t-orange-100">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">${price}</div>
        </h2>
        <p>{description}</p>
        <div className="flex justify-end gap-2">
          <div className="badge badge-outline cursor-pointer">
            <Link to={`/product/${_id}`}>Details</Link>
          </div>
          <div
            onClick={() => handleAddToCart(food)}
            className="badge badge-outline cursor-pointer"
          >
            Purchase
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
