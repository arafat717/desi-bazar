import { Helmet } from "react-helmet-async";
import AllProduct from "./AllProduct";
import Banner from "./Banner";
import DairyandEggSection from "./DairyandEggSection";
import FruitsSection from "./FruitsSection";
import MeatSeaFood from "./MeatSeaFood";
import MarketCatagory from "../../components/MarketCatagory/MarketCatagory";
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import TopSellingProduct from "../../components/TopSellingProduct/TopSellingProduct";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Online Bazar - Home</title>
      </Helmet>
      <Banner></Banner>
      <MarketCatagory></MarketCatagory>
      <ProductBanner></ProductBanner>
      <AllProduct></AllProduct>
      <TopSellingProduct></TopSellingProduct>
      <FruitsSection></FruitsSection>
      <DairyandEggSection></DairyandEggSection>
      <MeatSeaFood></MeatSeaFood>
    </>
  );
};

export default Home;
