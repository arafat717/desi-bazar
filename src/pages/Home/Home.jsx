import AllProduct from "./AllProduct";
import Banner from "./Banner";
import DairyandEggSection from "./DairyandEggSection";
import FruitsSection from "./FruitsSection";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AllProduct></AllProduct>
      <FruitsSection></FruitsSection>
      <DairyandEggSection></DairyandEggSection>
    </>
  );
};

export default Home;
