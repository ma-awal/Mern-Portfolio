import React, { useContext, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../context/context';
import img from '../../images/abo.png';
const Home = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchIntro = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const res = await axios.get('http://localhost:5000/api/intro');
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_DATA', payload: { introData: res.data } });
      } catch (error) {
        dispatch({ type: 'SET_LOADING', payload: false });

        console.log(error.message);
      }
    };
    fetchIntro();
  }, [dispatch]);
  const introData = data; // directly access the data from context
  if (!introData) {
    return <div className="text-danger text-center">Loading</div>;
  }

  const { welcomeText, introName, caption, description } = introData;

  return (
    <section className="home_section     ">
      <div className="container">
        <div className="row intro_wrapper    justify-content-center align-items-center  ">
          <div className="col-12 col-lg-10 ">
            <div className="row justify-content-between align-items-center    gy-3 gy-md-4 gy-lg-0  ">
              <div className="col-12 col-md-5 col-lg-4   order-md-2      ">
                <div className="profile_img p-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-12  col-md-7   ">
                <div className=" text-uppercase text-center text-md-start    ">
                  <h5 className="m-0 p-0">
                    {welcomeText} <span> . . .</span>
                  </h5>
                  <h2 className="display-5  ">{introName} </h2>
                  <h3 className="mb-3 ">{caption}</h3>
                  <p className=" mb-3">{description}</p>
                  <div className="d-flex justify-content-md-start justify-content-center   home_btn">
                    <Link to="/projects">
                      <button className="text-uppercase   px-3 py-2  ">
                        My work
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
