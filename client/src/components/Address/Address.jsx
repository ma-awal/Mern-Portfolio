import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/context';
import './Address.css';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Address = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchContact = async () => {
      dispatch({ type: 'SET_LOADING', payload: false });
      try {
        const res = await axios.get('http://localhost:5000/api/contact');
        console.log('ResData:', res.data);
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_DATA', payload: { contactData: res.data } });
      } catch (error) {
        dispatch({ type: 'SET_LOADING', payload: false });
        console.log(error.message);
      }
    };
    fetchContact();
  }, [dispatch]);

  const contactData = data;

  if (!contactData) {
    return <div className="text-danger text-center">Loading</div>;
  }

  const { cMail, cLocation, cMobile } = contactData;

  return (
    <div className="address">
      <h5 className=" text-uppercase ">Address</h5>
      <ul className="address_info  list-group-item    ">
        <li className="single_item   ">
          <span>
            <FaLocationDot />
          </span>
          <span className="text-capitalize">{cLocation}</span>
        </li>
        <li className="single_item ">
          <span>
            <IoMailSharp />
          </span>
          <span className="text-lowercase">{cMail}</span>
        </li>

        <li className="single_item ">
          <span>
            <FaPhoneSquareAlt />
          </span>
          <span className="text-lowercase">{cMobile}</span>
        </li>
      </ul>
    </div>
  );
};

export default Address;
