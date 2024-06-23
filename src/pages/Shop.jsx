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
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dairy</Tab>
          <Tab>Fruits</Tab>
          <Tab>Meat</Tab>
          <Tab>Vegitables</Tab>
        </TabList>

        <TabPanel>
          <AllDairy></AllDairy>
        </TabPanel>
        <TabPanel>
          <AllFruits></AllFruits>
        </TabPanel>
        <TabPanel>
          <AllVegitables></AllVegitables>
        </TabPanel>
        <TabPanel>
          <AllMeatandSeaFood></AllMeatandSeaFood>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
