import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/loginRegistreation/GoogleLogin";

/* eslint-disable react/no-unescaped-entities */
const Resistration = () => {
  const [passMatch, setPassMatch] = useState(true);

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    if (password === confirm_password) {
      console.log(email, password, confirm_password);
    }
  };
  return (
    <div className="hero w-3/4 mx-auto bg-white h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1716223861~exp=1716227461~hmac=74ed66378f6bc9e04387962aef0829cc3054a29ed632c15fb7ae1de305f4b17c&w=740"
            alt="login"
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSUbmit}>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    name="confirm_password"
                    required
                  />
                </div>
                {!passMatch && (
                  <div className="my-2">
                    <p className="text-red-500">Passwords do not match!</p>
                  </div>
                )}
                <div className="form-control mt-6">
                  <input
                    className="btn bg-red-500 text-white"
                    type="submit"
                    value="Register"
                  />
                </div>
                <div className="mt-3">
                  <GoogleLogin />
                </div>
                <div className="mt-3">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-red-500">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resistration;
