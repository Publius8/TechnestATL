import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Stars from "../common/Stars";

export default function MainInformation({ tour }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const handleWishlistClick = () => {
    const newState = !isInWishlist; // Toggle wishlist state
    setIsInWishlist(newState);

    // Display Toastify message based on new state
    const toastId = toast.success(newState ? "Added to Wishlist!" : "Removed from Wishlist!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      onClose: () => {
        // Redirect to /db-main after toast closes
        navigate("/db-main");
      },
    });
  };

  const handleShareClick = () => {
    // Redirect to Instagram (or a specific Instagram post/profile)
    window.open("https://www.instagram.com/", "_blank");
  };

  return (
    <>
      <div className="row y-gap-20 justify-between items-end">
        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10 items-center">
            <div className="col-auto">
              <button className="button -accent-1 text-14 py-5 px-15 bg-accent-1-05 text-accent-1 rounded-200">
                Bestseller
              </button>
            </div>
            <div className="col-auto">
              <button className="button -accent-1 text-14 py-5 px-15 bg-light-1 rounded-200">
                Free cancellation
              </button>
            </div>
          </div>

          <h2 className="text-40 sm:text-30 lh-14 mt-20">
            {tour?.title.split(" ").slice(0, 7).join(" ")}
            <br />
            {tour?.title.split(" ").slice(7).join(" ")}
          </h2>

          <div className="row x-gap-20 y-gap-20 items-center pt-20">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex x-gap-5 pr-10">
                  <Stars star={tour?.rating} font={12} />
                </div>
                {tour?.rating} ({tour.ratingCount})
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <i className="icon-pin text-16 mr-5"></i>
                {tour?.location}
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <i className="icon-reservation text-16 mr-5"></i>
                30K+ booked
              </div>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="d-flex x-gap-30 y-gap-10">
            <a href="#" className="d-flex items-center" onClick={handleShareClick}>
              <i className="icon-share flex-center text-16 mr-10"></i>
              Share
            </a>

            <a
              href="#"
              className={`d-flex items-center ${isInWishlist ? "text-red-600" : ""}`} // This is where the red color gets applied conditionally
              onClick={handleWishlistClick}
            >
              <i className="icon-heart flex-center text-16 mr-10"></i>
              Wishlist
            </a>
          </div>
        </div>
      </div>

      {/* Toast container for showing messages */}
      <ToastContainer />
    </>
  );
}
