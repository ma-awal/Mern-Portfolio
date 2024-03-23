import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './DefaultFooter.css';
const DefaultFooter = () => {
  return (
    <div className=" container mb-4 ">
      <div
        className=" pe-4  text-uppercase text-decoration-none 
                 d-none d-md-flex  justify-content-center   align-items-center flex-wrap  gap-2 footer_link   "
      >
        {/* <h6 className="m-0 p-0 pe-3 d-block">Explore pages</h6> */}
        <Link to="/ " className="  px-3 py-2">
          home
        </Link>
        <Link to="/about" className="  px-3 py-2">
          about
        </Link>
        <Link to="/skills" className="  px-3 py-2">
          skills
        </Link>
        <Link to="/projects" className="  px-3 py-2">
          projects
        </Link>

        <Link to="/contact" className="  px-3 py-2">
          contact
        </Link>
        <Link to="/admin" className="  px-3 py-2">
          Admin
        </Link>
      </div>
      <div className="d-md-none">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultFooter;
