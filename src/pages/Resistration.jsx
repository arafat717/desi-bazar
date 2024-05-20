import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Resistration = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Resister</button>
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-red-400">
                login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resistration;
