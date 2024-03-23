import React, { useContext, useState, useEffect } from 'react';
import './AdminSocial';
import { AppContext } from '../../../context/context';
import axios from 'axios';

const AdminSocial = () => {
  const { data, dispatch } = useContext(AppContext);

  const [socialData, setSocialData] = useState({
    socialHeading: data?.socialHeading || '',
    facebookUrl: data?.facebookUrl || '',
    linkedinUrl: data?.linkedinUrl || '',
    instagramUrl: data?.instagramUrl || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      const res = await axios.put(
        'http://localhost:5000/api/social',
        socialData
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
          <label htmlFor="socialHeading">Social Heading</label>
          <input
            type="text"
            className="form-control"
            placeholder="Social Heading"
            name="socialHeading"
            value={socialData.socialHeading}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="facebookUrl">Facebook Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="Facebook url"
            name="facebookUrl"
            value={socialData.facebookUrl}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="linkedinUrl">Linkedin Url</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Linkedin Url"
            name="linkedinUrl"
            value={socialData.linkedinUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="instagramUrl">Instagram Url</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Instagram Url"
            name="instagramUrl"
            value={socialData.instagramUrl}
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

export default AdminSocial;
