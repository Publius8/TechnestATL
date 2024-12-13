import React, { useState } from "react";

export default function CommentBox({ addComment }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      avatar: "https://via.placeholder.com/150", // можно заменить на динамический аватар
      name,
      date: new Date().toLocaleDateString(),
      stars,
      reviewText: title,
      desc: comment,
      images: [], // Дополнительные изображения можно добавить
    };
    addComment(newComment);
    setName("");
    setEmail("");
    setTitle("");
    setComment("");
  };

  return (
    <>
      <h2 className="text-30 pt-60">Leave a Reply</h2>
      <p className="mt-30">
        Your email address will not be published. Required fields are marked *
      </p>

      <form onSubmit={handleSubmit} className="contactForm y-gap-30 pt-30">
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
              ></textarea>
              <label className="lh-1 text-16 text-light-1">Comment</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <button className="button -md -dark-1 bg-accent-1 text-white w-100">
              Post Comment
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
