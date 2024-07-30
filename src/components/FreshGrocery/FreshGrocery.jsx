import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../public/women-bg.png";
import img2 from "../../../public/front-view-young-man-holding-novruz-honca-with-semeni-sweets-white-background-ethnic-colours-performer-ethnicity-spring-horizontal-concept_461922-5640-removebg-preview.png";

const FreshGrocery = () => {
  return (
    <div className="px-12 my-32">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex items-center md:felx-row bg-pink-200 p-8">
          <div className="w-1/2">
            <h1 className="md:text-xl md:font-bold">Fresh</h1>
            <h1 className=" text-2xl font-bold my-2">
              The 14 Most Nutrient- <br /> Dense Vegetables
            </h1>
            {/* <button className="bg-orange-600 mt-8 px-4 py-3 sm:px-6 sm:py-4 flex justify-center items-center gap-2 rounded text-white">
              <span className="text-sm sm:text-[14px] font-semibold">
                Shop Now
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button> */}
            <div className="relative">
              <button className="bg-orange-600 button-1">
                <span className="text-sm sm:text-[14px] font-semibold">
                  Shop Now
                </span>
                <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
              </button>
            </div>
          </div>
          <div className="w-1/2 ">
            <img className="hidden sm:block" src={img1} alt="" />
          </div>
        </div>
        <div className="flex items-center bg-green-200 p-8">
          <div className="w-1/2">
            <h1 className="text-xl font-bold">Fresh</h1>
            <h1 className="text-2xl font-bold my-2">
              Healthy & Goods <br />
              Fruits
            </h1>
            {/* <button className="bg-green-600 mt-8 px-4 py-3 sm:px-6 sm:py-4 flex justify-center items-center gap-2 rounded text-white">
              <span className="text-sm sm:text-[14px] font-semibold">
                Shop Now
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button> */}
            <div className="relative">
              <button className="bg-green-600 button-1">
                <span className="text-sm sm:text-[14px] font-semibold">
                  Shop Now
                </span>
                <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img className="hidden sm:block " src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshGrocery;
