import AllProduct from "./AllProduct";
import Banner from "./Banner";
import DairyandEggSection from "./DairyandEggSection";
import FruitsSection from "./FruitsSection";
import MeatSeaFood from "./MeatSeaFood";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AllProduct></AllProduct>
      <FruitsSection></FruitsSection>
      <DairyandEggSection></DairyandEggSection>
      <MeatSeaFood></MeatSeaFood>
    </>
  );
};

export default Home;
