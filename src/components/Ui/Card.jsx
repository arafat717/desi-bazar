/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Card = ({ food }) => {
  return (
    <div className="card bg-base-100 shadow-xl mt-2">
      <figure>
        <img src={food?.image} alt="Shoes" className="w-[400px] h-[180px]" />
      </figure>
      <div className="card-body border border-t-orange-100">
        <h2 className="card-title">
          {food.name}
          <div className="badge badge-secondary">${food.price}</div>
        </h2>
        <p>{food.description}</p>
        <div className="flex justify-end gap-2">
          <div className="badge badge-outline cursor-pointer">
            <Link to={`/product/${food._id}`}>Details</Link>
          </div>
          <div className="badge badge-outline cursor-pointer">Purchase</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
