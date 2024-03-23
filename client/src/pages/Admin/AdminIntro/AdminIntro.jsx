import React, { useContext, useState } from 'react';
import axios from 'axios';
import './AdminIntro.css';
import { AppContext } from '../../../context/context.js';

const AdminIntro = () => {
  const { data, dispatch } = useContext(AppContext);

  const [introData, setIntroData] = useState({
    welcomeText: data?.welcomeText || '',
    introName: data?.introName || '',
    caption: data?.caption || '',
    description: data?.description || '', // Fix the typo here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIntroData((prevIntroData) => ({
      ...prevIntroData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      const res = await axios.put(
        'http://localhost:5000/api/intro/update',
        introData
      );

      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({ type: 'SET_DATA', payload: { ...res.data } });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      console.error('Error updating intro:', error.message);
    }
  };

  return (
    <div className="admin_form py-4 ">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="welcomText">WelcomText:</label>
          <input
            type="text"
            className="form-control"
            placeholder={introData.welcomeText}
            name="welcomeText"
            value={introData.welcomeText}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="introName">Intro Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="intro name"
            name="introName"
            value={introData.introName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="caption">Caption</label>
          <input
            type="text"
            className="form-control"
            placeholder="caption"
            name="caption"
            value={introData.caption}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
            value={introData.description}
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

export default AdminIntro;
