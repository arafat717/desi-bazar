import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const data = useLoaderData();
  return (
    <div className="md:flex bg-base-100 shadow-xl mt-2 h-full">
      <div>
        <img src={data?.image} alt="Shoes" className="w-96 h-96" />
      </div>
      <div className="card-body border border-t-orange-100">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-secondary">${data.price}</div>
        </h2>
        <p>{data.description}</p>
        <div className="flex justify-start gap-2">
          <div className="badge badge-secondary cursor-pointer">Purchase</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
