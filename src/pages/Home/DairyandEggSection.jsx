import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Ui/Card";

/* eslint-disable react/no-unescaped-entities */
const DairyandEggSection = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("https://grocary-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-28">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            New <span className="text-green-500">Arrivals</span>
          </h1>
          <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
        </div>
        <div className="mt-5 ml-9">
          <Link to="/dairy" className="pr-20 md:visible">
            <button className="btn btn-outline btn-success">
              Show All Fruits
            </button>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 items-center justify-center lg:grid-cols-4 mx-auto px-2 md:px-4 lg:px-10 mt-8 mb-20">
        {seaFood &&
          seaFood
            .slice(0, 12)
            .map((food) => <Card key={food._id} food={food}></Card>)}
      </div>
    </div>
  );
};

export default DairyandEggSection;
