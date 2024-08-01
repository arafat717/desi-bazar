/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import { Helmet } from "react-helmet-async";

const AllDairy = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("https://grocary-server.vercel.app/dairy")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-20">
      <Helmet>
        <title>Online Bazar - Dairy</title>
      </Helmet>
      {/* <div>
        <h1 className="px-10 text-2xl font-bold">
          Best <span className="text-green-500">Dairy</span> from us
        </h1>
        <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
      </div> */}
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 items-center justify-center lg:grid-cols-4 mx-auto px-2 md:px-4 lg:px-10 -mt-10 mb-20">
        {seaFood &&
          seaFood.map((food) => <Card key={food._id} food={food}></Card>)}
      </div>
    </div>
  );
};

export default AllDairy;
