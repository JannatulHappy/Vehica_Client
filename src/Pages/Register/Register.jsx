// RegistrationForm.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
// import { updateProfile } from "firebase/auth";

function Register() {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    // reset error and success
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setRegisterError(
        "Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }
    // create user
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        Swal.fire("Good job!", "User Created Successfully!", "success");
        // navigate after login
        //  Navigate(location?.state ? location.state : "/");
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("profile upd", name))
          .catch();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  return (
    <div className="max-w-md p-6 mx-auto">
      <div className="py-5 text-center">
        <h1 className="text-4xl font-bold">Please Register</h1>
      </div>
      <form onSubmit={handleRegister} className="mt-4 space-y-4 text-black">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="photoUrl" className="block text-sm font-medium">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            name="photo"
            className="w-full px-3 py-2 border rounded-md"
            required
            placeholder="Enter your photo URL"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-bold text-black rounded-md bg-orange"
        >
          Register
        </button>
      </form>
      {/* <div className="my-5 text-center">
        <button
          className="text-white bg-blue01 btn"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button>
      </div> */}
      {registerError && <p className="text-red-700">{registerError}</p>}

      <p className="my-5 font-semibold text-center">
        Already have an account?
        <Link to="/login" className="text-black underline hover:underline">
          {" "}
          Please Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
