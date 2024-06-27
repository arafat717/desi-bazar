import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users, refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      return res.json();
    },
  });

  return (
    <div>
      <h1>{users?.length}</h1>
    </div>
  );
};

export default AllUsers;
