import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopCard from "../Ui/TopCard";

const TopSellingProduct = () => {
  const [product, setProducts] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch("https://grocary-server.vercel.app/products ")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="px-1 md:px-10">
      <div className="md:flex justify-between items-center my-8 ">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Top Selling <span className="text-green-500">Products</span>
          </h1>
          <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
        </div>
        <div className="mt-5 ml-9">
          <Link to="/fruits" className="pr-20 md:visible">
            <button className="btn btn-outline btn-success">
              Show All Fruits
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {product.slice(0, 6).map((pro) => (
          <TopCard key={pro._id} pro={pro}></TopCard>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProduct;
