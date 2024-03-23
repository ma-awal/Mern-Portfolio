import React from 'react';
import './Footer.css';

import Address from '../Address/Address';
import Social from '../Social/Social';
import SendMail from '../SendMail/SendMail';
const Footer = () => {
  return (
    <footer className="footer py-3 py-md-4 pt-md-5  ">
      <div className="container">
        <div className="row justify-content-center">
          <div className=" col-12 col-lg-10">
            <div class="row   g-2">
              <div class="col-12 col-md-6 col-lg-4">
                <Address />
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <Social />
              </div>
              <div class="col-12 col-lg-4">
                <SendMail isFooter={'true'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
