import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  console.log(data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await fetch(`https://grocary-server.vercel.app/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        toast.success("Edit Successful");
        navigate("/dashboard/user-manage");
      });
  };

  return (
    <div className="flex justify-center w-full mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl mb-4">Edit Fruits</h2>

        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-700"
          >
            UserName
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true })}
            defaultValue={data?.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            {...register("email", { required: true })}
            defaultValue={data?.email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            User Age
          </label>
          <input
            id="age"
            type="number"
            step="0.01"
            {...register("age", { required: true })}
            defaultValue={data?.age}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.age && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            User Mobile
          </label>
          <textarea
            id="phone"
            type="number"
            {...register("phone", { required: true })}
            defaultValue={data?.phone}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            User Profile
          </label>
          <textarea
            id="profile"
            type="text"
            {...register("profile", { required: true })}
            defaultValue={data?.profile}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.profile && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            id="image"
            type="url"
            {...register("image", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.image && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div> */}

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
