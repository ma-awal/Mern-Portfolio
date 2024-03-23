import React from 'react';
import './Contact.css';
import PageTitle from '../../components/PageTitle/PageTitle';

import SendMail from '../../components/SendMail/SendMail';

const Contact = () => {
  return (
    <section className="contact w-100 ">
      <div className="container">
        <PageTitle title={'Get in touch'} />
        <div className="row  justify-content-center ">
          <div className="col-12 col-md-8 col-lg-4 ">
            <SendMail />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
