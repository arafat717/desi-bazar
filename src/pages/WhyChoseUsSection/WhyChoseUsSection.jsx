/* eslint-disable react/no-unescaped-entities */
import { RiRefund2Line } from "react-icons/ri";
import { BsWindowFullscreen } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
const WhyChoseUsSection = () => {
  return (
    <div className="my-20 flex md:flex-row flex-col justify-between gap-5 items-center px-10">
      <div className="text-center flex justify-center items-center">
        <div>
          <BsWindowFullscreen className="ml-20 text-white text-[150px] bg-green-600 p-10 rounded-full"></BsWindowFullscreen>
          <h1 className="text-3xl text-gray-700 font-bold my-3">
            Choose product
          </h1>
          <p className=" font-semibold text-gray-400">
            If you are going to use a passage of you <br /> need to be sure
            there isn't anything emc <br /> barrassing hidden in the middle
          </p>
        </div>
      </div>
      <div className="text-center flex justify-center items-center">
        <div>
          <RiRefund2Line className="ml-20 text-white text-[150px] bg-green-600 p-10 rounded-full"></RiRefund2Line>
          <h1 className="text-3xl text-gray-700 font-bold my-3">
            Make Your Payment
          </h1>
          <p className=" font-semibold text-gray-400">
            Experience hassle-free online shopping <br /> with our service!
            Simply choose the <br /> product you want
          </p>
        </div>
      </div>
      <div className="text-center flex justify-center items-center">
        <div>
          <MdOutlineDeliveryDining className="ml-20 text-white text-[150px] bg-green-600 p-10 rounded-full"></MdOutlineDeliveryDining>
          <h1 className="text-3xl text-gray-700 font-bold my-3">
            Fast Delivery
          </h1>
          <p className=" font-semibold text-gray-400">
            Experience hassle-free online shopping <br /> with our service!
            enjoy fast delivery <br /> right to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUsSection;
