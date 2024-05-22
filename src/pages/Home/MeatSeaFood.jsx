import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const MeatSeaFood = () => {
  return (
    <div className="my-36">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Best <span className="text-green-500">Meat and Seafood</span> from
            us
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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-2 mt-8 mb-20 px-10">
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-psd/red-fresh-apple-isolated-con-transparent-background_125540-5172.jpg?t=st=1716360329~exp=1716363929~hmac=882644e9eece7f3a7f3964c4151a0a9c30486d46d2efed1454358569192c6a79&w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Apple
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Apple directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/premium-psd/sliced-ripe-oange-fruit-isolated_253984-4571.jpg?w=740"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Orange
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Orange directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-psd/photo-whole-halved-mango-isolated-transparent-background_125540-5146.jpg?t=st=1716360457~exp=1716364057~hmac=d4f3e463ec3cf9fa9131c2bc39136a8b22744925a6359bab142684a87dd755e1&w=740"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Mango
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Mango directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/fresh-strawberries-wooden-table_1150-8055.jpg?t=st=1716360535~exp=1716364135~hmac=cc84810fb3e7e1d7bda459b52140621870f3817eb27e47d20e861b8017126baa&w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Strawberry
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Strawberry directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/glass-bowl-with-pieces-watermelon_1268-33630.jpg?t=st=1716360608~exp=1716364208~hmac=4d5a44c57387331734f5a176f8828eadfc80e4a5bbe6365a7f61e514484c124d&w=740"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Watermelon
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>
              Watermelon grows in organic soil in the garden on the vegetable
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

export default MeatSeaFood;
