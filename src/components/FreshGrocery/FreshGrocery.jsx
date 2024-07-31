import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../public/women-bg.png";

const FreshGrocery = () => {
  return (
    <div className="px-12 my-32">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex items-center md:felx-row bg-pink-200 md:w-1/2">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="md:text-xl md:font-bold">Fresh</h1>
            <h1 className=" text-2xl font-bold my-2">
              The 14 Most Nutrient- Dense Vegetables
            </h1>
            <div className="relative">
              <button className="bg-orange-600 button-1">
                <span className="text-sm sm:text-[14px] font-semibold">
                  Shop Now
                </span>
                <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <img className="hidden sm:block" src={img1} alt="" />
          </div>
        </div>
        <div className="flex items-center md:felx-row bg-green-200 md:w-1/2">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-xl font-bold">Fresh</h1>
            <h1 className="text-2xl font-bold my-2">Healthy & Goods Fruits</h1>
            <div className="relative">
              <button className="bg-green-600 button-1">
                <span className="text-sm sm:text-[14px] font-semibold">
                  Shop Now
                </span>
                <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="hidden sm:block" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshGrocery;
