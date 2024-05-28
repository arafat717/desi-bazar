import { useEffect, useState } from "react";
import MeatTable from "../Ui/MeatTable";

const MeatManage = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/egg")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  console.log(seaFood);
  return (
    <div className="w-full">
      <h1 className="font-bold text-center text-2xl mb-5">Meat</h1>
      <MeatTable data={seaFood}></MeatTable>
    </div>
  );
};

export default MeatManage;
