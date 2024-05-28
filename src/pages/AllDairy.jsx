/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import DairyCard from "../components/Ui/DairyCard";

const AllDairy = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/dairy")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-20">
      <div>
        <h1 className="px-10 text-2xl font-bold">
          Best <span className="text-green-500">Dairy</span> from us
        </h1>
        <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 mt-16 mb-20 px-10">
        {seaFood &&
          seaFood.map((food) => (
            <DairyCard key={food.id} food={food}></DairyCard>
          ))}
      </div>
    </div>
  );
};

export default AllDairy;
