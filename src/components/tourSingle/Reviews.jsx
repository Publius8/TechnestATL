import React from "react";
import Stars from "../common/Stars";

export default function Reviews({ comments }) {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className="pt-30">
          <div className="row justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="size-40 rounded-full">
                  <img src={comment.avatar} alt="avatar" className="img-cover" />
                </div>
                <div className="text-16 fw-500 ml-20">{comment.name}</div>
              </div>
            </div>

            <div className="col-auto">
              <div className="text-14 text-light-2">{comment.date}</div>
            </div>
          </div>

          <div className="d-flex items-center mt-15">
            <div className="d-flex x-gap-5">
              <Stars star={comment.stars} />
            </div>
            <div className="text-16 fw-500 ml-10">{comment.reviewText}</div>
          </div>

          <p className="mt-10">{comment.desc}</p>

          <div className="row x-gap-20 y-gap-20 pt-20">
            {comment.images.map((image, i) => (
              <div key={i} className="col-auto">
                <div className="size-130">
                  <img
                    src={image}
                    alt="image"
                    className="img-cover rounded-12"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex x-gap-30 items-center mt-20">
            <div>
              <a href="#" className="d-flex items-center">
                <i className="icon-like text-16 mr-10"></i>
                Helpful
              </a>
            </div>
            <div>
              <a href="#" className="d-flex items-center">
                <i className="icon-dislike text-16 mr-10"></i>
                Not helpful
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
