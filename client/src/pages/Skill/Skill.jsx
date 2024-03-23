import React, { useContext, useEffect } from 'react';
import './Skill.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AppContext } from '../../context/context';
import axios from 'axios';

const Skill = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchAbout = async () => {
      dispatch({ type: 'SET_LOADING', payload: false });
      try {
        const res = await axios.get('http://localhost:5000/api/skill');
        console.log('ResData:', res.data);
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_DATA', payload: { skillData: res.data } });
      } catch (error) {
        dispatch({ type: 'SET_LOADING', payload: false });

        console.log(error.message);
      }
    };
    fetchAbout();
  }, [dispatch]);
  const skillData = data?.skillData; // Make sure to handle null or undefined

  if (!skillData) {
    return <div className="text-danger text-center">Loading</div>;
  }
  return (
    <section className="skill    ">
      <div className="container">
        <PageTitle title={'My Stacks'} />

        <div className="row justify-content-center">
          <div className="col-12   col-lg-10">
            <div className=" row skill_wrapper g-4  ">
              {skillData.map((skill) => {
                return (
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="single_skill text-center rounded  ">
                      <img
                        src={skill.image}
                        className="img-fluid mx-auto shadow-lg rounded   mb-2   "
                        alt=""
                      />

                      <span className="text-center d-block   text-uppercase fw-semibold px-2 ">
                        {skill.skillTitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
