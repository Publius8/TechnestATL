import React, { useState } from "react";
import Reviews from "./Reviews";
import CommentBox from "./CommentBox";

export default function BlogSingle() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <>
      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30 justify-center">
            <div className="col-lg-8">
              <h2 className="text-30 md:text-24">The Brazen Head</h2>
              <p className="mt-20">
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
                Diam phasellus vestibulum lorem sed risus ultricies. Magna sit
                amet purus gravida quis blandit...
              </p>

              {/* Reviews */}
              {comments.length > 0 ? <Reviews reviews={comments} /> : null}

              {/* Comment Form */}
              <CommentBox onCommentSubmit={handleCommentSubmit} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
