import "./DiscountSection.css";
import img from "../../../public/arafat.png";

const DiscountSection = () => {
  return (
    <div className="bg-green-600">
      <div className="flex justify-center items-center md:justify-between flex-col md:flex-row px-2 md:px-10 gap-8">
        <div>
          <img className="h-[300px]" src={img} alt="" />
        </div>
        <div className="p-20 md:pl-32 md:p-0 flex justify-center text-white">
          <div className="md:mr-32">
            <h1 className="text-4xl font-bold">Get 20% Off Discount Coupon</h1>
            <p className="text-xl font-semibold my-6">
              by Subscribe our Newsletter
            </p>
            <div className="flex">
              <input
                className=" p-2 hidden md:p-4 md:w-96 text-black rounded-sm border border-none hover:border-none focus:border-none"
                type="email"
                name=""
                id=""
                placeholder="Email Address"
              />
              <button className="bg-yellow-600 p-2 hidden md:p-4 text-black font-bold">
                Get The coupone
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
