import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression for password validation (at least 8 characters, 1 uppercase, 1 number)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Validate password
    if (!passwordPattern.test(formData.password)) {
      toast.error("Password must be at least 8 characters long, contain one uppercase letter and one number.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Save the new user in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Clear the form data
    setFormData({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    // Success toast notification
    toast.success("Registration successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // Redirect to the homepage
    setTimeout(() => {
      navigate("/"); // This will navigate to the homepage ("/")
    }, 3000); // Delay for the toast message to show
  };

  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">Register</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">
                Let's create your account!
              </div>
              <div className="mt-5">
                Already have an account?{" "}
                <Link to="/login" className="text-accent-1">
                  Log In!
                </Link>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
            >
              <div className="form-input">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">Username</label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">First Name</label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">Last Name</label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">Your Email</label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                  title="Password must be at least 8 characters long, contain one uppercase letter, and one number."
                />
                <label className="lh-1 text-16 text-light-1">Password</label>
              </div>

              <button className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
                Register
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
