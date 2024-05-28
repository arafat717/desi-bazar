import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MeatCard from "../../components/Ui/MeatCard";

/* eslint-disable react/no-unescaped-entities */
const MeatSeaFood = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/egg")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);

  return (
    <div className="my-36">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Best <span className="text-green-500">Meat and Seafood</span> from
            us
          </h1>
          <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
        </div>
        <div className="mt-5 ml-9">
          <Link to="/meat" className="pr-20 md:visible">
            <button className="btn btn-outline btn-success">
              Show All Fruits
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 mt-8 mb-20 px-10">
        {seaFood &&
          seaFood
            .slice(0, 5)
            .map((food) => <MeatCard key={food.id} food={food}></MeatCard>)}
      </div>
    </div>
  );
};

export default MeatSeaFood;
