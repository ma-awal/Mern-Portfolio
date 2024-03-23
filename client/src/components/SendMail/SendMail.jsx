import React from 'react';
import './SendMail.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const SendMail = ({ isFooter }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nwft8ci',
        'template_7wtoevd',
        form.current,
        'Ll7D219ac6PdEGGgk'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="send_mail text-start   ">
      <h5 className={`text-uppercase ${isFooter ? 'primary_color' : ''}`}>
        {isFooter ? 'Send message' : ''}
      </h5>
      <form className=" " ref={form} onSubmit={sendEmail}>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="Message"
            name="message"
          />
        </div>
        <button
          type="submit"
          className={`btn btn-sm px-3 py-2  w-100 rounded-0 ${
            isFooter ? 'bg_color  ' : 'save_btn'
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
