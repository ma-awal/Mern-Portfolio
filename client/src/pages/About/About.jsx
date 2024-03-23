import React, { useContext, useEffect } from 'react';
import './About.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AppContext } from '../../context/context';
import axios from 'axios';

const About = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchAbout = async () => {
      dispatch({ type: 'SET_LOADING', payload: false });
      try {
        const res = await axios.get('http://localhost:5000/api/about');
        console.log('ResData:', res.data);
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_DATA', payload: { aboutData: res.data } });
      } catch (error) {
        dispatch({ type: 'SET_LOADING', payload: false });

        console.log(error.message);
      }
    };
    fetchAbout();
  }, [dispatch]);
  const aboutData = data; // Make sure to handle null or undefined

  if (!aboutData) {
    return <div className="text-danger text-center">Loading</div>;
  }

  const { aboutHeading, aboutDesc, aboutImg } = aboutData;

  return (
    <section className="about    ">
      <div className="container">
        <PageTitle title={'About'} />
        <div className="row   justify-content-center align-items-center gy-4  gy-lg-5   text-center text-md-start  py-3  ">
          <div className="col-12 col-lg-8">
            <div className="about_img">
              <img src={aboutImg} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-12   col-lg-8">
            <div className="about_info     ">
              <h3 className="text-uppercase mb-3">{aboutHeading}</h3>
              <p className=" ">{aboutDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
