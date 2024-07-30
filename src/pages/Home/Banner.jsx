/* eslint-disable react/no-unescaped-entities */
import img from "../../../public/hero-img-1.webp";
import { IoIosArrowForward } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 py-10 md:py-20 w-full">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 text-left md:text-left">
          <h1 className="uppercase text-2xl sm:text-3xl text-green-600 font-semibold my-4">
            Fresh Grocery
          </h1>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
              There's you can Buy
            </p>
            <br />
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold my-1">
              your all of the Grocery
            </p>
            <br />
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Products.
            </p>
          </div>
          <div className="relative">
            <button className="bg-yellow-600 button-1">
              <span className="text-sm sm:text-[14px] font-semibold">
                Shop Now
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src={img} alt="" className="mx-auto" />
        </div>
      </div>
      <div className="text-white bg-green-600 py-6 flex flex-wrap justify-around items-center rounded mt-12 md:mt-32 gap-4 text-left md:gap-0 mx-auto">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="flex text-left items-center gap-3">
              <BsCart3 className="text-[30px] sm:text-[45px] -mt-2"></BsCart3>
              <div>
                <h1 className="font-bold text-sm sm:text-base">
                  Free Shipping
                </h1>
                <p className="font-semibold text-xs sm:text-sm">
                  When ordering over $100
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Banner;
