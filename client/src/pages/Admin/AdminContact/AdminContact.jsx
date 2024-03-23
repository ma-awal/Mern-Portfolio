import React, { useContext, useState } from 'react';
import './AdminContact.css';
import { AppContext } from '../../../context/context';
import axios from 'axios';
const AdminContact = () => {
  const { data, dispatch } = useContext(AppContext);

  const [contactData, setContactData] = useState({
    cMail: data?.cMail || '',
    cLocation: data?.cLocation || '',
    cMobile: data?.cMobile || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      const res = await axios.put(
        'http://localhost:5000/api/contact',
        contactData
      );

      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({ type: 'SET_DATA', payload: { ...res.data } });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      console.error('Error updating data:', error.message);
    }
  };

  return (
    <div className="admin_form py-4">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="cMail">Mail</label>
          <input
            type="text"
            className="form-control"
            placeholder="Mail"
            name="cMail"
            value={contactData.cMail}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cLocation">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            name="cLocation"
            value={contactData.cLocation}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="cMobile">Mobile</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Mobile"
            name="cMobile"
            value={contactData.cMobile}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn save_btn float-end rounded-0">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminContact;
