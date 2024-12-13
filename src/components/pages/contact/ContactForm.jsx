import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7o8aci9',
        'template_0n3w0xq',
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
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="text-30 fw-700 text-center mb-30">
              Leave us your info
            </h2>

            <div className="contactForm">
              <form
                ref={form} 
                onSubmit={sendEmail}
                className="row y-gap-30"
              >
                <div className="col-md-6">
                  <input type="text" placeholder="Name" name="user_name" required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Subject" name="user_subject" required />
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Email" name="user_email" required />
                </div>
                <div className="col-12">
                  <textarea placeholder="Message" rows="6" name="message" required></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button -md -dark-1 bg-accent-1 text-white col-12"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
