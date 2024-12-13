import React from "react";

function MyComponent() {
  return (
    <div className="map-container">
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5261.541559591474!2d49.857226330606096!3d40.37631610243887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d01238921ad%3A0x72c8427f88833389!2sPort%20Baku%20Residence!5e0!3m2!1sru!2saz!4v1734076464478!5m2!1sru!2saz"
          width="100%"
          height="100%"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <style jsx>{`
        /* Basic container styling */
        .map-container {
          margin-top: var(--header-height, 60px); /* Adjust based on header height */
          margin-left: 1.5rem; /* Increased margin for mobile */
          margin-right: 1.5rem; /* Increased margin for mobile */
        }

        .map-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-bottom: 30%; /* Aspect ratio 16:9 */
        }

        .map-iframe {
          position: absolute;
          top: 0;
          left: 0;
          border: 0;
          width: 100%;
          height: 100%;
        }

        /* Media Queries */
        @media (min-width: 768px) {
          /* Medium devices (tablets) */
          .map-container {
            margin-left: 1rem;
            margin-right: 1rem;
          }
        }

        @media (min-width: 1024px) {
          /* Large devices (desktops) */
          .map-container {
            margin-left: 2rem;
            margin-right: 2rem;
          }
        }

        @media (min-width: 1280px) {
          /* Extra-large devices */
          .map-container {
            margin-left: 2rem;
            margin-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default React.memo(MyComponent);
