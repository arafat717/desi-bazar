import { Link } from "react-router-dom";
import GoogleLogin from "../components/loginRegistreation/GoogleLogin";
import useAuth from "../hooks/useAuth";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const { signIn } = useAuth();
  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password);
  };
  return (
    <div className="hero w-3/4 mx-auto min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src="https://img.freepik.com/premium-vector/flat-illustration-design-cybersecurity_9206-2585.jpg?w=740"
            alt="resister"
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm bg-base-100">
          <form onSubmit={handleSUbmit}>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <input
                      className="btn bg-red-500 text-white"
                      type="submit"
                      value="Login"
                    />
                  </div>
                  <div className="mt-6">
                    <GoogleLogin />
                  </div>
                  <div className="mt-6">
                    <p>
                      New here?{" "}
                      <Link to="/resister" className="text-red-500">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
