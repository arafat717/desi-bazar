import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <div className="max-w-[1400px] mx-auto"> */}
      <Outlet></Outlet>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
