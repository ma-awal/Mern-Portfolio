// Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar.jsx';

const pageLink = [
  { name: 'home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'skills', link: '/skill' },
  { name: 'projects', link: '/projects' },
  { name: 'contact', link: '/contact' },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleSideBar = () => {
    setShow(!show);
  };

  return (
    <section className="nav_bar">
      <div className="container">
        <div className="navbar_sm nav_icon d-md-none d-flex justify-content-between">
          <span>
            <FaBars onClick={toggleSideBar} />
          </span>
          <span>
            <CiSettings />
          </span>
          {show && <SideBar onClose={toggleSideBar} />}
        </div>
        <div className="navbar_lg d-none d-md-flex justify-content-center">
          <div className="nav_link mx-auto d-flex gap-3 align-items-center justify-content-center">
            {pageLink.map((items) => (
              <Link
                key={items.name}
                to={items.link}
                className="text-capitalize"
              >
                {items.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
