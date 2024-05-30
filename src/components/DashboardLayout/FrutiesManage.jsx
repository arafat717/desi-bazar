import { useEffect, useState } from "react";
import Table from "../Ui/Table";

const FrutiesManage = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  const handleDeleteProduct = (id) => {
    setSeaFood(seaFood.filter((sea) => sea.id !== id));
  };
  return (
    <div className="w-full">
      <h1 className="font-bold text-center text-2xl mb-5">Fruits</h1>
      <Table data={seaFood} handleDeleteProduct={handleDeleteProduct}></Table>
    </div>
  );
};

export default FrutiesManage;
