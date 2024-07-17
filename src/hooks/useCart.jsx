import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();

  const { data: cart, refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://grocary-server.vercel.app/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
