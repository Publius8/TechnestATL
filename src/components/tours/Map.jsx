import { useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../common/Stars";

export default function Map() {
  const [getLocation, setLocation] = useState(null);

  const locationHandler = (location) => {
    setLocation(location);
  };

  const closeCardHandler = () => {
    setLocation(null);
  };

  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5261.541559591474!2d49.857226330606096!3d40.37631610243887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d01238921ad%3A0x72c8427f88833389!2sPort%20Baku%20Residence!5e0!3m2!1sru!2saz!4v1734076464478!5m2!1sru!2saz"
        width="600"
        height="450"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {getLocation !== null && (
        <div className="info-window">
          <Link
            to={`/tour-single-1/${getLocation.id}`}
            className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
          >
            <div className="tourCard__header">
              <div className="tourCard__image ratio ratio-28:20">
                <img
                  src={getLocation.imageSrc}
                  alt="image"
                  className="img-ratio rounded-12"
                />
              </div>

              <button className="tourCard__favorite">
                <i className="icon-heart"></i>
              </button>
            </div>

            <div className="tourCard__content px-10 pt-10">
              <div className="tourCard__location d-flex items-center text-13 text-light-2">
                <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                {getLocation.location}
              </div>

              <h3 className="tourCard__title text-16 fw-500 mt-5">
                <span>{getLocation.title}</span>
              </h3>

              <div className="tourCard__rating d-flex items-center text-13 mt-5">
                <div className="d-flex x-gap-5">
                  <Stars star={getLocation.rating} />
                </div>

                <span className="text-dark-1 ml-10">
                  {getLocation.rating} ({getLocation.ratingCount})
                </span>
              </div>

              <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                <div className="d-flex items-center">
                  <i className="icon-clock text-16 mr-5"></i>
                  {getLocation.duration}
                </div>

                <div>
                  From <span className="text-16 fw-500">${getLocation.price}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
