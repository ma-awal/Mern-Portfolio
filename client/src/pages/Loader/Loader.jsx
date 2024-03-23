import React from 'react';
import './Loader.css';
const Loader = () => {
  return (
    <section className="loader d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner">
        <span
          class="spinner-border spinner-success   spinner-border-lg"
          role="status"
          aria-hidden="true"
        ></span>
      </div>
    </section>
  );
};

export default Loader;
