import { useEffect, useState } from "react";
import VegitableTable from "../Ui/VegitableTable";

const VegitablesManage = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/vegitables")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  const handleDeleteProduct = (id) => {
    setSeaFood(seaFood.filter((sea) => sea.id !== id));
  };
  return (
    <div className="w-full">
      <h1 className="font-bold text-center text-2xl mb-5">Vegitables</h1>
      <VegitableTable
        data={seaFood}
        handleDeleteProduct={handleDeleteProduct}
      ></VegitableTable>
    </div>
  );
};

export default VegitablesManage;
