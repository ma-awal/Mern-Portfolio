import React, { useContext, useState, useEffect } from 'react';
import './AdminAbout.css';
import { AppContext } from '../../../context/context';
import axios from 'axios';

const AdminAbout = () => {
  const { data, dispatch } = useContext(AppContext);

  const [aboutData, setAboutData] = useState({
    aboutHeading: data?.aboutHeading || '',
    aboutDesc: data?.aboutDesc || '',
    aboutImg: data?.aboutImg || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      // Now, update the data
      const res = await axios.put(
        'http://localhost:5000/api/about/update',
        aboutData
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
          <label htmlFor="aboutHeading">About Heading</label>
          <input
            type="text"
            className="form-control"
            placeholder="about heading"
            name="aboutHeading"
            value={aboutData.aboutHeading}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="aboutDesc">About Description</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="about description"
            name="aboutDesc"
            value={aboutData.aboutDesc}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="aboutImg">Image Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image Url"
            name="aboutImg"
            value={aboutData.aboutImg}
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

export default AdminAbout;
