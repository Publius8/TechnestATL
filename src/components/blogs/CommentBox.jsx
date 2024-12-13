import React, { useState } from "react";

export default function CommentBox({ onCommentSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState([false, false, false, false, false]); // Rating for 5 stars

  const handleRatingChange = (index) => {
    const newRating = rating.map((_, i) => i <= index);
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      email,
      title,
      reviewText: comment,
      stars: rating.filter(Boolean).length, // Count the number of true ratings
      date: new Date().toLocaleDateString(),
      avatar: "default-avatar.png", // Placeholder, you can customize
      images: [], // Optional images can be added
      desc: comment, // Description text
    };
    onCommentSubmit(newComment); // Pass new comment to parent component
    setName("");
    setEmail("");
    setTitle("");
    setComment("");
    setRating([false, false, false, false, false]); // Reset ratings
  };

  return (
    <>
      <h2 className="text-30 pt-60">Leave a Reply</h2>
      <p className="mt-30">Your email address will not be published. Required fields are marked *</p>

      <div className="reviewsGrid pt-30">
        {/* Rating Section */}
        {["Location", "Amenities", "Food", "Room", "Price"].map((category, index) => (
          <div className="reviewsGrid__item" key={index}>
            {category}
            <div className="d-flex x-gap-5 pl-20">
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  className={`icon-star text-10 ${rating[i] ? "text-yellow-2" : ""}`}
                  onClick={() => handleRatingChange(i)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="contactForm y-gap-30 pt-30">
        <div className="row y-gap-30">
          <div className="col-md-6">
            <div className="form-input">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">Title</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-input">
              <textarea
                required
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">Comment</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <button
              className="button -md -dark-1 bg-accent-1 text-white"
              onClick={handleSubmit}
            >
              Post Comment
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
