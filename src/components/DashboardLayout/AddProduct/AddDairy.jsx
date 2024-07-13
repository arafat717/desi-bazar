import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const image_hosting_token = import.meta.env.VITE_IMAGE;

const AddDairy = () => {
  const navigate = useNavigate();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(image_hosting_token);

  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((response) => {
        const image_url = response.data.display_url;
        console.log(image_url);
        const { catagory, description, name, price } = data;
        const newItem = {
          name,
          catagory,
          description,
          price,
          image: image_url,
        };
        console.log(newItem);
        fetch("http://localhost:5000/product/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newItem),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Product added successfuly");
            reset();
            if (data.catagory == "fruits") {
              navigate("/dashboard/fruits-manage");
            }
            if (data.catagory == "vegitables") {
              navigate("/dashboard/vegitables-manage");
            }
            if (data.catagory == "dairy") {
              navigate("/dashboard/dairy-manage");
            }
            if (data.catagory == "meat") {
              navigate("/dashboard/meat-manage");
            }
          });
      });
  };
  return (
    <div className="flex justify-center w-full mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl mb-4">Add Product</h2>

        <div className="mb-4">
          <label
            htmlFor="catagory"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="catagory"
            {...register("catagory", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select a category</option>
            <option value="fruits">Fruits</option>
            <option value="vegitables">Vegetables</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            {/* <option value="beverages">Beverages</option> */}
            {/* Add more categories as needed */}
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register("price", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            id="image"
            type="file"
            {...register("image", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.image && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDairy;
