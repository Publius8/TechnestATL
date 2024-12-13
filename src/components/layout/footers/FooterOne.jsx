import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FooterOne() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7o8aci9',
        'template_xewrbap',
        form.current,
        'Y7kf7iHMVP0HwaKkj'
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
          form.current.reset(); // Очистка формы
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
    <footer className="footer -type-1">
      <div className="footer__main">
        <div className="footer__bg">
          <img src="/img/footer/1/bg.svg" alt="image" />
        </div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      Speak to our expert at
                      <span className="text-accent-1"> +994-99-999-99-45</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title">Follow Us</div>

                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500">Contact</h4>

                <div className="y-gap-10 mt-20">
                  <a className="d-block" href="#">
                    Neftchilar Avenue, Azerbaijan.
                  </a>
                  <a className="d-block" href="#">
                    info@PlanlaAZ.com
                  </a>
                </div>
              </div>

              <FooterLinks />

              <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">Newsletter</h4>
                <p className="mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <form ref={form} onSubmit={sendEmail} className="footer__newsletter">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright PlanlaAZ {new Date().getFullYear()}</div>
            </div>

            <div className="col-auto">
              <div className="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
}
