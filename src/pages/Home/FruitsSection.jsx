import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Ui/Card";

/* eslint-disable react/no-unescaped-entities */
const FruitsSection = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  return (
    <div className="my-36">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Best <span className="text-green-500">Fruits</span> from us
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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 mt-8 mb-20 px-10">
        {seaFood &&
          seaFood
            .slice(0, 5)
            .map((food) => <Card key={food.id} food={food}></Card>)}
      </div>
    </div>
  );
};

export default FruitsSection;
