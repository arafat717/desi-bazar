import { IoPersonOutline } from "react-icons/io5";
import Cover from "../Cover";
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../../public/blog-img-1.webp";
import img2 from "../../../public/blog-img-2.webp";
import img3 from "../../../public/blog-img-3.webp";
import img4 from "../../../public/blog-img-4.webp";
import img5 from "../../../public/blog-img-5.webp";
import img6 from "../../../public/blog-img-6.webp";

const BlogPage = () => {
  return (
    <div>
      <Cover page="Our Blogs"></Cover>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 px-2 md:px-10 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center my-20">
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
                Must-Have WordPress Plugins for Ecommerce Websites
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
                15 Best WordPress Newspaper Themes to Look Out for
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
              <img className="image-style" src={img4} alt="" />
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
                6 Best WordPress E-commerce Plugins for Online Stores
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
              <img className="image-style" src={img5} alt="" />
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
                The iPhone 14 Series is on its way! Rumors turned out
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
              <img className="image-style" src={img6} alt="" />
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
                Business-to-consumer Ecommerce involves selling...
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
    </div>
  );
};

export default BlogPage;
