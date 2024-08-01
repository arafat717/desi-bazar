import { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import { Helmet } from "react-helmet-async";

/* eslint-disable react/no-unescaped-entities */
const AllVegitables = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("https://grocary-server.vercel.app/vegitables")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-5">
      <Helmet>
        <title>Online Bazar - Vegitables</title>
      </Helmet>
      {/* <h1 className="px-10 mt-20 text-2xl font-bold">
        Best <span className="text-green-500">Vegitables</span> from us
      </h1>
      <hr className="w-[300px] ml-10 border border-green-300 mt-2" /> */}
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 items-center justify-center lg:grid-cols-4 mx-auto px-2 md:px-4 lg:px-10 mt-8 mb-20">
        {seaFood &&
          seaFood.map((food) => <Card key={food._id} food={food}></Card>)}
      </div>
    </div>
  );
};

export default AllVegitables;
