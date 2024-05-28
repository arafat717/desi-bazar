import { useEffect, useState } from "react";
import Card from "../components/Ui/Card";

/* eslint-disable react/no-unescaped-entities */
const AllMeatandSeaFood = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/egg")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-20">
      <h1 className="px-10 text-2xl font-bold">
        Best <span className="text-green-500">Meat and Seafood</span> from us
      </h1>
      <hr className="w-[200px] ml-10 border border-green-300 mt-2" />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 mt-16 mb-20 px-10">
        {seaFood &&
          seaFood.map((food) => <Card key={food.id} food={food}></Card>)}
      </div>
    </div>
  );
};

export default AllMeatandSeaFood;
