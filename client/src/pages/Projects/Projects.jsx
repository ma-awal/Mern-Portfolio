import React, { useContext, useEffect } from 'react';
import './Projects.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AppContext } from '../../context/context';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchProjects = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        const res = await axios.get('http://localhost:5000/api/project');
        dispatch({ type: 'SET_DATA', payload: { projectData: res.data } });
      } catch (error) {
        console.log(error.message);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchProjects();
  }, [dispatch]);
  const projectData = data?.projectData;
  if (!projectData) {
    return <div>Loading...</div>; // or any loading indicator
  }
  return (
    <section className="porjects  ">
      <div className="container">
        <PageTitle title={'project'} />
        <div className="row project_wrapper justify-content-center align-items-center   ">
          <div className="col-12 col-lg-10 ">
            <div className="row gy-3 gy-md-4">
              {projectData.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item._id}>
                  <div className="single_project">
                    <div className="img_wrapper">
                      <img
                        className="img-fluid"
                        src={item.image}
                        alt={item.projectTitle}
                      />
                    </div>
                    <h6 className="   text-uppercase">{item.projectTitle}</h6>
                    <div className="d-flex py-2 gap-2 link_btns">
                      <button className="btn w-100">
                        <Link to={item.liveLink}>Live</Link>
                      </button>
                      <button className="btn w-100">
                        <Link to={item.githubLink}>Github</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
