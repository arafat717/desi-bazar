import { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import { Helmet } from "react-helmet-async";

/* eslint-disable react/no-unescaped-entities */
const AllVegitables = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/vegitables")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-5">
      <Helmet>
        <title>Online Bazar - Vegitables</title>
      </Helmet>
      <h1 className="px-10 mt-20 text-2xl font-bold">
        Best <span className="text-green-500">Vegitables</span> from us
      </h1>
      <hr className="w-[300px] ml-10 border border-green-300 mt-2" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 px-10 mt-16 mb-20">
        {seaFood &&
          seaFood.map((food) => <Card key={food._id} food={food}></Card>)}
      </div>
    </div>
  );
};

export default AllVegitables;
