import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

const DetailsPage = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { image, name, price, _id, description } = data;
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
    <div className="md:flex bg-base-100 shadow-xl h-full mt-32">
      <div>
        <img src={image} alt="Shoes" className="w-96 h-96" />
      </div>
      <div className="card-body border border-t-orange-100">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">${price}</div>
        </h2>
        <p>{description}</p>
        <div className="flex justify-start gap-2">
          <div
            onClick={() => handleAddToCart(data)}
            className="badge badge-secondary cursor-pointer"
          >
            Purchase
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
