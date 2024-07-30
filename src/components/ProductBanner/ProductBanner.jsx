import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../public/c-shop-img-1.webp";
import img2 from "../../../public/c-shop-img-2.webp";
import img3 from "../../../public/c-shop-img-3.webp";
import "./ProductBanner.css";

const ProductBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-screen-xl mx-auto my-16">
      <div className="bg-green-100 flex flex-col items-center py-6">
        <div>
          <h1 className="text-xl font-bold">Fresh</h1>
          <h1 className="text-4xl font-bold my-2">
            Healthy and Good <br /> Fruits
          </h1>
          <div className="relative">
            <button className="bg-green-600 button-11">
              <span className="text-sm sm:text-[14px] font-semibold">
                Shop Now
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button>
          </div>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse items-center py-6 gap-8 bg-red-100">
        <div>
          <h1 className="text-xl font-bold">Fresh</h1>
          <h1 className="text-4xl font-bold my-2">
            Healthy and Good <br /> Fruits
          </h1>
          <div className="relative">
            <button className="bg-red-600 button-2">
              <span className="text-sm sm:text-[14px] font-semibold">
                Shop Now
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button>
          </div>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="bg-purple-100 flex flex-col items-center py-6">
        <div>
          <h1 className="text-xl font-bold">Fresh</h1>
          <h1 className="text-4xl font-bold my-2">
            Healthy and Good <br /> Fruits
          </h1>
          <div className="relative">
            <button className="bg-purple-600 button-3">
              <span className="text-sm sm:text-[14px] font-semibold">
                Shop Now
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button>
          </div>
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
