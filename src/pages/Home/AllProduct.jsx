import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Ui/Card";

/* eslint-disable react/no-unescaped-entities */
const AllProduct = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("https://grocary-server.vercel.app/vegitables")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-28 bg-green-50 py-14">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Fresh <span className="text-green-500">Vegitables</span>
          </h1>
          <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
        </div>
        <div className="mt-5 ml-9">
          <Link to="vegitables" className="pr-20 md:visible">
            <button className="btn btn-outline btn-success">
              See All Vegitables
            </button>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 items-center justify-center lg:grid-cols-4 mx-auto px-2 md:px-4 lg:px-10 mt-8 mb-20">
        {seaFood &&
          seaFood
            .slice(0, 4)
            .map((food) => <Card key={food._id} food={food}></Card>)}
      </div>
    </div>
  );
};

export default AllProduct;
