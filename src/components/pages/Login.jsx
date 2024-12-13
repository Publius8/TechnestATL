import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Initialize the useNavigate hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user by email
    const user = storedUsers.find((user) => user.email === email);

    if (user && user.password === password) {
      // Clear the form
      setEmail("");
      setPassword("");

      // Success notification
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // Delay the redirect to ensure the toast is shown before navigation
      setTimeout(() => {
        navigate("/"); // Redirect to the homepage or main screen
      }, 1000); // Delay navigation for 1 second (adjust as needed)
    } else {
      // Error notification
      toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">Log In</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">
                We're glad to see you again!
              </div>
              <div className="mt-5">
                Don't have an account?{" "}
                <Link to="/register" className="text-accent-1">
                  Sign Up!
                </Link>
              </div>
            </div>

            <form
              onSubmit={handleLogin}
              className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
            >
              <div className="form-input">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="lh-1 text-16 text-light-1">Email Address</label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="lh-1 text-16 text-light-1">Password</label>
              </div>

              <button
                type="submit"
                className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30"
              >
                Log In
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
