import Cover from "../components/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllDairy from "./AllDairy";
import AllFruits from "./AllFruits";
import AllVegitables from "./AllVegitables";
import AllMeatandSeaFood from "./AllMeatandSeaFood";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>Online Bazar - Shop</title>
      </Helmet>
      <Cover page="Shop"></Cover>
      <div className="max-w-[1400px] mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <p className="flex justify-center items-center gap-5   text-black font-bold uppercase">
            <TabList>
              <Tab>Dairy</Tab>
              <Tab>Fruits</Tab>
              <Tab>Meat</Tab>
              <Tab>Vegitables</Tab>
            </TabList>
          </p>

          <div className="min-h-screen">
            <TabPanel>
              <AllDairy></AllDairy>
            </TabPanel>
            <TabPanel>
              <AllFruits></AllFruits>
            </TabPanel>
            <TabPanel>
              <AllMeatandSeaFood></AllMeatandSeaFood>
            </TabPanel>
            <TabPanel>
              <AllVegitables></AllVegitables>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
