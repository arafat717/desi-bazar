import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../public/about-img-1 (1).webp";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const KnowMoreSection = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-5  items-center px-2  md:px-10 my-32">
      <div className=" w-full  md:w-1/2">
        <img src={img1} alt="" />
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <div>
          <h1 className="text-4xl font-bold text-gray-700">
            Know More About Us?
          </h1>
          <p className="font-semibold text-sm text-gray-400 my-7">
            It is a long established fact that a reader will be distracted by
            the readable content <br /> of a page when looking at its layout. It
            is a long established fact a that a reader will <br /> be distracted
            by the readable content of a page when our looking at its layout.
          </p>
          <ul className="font-semibold text-xl text-gray-700">
            <li className="flex items-center gap-4">
              <BsArrowUpRightCircleFill className="text-green-600 size-7"></BsArrowUpRightCircleFill>
              <span>Complete Sanitization and cleaning of bathroom</span>
            </li>
            <li className="my-3 flex items-center gap-4">
              <BsArrowUpRightCircleFill className="text-green-600 size-7"></BsArrowUpRightCircleFill>
              <span>
                when looking at its layout. It is a long established fact
              </span>
            </li>
            <li className="flex items-center gap-4">
              <BsArrowUpRightCircleFill className="text-green-600 size-7"></BsArrowUpRightCircleFill>
              <span>Complete Sanitization and cleaning of bathroom</span>
            </li>
          </ul>
          <div className="relative">
            <button className=" bg-green-600 button-12 ">
              <span className="text-sm sm:text-[14px] font-semibold">
                Contact Us
              </span>
              <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMoreSection;
