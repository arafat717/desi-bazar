import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const { data: Admin, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user.email}`
      );
      return res.json();
    },
  });
  const isAdmin = Admin?.admin;
  // console.log(isAdmin);
  return [isAdmin, isLoading];
};

export default useAdmin;
