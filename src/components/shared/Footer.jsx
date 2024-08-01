import { Link } from "react-router-dom";
import img from "../../../public/footer-logo.webp";
import payment1 from "../../../public/payment-img.png";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import image2 from "../../../public/arafat.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-green-600">
        <div className="max-w-full mx-auto flex justify-center items-center md:justify-between flex-col md:flex-row px-2 md:px-5 lg:px-10 xl:px-16 2xl:px-40 gap-8">
          <div className="w-1/2 flex justify-center">
            <img
              className="md:h-[400px] h-[300px] w-full"
              src={image2}
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 p-2 py-5 mb-10 md:mb-0  md:p-0 flex md:justify-start text-white">
            <div className="md:mr-32">
              <h1 className="text-4xl font-bold">
                Get 20% Off Discount Coupon
              </h1>
              <p className="text-xl font-semibold my-6">
                by Subscribe our Newsletter
              </p>
              <div className="flex">
                <input
                  className=" p-2  md:px-3 md:w-96 md:h-14 text-black focus:outline-none rounded-sm border border-none hover:border-none focus:border-none"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                />
                <button className=" bg-yellow-600  h-14 px-1 w-40 text-black font-bold">
                  Get The coupone
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.884)" }}
        className=" text-gray-50 "
      >
        <footer className="px-10 md:px-5 lg:px-10 xl:px-16 2xl:px-40 py-16">
          <div className="flex flex-wrap flex-col md:flex-row justify-evenly">
            <div>
              <img src={img} alt="" />
              <ul>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Track Order</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Delivery & Returns</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Warranty</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold text-xl">About Us</li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Rave’s Story</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Work With Us</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Coporate News</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Investors</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className="font-bold text-xl">Useful Links</li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Secure Payment</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Privacy Policy</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Terms of Use</Link>
                </li>
                <li className="my-4 text-gray-300 hover:text-green-600 hover:underline">
                  <Link>Archived Products</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold text-xl">Contact Info</li>
                <li className="my-4 text-gray-300 flex items-center gap-4">
                  <CiLocationOn className="text-4xl border border-white p-2 rounded-full text-white"></CiLocationOn>
                  <div>
                    <span className="font-bold text-xl">Address:</span>
                    <Link>
                      <br /> 4517 Washington Ave. Manchester, <br /> Kentucky
                      39495
                    </Link>
                  </div>
                </li>
                <li className="my-4 text-gray-300 flex items-center gap-4">
                  <FiPhone className="text-4xl border border-white p-2 rounded-full text-white"></FiPhone>
                  <div>
                    <span className="font-bold text-xl">Phone:</span>
                    <Link>
                      <br /> +880171889547
                    </Link>
                  </div>
                </li>
                <li className="my-4 text-gray-300 flex items-center gap-4">
                  <MdOutlineEmail className="text-4xl border border-white p-2 rounded-full text-white"></MdOutlineEmail>
                  <div>
                    <span className="font-bold text-xl">Email:</span>
                    <Link>
                      <br /> Demo@gmail.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <hr className="text-white w-full" />
        <div className="py-6 px-5 md:px-5 lg:px-10 xl:px-16 2xl:px-40">
          <div className="flex justify-center md:justify-between flex-col md:flex-row gap-10">
            <div className="flex items-center gap-4">
              <div className="flex gap-7 flex-col md:flex-row">
                <div className="flex items-center gap-4">
                  <Link>
                    <FaInstagram className="font-bold text-xl"></FaInstagram>
                  </Link>
                  <Link>
                    <FaFacebookF className="font-bold text-xl"></FaFacebookF>
                  </Link>
                  <Link>
                    <BsYoutube className="font-bold text-xl"></BsYoutube>
                  </Link>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    ©2024 <span className="text-green-600">Quomodosoft</span>{" "}
                    All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <img className="w-72 cursor-pointer" src={payment1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
