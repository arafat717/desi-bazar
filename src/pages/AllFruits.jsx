import { useEffect, useState } from "react";
import FruitsCard from "../components/Ui/FruitsCard";

/* eslint-disable react/no-unescaped-entities */
const AllFruits = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/fruits")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="mb-10 mt-10">
      <h1 className="px-10 mt-20 text-2xl font-bold">
        Best <span className="text-green-500">Fruits</span> from us
      </h1>
      <hr className="w-[300px] ml-10 border border-green-300 mt-2" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 mt-16 mb-20 px-10">
        {seaFood &&
          seaFood.map((food) => (
            <FruitsCard key={food.id} food={food}></FruitsCard>
          ))}
      </div>
    </div>
  );
};

export default AllFruits;
