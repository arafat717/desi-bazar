import img1 from "../../../public/blog-img-1.webp";
import img2 from "../../../public/blog-img-2.webp";
import img3 from "../../../public/blog-img-3.webp";
import { IoPersonOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 hover:text-green-600">
          My Latest News
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-2 md:px-10 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        <div className="w-[350px] sm:w-[320px] md:w-[400px] bg-white shadow-lg cursor-pointer card1 rounded">
          <div className="overflow-hidden">
            <img className="image-style" src={img1} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-start gap-10">
              <p className="flex items-center gap-2">
                <IoPersonOutline className="text-green-600 font-semibold"></IoPersonOutline>{" "}
                <span className="text-gray-500 font-semibold">By Admin</span>
              </p>
              <p className="flex items-center gap-2">
                <BiCommentDetail className="text-green-600 font-semibold"></BiCommentDetail>{" "}
                <span className="text-gray-500 font-semibold">Comments</span>
              </p>
            </div>
            <h1 className="text-2xl font-bold my-5 hover:text-green-600">
              Top 10 Best Professional Blogging Platforms for 2022
            </h1>
            <hr className="text-green-600" />
            <div className="flex">
              <h5 className="flex items-center gap-2 mt-5 text-green-600 cursor-pointer">
                <span className="text-xl font-semibold">Read More</span>
                <FaArrowRightLong></FaArrowRightLong>
              </h5>
            </div>
          </div>
        </div>
        <div className="w-[350px] sm:w-[320px] md:w-[400px] bg-white shadow-lg cursor-pointer card1 rounded">
          <div className="overflow-hidden">
            <img className="image-style" src={img2} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-start gap-10">
              <p className="flex items-center gap-2">
                <IoPersonOutline className="text-green-600 font-semibold"></IoPersonOutline>{" "}
                <span className="text-gray-500 font-semibold">By Admin</span>
              </p>
              <p className="flex items-center gap-2">
                <BiCommentDetail className="text-green-600 font-semibold"></BiCommentDetail>{" "}
                <span className="text-gray-500 font-semibold">Comments</span>
              </p>
            </div>
            <h1 className="text-2xl font-bold my-5 hover:text-green-600">
              Top 10 Best Professional Blogging Platforms for 2022
            </h1>
            <hr className="text-green-600" />
            <div className="flex">
              <h5 className="flex items-center gap-2 mt-5 text-green-600 cursor-pointer">
                <span className="text-xl font-semibold">Read More</span>
                <FaArrowRightLong></FaArrowRightLong>
              </h5>
            </div>
          </div>
        </div>
        <div className="w-[350px] sm:w-[320px] md:w-[400px] bg-white shadow-lg cursor-pointer card1 rounded">
          <div className="overflow-hidden">
            <img className="image-style" src={img3} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-start gap-10">
              <p className="flex items-center gap-2">
                <IoPersonOutline className="text-green-600 font-semibold"></IoPersonOutline>{" "}
                <span className="text-gray-500 font-semibold">By Admin</span>
              </p>
              <p className="flex items-center gap-2">
                <BiCommentDetail className="text-green-600 font-semibold"></BiCommentDetail>{" "}
                <span className="text-gray-500 font-semibold">Comments</span>
              </p>
            </div>
            <h1 className="text-2xl font-bold my-5 hover:text-green-600">
              Top 10 Best Professional Blogging Platforms for 2022
            </h1>
            <hr className="text-green-600" />
            <div className="flex">
              <h5 className="flex items-center gap-2 mt-5 text-green-600 cursor-pointer">
                <span className="text-xl font-semibold">Read More</span>
                <FaArrowRightLong></FaArrowRightLong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
