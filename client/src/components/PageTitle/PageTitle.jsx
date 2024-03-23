import React from 'react';
import './PageTitle.css';
function PageTitle({ title }) {
  return (
    <div className="page_title  mb-3 mb-md-4 mb-lg-5   ">
      <h2 className=" display-5     text-center  text-uppercase   ">{title}</h2>
    </div>
  );
}

export default PageTitle;
