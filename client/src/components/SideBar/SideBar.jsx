// SideBar.jsx
import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const pageLink = [
  { name: 'home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'skills', link: '/skill' },
  { name: 'projects', link: '/projects' },
  { name: 'contact', link: '/contact' },
];

const SideBar = ({ onClose }) => {
  return (
    <div className="sidebar d-md-none">
      <div className="Page_link pe-2">
        <div className="d-flex align-items-center justify-content-between  py-3  px-2">
          <h5 className="m-0 ">Explore page</h5>
          <span className="icon" onClick={onClose}>
            <FaTimes />
          </span>
        </div>
        <ul className="sidebar_link list-group-item">
          {pageLink.map((link) => (
            <li key={link.name}>
              <a href={`${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
