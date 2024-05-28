import { useEffect, useState } from "react";
import Table from "../Ui/Table";

const FrutiesManage = () => {
  const [seaFood, setSeaFood] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/fruits")
      .then((res) => res.json())
      .then((data) => setSeaFood(data));
  }, []);
  console.log(seaFood);
  return (
    <div className="w-full">
      <Table data={seaFood}></Table>
    </div>
  );
};

export default FrutiesManage;
