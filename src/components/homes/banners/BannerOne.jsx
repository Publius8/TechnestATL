import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BannerOne() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7o8aci9', // Your EmailJS service ID
        'template_xewrbap', // Your EmailJS template ID
        form.current, // Reference to the form
        'Y7kf7iHMVP0HwaKkj' // Your EmailJS public key
      )
      .then(
        () => {
          console.log('SUCCESS! Email sent successfully.');
          toast.success('Email sent successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'green', color: 'white' }
          });
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Failed to send email. Please try again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'red', color: 'white' }
          });
        }
      );
  };

  return (
    <section className="cta -type-1">
      <div className="cta__bg">
        <img src="/img/cta/1/bg.png" alt="background" />
      </div>

      <div className="container">
        <div className="row justify-between">
          <div className="col-xl-5 col-lg-6">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                className="text-40 md:text-24 lh-13 text-white"
              >
                Get 5% off your 1st
                <br className="lg:d-none" />
                app booking
              </h2>

              <p
                data-aos="fade-up"
                className="mt-10 text-white"
              >
                Booking's better on the app. Use promo code
                <br className="lg:d-none" />
                "TourBooking" to save!
              </p>

              <div
                data-aos="fade-up"
                className="text-18 text-white mt-40 md:mt-20"
              >
                Get a magic link sent to your email
              </div>

              <div className="mt-10">
                <form ref={form} onSubmit={sendEmail} className="singleInput -type-2 row x-gap-10 y-gap-10">
                  <div className="col-md-auto col-12">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                      className="cta-email-input"
                    />
                  </div>
                  <div className="col-md-auto col-12">
                    <button
                      data-aos="fade-right"
                      className="button -md -accent-1 bg-white col-12 text-accent-2"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cta__image">
              <img src="/img/cta/1/1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
