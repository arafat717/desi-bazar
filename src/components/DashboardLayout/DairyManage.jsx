import { useEffect, useState } from "react";
import DairyTable from "../Ui/DairyTable";

const DairyManage = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/dairy")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  const handleDeleteProduct = (id) => {
    setSeaFood(seaFood.filter((sea) => sea.id !== id));
  };
  return (
    <div className="w-full">
      <h1 className="font-bold text-center text-2xl mb-5">Dairy</h1>
      <DairyTable
        data={seaFood}
        handleDeleteProduct={handleDeleteProduct}
      ></DairyTable>
    </div>
  );
};

export default DairyManage;
