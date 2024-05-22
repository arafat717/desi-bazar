import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const AllProduct = () => {
  return (
    <div className="my-28">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Best <span className="text-green-500">Vegitables</span> from us
          </h1>
          <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
        </div>
        <div className="mt-5 ml-9">
          <Link to="/vegitables" className="pr-20 md:visible">
            <button className="btn btn-outline btn-success">
              Show All Vegitables
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 px-10 mt-8 mb-20">
        <div className="card bg-base-100 shadow-xl mt-3">
          <figure>
            <img
              src="https://img.freepik.com/premium-photo/one-fresh-red-tomato-isolated-white_1205-548.jpg?w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Tomato
              <div className="badge badge-secondary">$3.45</div>
            </h2>
            <p>Fresh tomato directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-3">
          <figure>
            <img
              src="https://img.freepik.com/premium-psd/carrot-isolated-alpha-layer_610539-521.jpg?w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Carrot
              <div className="badge badge-secondary">$6.45</div>
            </h2>
            <p>Fresh Carrot directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-3">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/fresh-broccoli-wooden-box_176474-426.jpg?t=st=1716356309~exp=1716359909~hmac=63d5266cb87df12f29e2b1959ac522a070bf8e0947f98a2e1209efd0f1cea3e4&w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Broccoli
              <div className="badge badge-secondary">$8.45</div>
            </h2>
            <p>Fresh Broccoli directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-3">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/juicy-green-sliced-spinach-leaves-lie-wooden-cutting-board-selective-focus-close-up-spinach-idea-making-breakfast-from-organic-healthy-food_166373-1823.jpg?t=st=1716356355~exp=1716359955~hmac=f8b316a2c0f43bc7b69111bf9b79b5b2b508c9705d670ebed464b5261746c6e6&w=740"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Spinach
              <div className="badge badge-secondary">$5.45</div>
            </h2>
            <p>Fresh Spinach directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-3">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/realistic-image-cauliflower-colourful-background_125540-3806.jpg?t=st=1716356393~exp=1716359993~hmac=df008dc40287aa3f8e36ef710b182bee0994dcfdaeb918574eee4cae0c3a1cc1&w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Cauliflower
              <div className="badge badge-secondary">$3.45</div>
            </h2>
            <p>
              Cauliflower grows in organic soil in the garden on the vegetable
              area
            </p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
