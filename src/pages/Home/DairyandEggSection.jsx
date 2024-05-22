import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const DairyandEggSection = () => {
  return (
    <div className="my-28">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="px-10 text-2xl font-bold">
            Best <span className="text-green-500">Fruits</span> from us
          </h1>
          <hr className="w-[200px] ml-10 border border-green-300 mt-2" />
        </div>
        <div className="mt-5 ml-9">
          <Link to="/dairy" className="pr-20 md:visible">
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
              src="https://img.freepik.com/premium-photo/glass-milk-chocolate-wood-table-background-illustration-images-3d-render-ai-generated_796580-197.jpg?w=740"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Milk
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Milk directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-vector/cheese-slices-3d-realistic-vector-illustration_107791-12115.jpg?t=st=1716376262~exp=1716379862~hmac=3b0e4745296caa84f1cbdb2278c1f134b84b01bf2506986f584599e590085da5&w=740"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Cheese
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Cheese directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/top-view-woman-eating-yogurt-bowl-with-wooden-spoon-olives-black-bread-wooden-background_141793-52123.jpg?t=st=1716376329~exp=1716379929~hmac=7477a29875f75679cc9dc91de1c7c4e364ca2c4b3f14716d2c410caf22431afa&w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Yogurt
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Yogurt directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/brown-eggs_2829-13455.jpg?t=st=1716376370~exp=1716379970~hmac=1907e9de9c5d2ad3c58b01c432bea6b3ddbe1e3b655932440bf362574f913fcd&w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Eggs
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>Fresh Eggs directly from the farmer's market.</p>
            <div className="flex justify-end gap-2">
              <div className="badge badge-outline cursor-pointer">Details</div>
              <div className="badge badge-outline cursor-pointer">Purchase</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/clay-board-nest-noodles-glass-bowl-flour-blue-background_114579-46374.jpg?t=st=1716376419~exp=1716380019~hmac=369bae449d58665b157a9d9b554a3d894faac999ab54f1293adf10ad8a63c00d&w=826"
              alt="Shoes"
              className="w-[400px] h-[180px]"
            />
          </figure>
          <div className="card-body border border-t-orange-100">
            <h2 className="card-title">
              Butter
              <div className="badge badge-secondary">$4.45</div>
            </h2>
            <p>
              Butter grows in organic soil in the garden on the vegetable area
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

export default DairyandEggSection;
