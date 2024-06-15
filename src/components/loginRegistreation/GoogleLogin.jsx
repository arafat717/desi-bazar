/* eslint-disable no-unused-vars */
// GoogleLogin.jsx
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const token = localStorage.getItem("token");
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const data = await googleLogin();
      if (data?.user?.email) {
        const userInfo = {
          email: data.user.email,
          name: data.user.displayName,
          profile: data.user.photoURL,
        };

        const response = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userInfo),
        });

        const responseData = await response.json();
        localStorage.setItem("token", responseData?.token);
        console.log(responseData);
      }
    } catch (error) {
      console.error("Google sign-in error: ", error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
