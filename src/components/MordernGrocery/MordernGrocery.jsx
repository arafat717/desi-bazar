import { IoIosArrowForward } from "react-icons/io";

const MordernGrocery = () => {
  return (
    <div
      className="hero h-[150px] md:min-h-[350px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/delicious-food-arrangement-flat-lay_23-2149235809.jpg?t=st=1721286469~exp=1721290069~hmac=bc3ab4b962b516d142c0dd9b5eae6cc592d8c74e6a4b98ca1cb300e4913ee173&w=826)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">
            Get the best deal for Modern Grocery
          </h1>
          <button className="bg-green-600 mt-8 px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-2 rounded text-white">
            <span className="text-sm sm:text-[14px] font-semibold">
              Shop Now
            </span>
            <IoIosArrowForward className="text-lg sm:text-[18px]"></IoIosArrowForward>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MordernGrocery;
