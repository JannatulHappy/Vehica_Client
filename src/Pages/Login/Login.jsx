// LoginForm.js
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
// import { updateProfile } from "firebase/auth";

function Login() {
  const { signIn, user, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log("login");
        Swal.fire("Good job!", "Login Successfully!", "success");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };
  console.log(user, "user");
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="px-5 py-10">
      <div className="py-5 text-center">
        <h1 className="text-4xl font-bold">Please Login</h1>
      </div>

      <div className="flex-shrink-0 w-full p-6 mx-auto text-black shadow-2xl lg:w-1/3 md:w-2/4 card bg-base-100">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
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
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="mt-6 form-control">
            <button className="text-white bg-black btn">Login</button>
          </div>
        </form>
        <button
          className="text-white bg-black btn"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button>
        <p className="my-5 font-semibold text-center ">
          Don't have an account?
          <Link
            to="/register"
            className="underline text-orange hover:underline"
          >
            {" "}
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
