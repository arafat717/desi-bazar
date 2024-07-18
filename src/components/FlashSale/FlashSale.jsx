import { IoIosArrowForward } from "react-icons/io";
import img from "../../../public/portrait-happy-family_171337-2323-removebg-preview.png";

const FlashSale = () => {
  return (
    <div className="p-4 md:px-12 mb-24">
      <div className="bg-purple-200 flex flex-col md:flex-row justify-between">
        <div className="p-2 py-6 md:p-14 w-1/2">
          <div className="flex gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-1 md:gap-3">
              <h1 className="bg-white p-6 md:p-8 rounded-full text-xl md:text-4xl font-bold text-red-400">
                78
              </h1>
              <p className="md:text-xl md:font-semibold">Days</p>
            </div>
            <div className="flex flex-col items-center gap-1 md:gap-3">
              <h1 className="bg-white p-6 md:p-8 rounded-full text-xl md:text-4xl font-bold text-green-400">
                06
              </h1>
              <p className="md:text-xl md:font-semibold">Hours</p>
            </div>
            <div className="flex flex-col items-center gap-1 md:gap-3">
              <h1 className="bg-white p-6 md:p-8 rounded-full text-xl md:text-4xl font-bold text-purple-400">
                01
              </h1>
              <p className="md:text-xl md:font-semibold">Minutes</p>
            </div>
            <div className="flex flex-col items-center gap-1 md:gap-3">
              <h1 className="bg-white p-6 md:p-8 rounded-full text-xl md:text-4xl font-bold text-red-400">
                45
              </h1>
              <p className="md:text-xl md:font-semibold">Seconds</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl md:text-5xl font-bold mt-10">
              WOO! Flash Sale
            </h1>
            <p className="text-sm md:text-xl my-5">
              You get into the 2k+ best Products in br Flash offer with as in{" "}
              <br />
              shaped sofa for sale.
            </p>
            <button className="bg-green-600 mt-8 px-4 py-3 sm:px-6 sm:py-4 flex justify-center items-center gap-2 rounded text-white">
              <span className="text-sm sm:text-[14px] font-semibold ">
                Shop Now
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="hidden sm:block md:h-[470px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
