import React from "react";

// Stars component (assuming it is already available)
import Stars from "../common/Stars";

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map((elm, i) => (
        <div key={i} className="review">
          <div className="review-header">
            <div className="user-info">
              {/* Circle with user's first letter */}
              <div className="user-circle">
                <span>{elm.name[0]}</span>
              </div>
              <div className="user-name">{elm.name}</div>
            </div>
            <div className="review-date">{elm.date}</div>
          </div>

          <div className="review-content">
            <div className="stars">
              <Stars star={elm.stars} />
            </div>
            <div className="review-text">{elm.reviewText}</div>
          </div>

          <p className="review-desc">{elm.desc}</p>

          <div className="review-images">
            {elm.images.map((elm2, i2) => (
              <div key={i2} className="review-image">
                <img
                  src={elm2}
                  alt="image"
                  className="image"
                />
              </div>
            ))}
          </div>

          <div className="review-actions">
            <div className="helpful">
              <a href="#" className="action-link">
                <i className="icon-like"></i>
                Helpful
              </a>
            </div>
            <div className="not-helpful">
              <a href="#" className="action-link">
                <i className="icon-dislike"></i>
                Not helpful
              </a>
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .review {
          padding-top: 30px;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
        }

        .user-info {
          display: flex;
          align-items: center;
        }

        .user-circle {
          width: 40px;
          height: 40px;
          background-color: navy; /* Blue background */
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          margin-right: 20px;
        }

        .user-name {
          font-size: 16px;
          font-weight: 500;
        }

        .review-date {
          font-size: 14px;
          color: #6b7280;
        }

        .review-content {
          display: flex;
          align-items: center;
          margin-top: 15px;
        }

        .stars {
          margin-right: 10px;
        }

        .review-text {
          font-size: 16px;
          font-weight: 500;
        }

        .review-desc {
          margin-top: 10px;
        }

        .review-images {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .review-image {
          width: 130px;
          height: 130px;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .review-actions {
          display: flex;
          gap: 30px;
          align-items: center;
          margin-top: 20px;
        }

        .action-link {
          display: flex;
          align-items: center;
          font-size: 16px;
        }

        .icon-like,
        .icon-dislike {
          margin-right: 10px;
        }
      `}</style>
    </>
  );
}
