import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Social.css';
const Social = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchSocial = async () => {
      dispatch({ type: 'SET_LOADING', payload: false });
      try {
        const res = await axios.get('http://localhost:5000/api/social');
        console.log('ResData:', res.data);
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_DATA', payload: { socialData: res.data } });
      } catch (error) {
        dispatch({ type: 'SET_LOADING', payload: false });

        console.log(error.message);
      }
    };
    fetchSocial();
  }, [dispatch]);
  const socialData = data; // Make sure to handle null or undefined

  if (!socialData) {
    return <div className="text-danger text-center">Loading</div>;
  }

  const { socialHeading, facebookUrl, linkedinUrl, instagramUrl } = socialData;
  return (
    <div className="social">
      <h5 className=" text-uppercase   ">{socialHeading}</h5>
      <ul className="social_info list-group-item   text-capitalize ">
        <li>
          <a className="single_link" href={`${facebookUrl}`}>
            <span>
              <FaFacebook />
            </span>
            <span> Facebook</span>
          </a>
        </li>
        <li>
          <a className="single_link" href={`${linkedinUrl}`}>
            <span>
              <FaLinkedin />
            </span>
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a className="single_link" href={`${instagramUrl}`}>
            <span>
              <FaInstagram />
            </span>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
