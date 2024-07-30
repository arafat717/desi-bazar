import { Helmet } from "react-helmet-async";
import AllProduct from "./AllProduct";
import Banner from "./Banner";
import DairyandEggSection from "./DairyandEggSection";
import FruitsSection from "./FruitsSection";
// import MeatSeaFood from "./MeatSeaFood";
import MarketCatagory from "../../components/MarketCatagory/MarketCatagory";
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import TopSellingProduct from "../../components/TopSellingProduct/TopSellingProduct";
import FlashSale from "../../components/FlashSale/FlashSale";
import FreshGrocery from "../../components/FreshGrocery/FreshGrocery";
import MordernGrocery from "../../components/MordernGrocery/MordernGrocery";
import DiscountSection from "../../components/DiscountSection/DiscountSection";

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
      <FlashSale></FlashSale>
      <TopSellingProduct></TopSellingProduct>
      <FreshGrocery></FreshGrocery>
      <FruitsSection></FruitsSection>
      <MordernGrocery></MordernGrocery>
      <DairyandEggSection></DairyandEggSection>
      <DiscountSection></DiscountSection>
    </>
  );
};

export default Home;
