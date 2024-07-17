import { Link } from "react-router-dom";
import img1 from "../../../public/c-img-1.webp";
import img2 from "../../../public/c-img-2.webp";
import img3 from "../../../public/c-img-3.webp";
import img4 from "../../../public/c-img-4.webp";
import img5 from "../../../public/c-img-5.webp";
// import img6 from "../../../public/c-img-6.webp";

const MarketCatagory = () => {
  return (
    <div className="px-10 w-full mx-auto">
      <div className="md:flex justify-between items-center my-8 ">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Market <span className="text-green-500">Category</span>
          </h1>
          <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
        </div>
        <div className="mt-5 ml-9">
          <Link to="/fruits" className="pr-20 md:visible">
            <button className="btn btn-outline btn-success">
              Show All Fruits
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-6 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="w-60 h-60">
            <img
              className="bg-gray-100 rounded p-14 hover:border border-green-500"
              src={img1}
              alt=""
            />
          </div>
          <div className="-ml-12">
            <h1 className="-mt-6 text-xl font-bold text-gray-400">Fruits</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-60 h-60">
            <img
              className="bg-gray-100 rounded p-14 hover:border border-green-500"
              src={img2}
              alt=""
            />
          </div>
          <div className="-ml-12">
            <h1 className="-mt-6 text-xl font-bold text-gray-400">Fruits</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-60 h-60">
            <img
              className="bg-gray-100 rounded p-14 px-16 hover:border border-green-500"
              src={img3}
              alt=""
            />
          </div>
          <div className="-ml-12">
            <h1 className="-mt-6 text-xl font-bold text-gray-400">Fruits</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-60 h-60">
            <img
              className="bg-gray-100 rounded p-14 hover:border border-green-500"
              src={img4}
              alt=""
            />
          </div>
          <div className="-ml-12">
            <h1 className="-mt-6 text-xl font-bold text-gray-400">Fruits</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-60 h-60">
            <img
              className="bg-gray-100 rounded p-14 px-16 hover:border border-green-500"
              src={img5}
              alt=""
            />
          </div>
          <div className="-ml-12">
            <h1 className="-mt-6 text-xl font-bold text-gray-400">Fruits</h1>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center">
        <div className="w-60 h-60">
          <img
            className="bg-gray-100 rounded p-14 hover:border border-green-500"
            src={img6}
            alt=""
          />
        </div>
        <div className="-ml-12">
          <h1 className="-mt-6 text-xl font-bold text-gray-400">Fruits</h1>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default MarketCatagory;
