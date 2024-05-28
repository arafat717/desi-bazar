import { useEffect, useState } from "react";
import VegitableTable from "../Ui/VegitableTable";

const VegitablesManage = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/vegitables")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  console.log(seaFood);
  return (
    <div className="w-full">
      <h1 className="font-bold text-center text-2xl mb-5">Vegitables</h1>
      <VegitableTable data={seaFood}></VegitableTable>
    </div>
  );
};

export default VegitablesManage;
