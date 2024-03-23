import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './AdminProjects.css';
import { AppContext } from '../../../context/context';

const AdminProjects = () => {
  const { data, dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    projectTitle: '',
    githubLink: '',
    liveLink: '',
    image: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await axios.get('http://localhost:5000/api/project');
      dispatch({ type: 'SET_DATA', payload: { projectData: response.data } });
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      updateProject();
    } else {
      addProject();
    }
  };

  const addProject = async () => {
    try {
      await axios.post('http://localhost:5000/api/project', formData);
      fetchProjects();
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:5000/api/project/${projectId}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const updateProject = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/project/${selectedProject._id}`,
        formData
      );
      fetchProjects();
      setShowModal(false);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const openUpdateModal = (project) => {
    setSelectedProject(project);
    setFormData(project);
    setIsUpdateMode(true);
    setShowModal(true);
  };

  const projectData = data?.projectData;
  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin_projects">
      <button
        className="btn  create_btn mb-3 rounded-0 "
        onClick={() => setShowModal(true)}
      >
        Create Project
      </button>

      <div className="row gy-3">
        {projectData.map((project) => (
          <div className="col-12 col-md-6 col-lg-4" key={project._id}>
            <div className="single_project  border border-dark">
              <div className="img_wrapper">
                <img
                  className="img-fluid"
                  src={project.image}
                  alt={project.projectTitle}
                />
              </div>
              <h6 className="m-0 my-2 text-uppercase">
                {project.projectTitle}
              </h6>
              <div className=" py-2 gap-2 d-flex gap-2 rounded-0">
                <button
                  className="btn btn-sm btn-warning rounded-0"
                  onClick={() => openUpdateModal(project)}
                >
                  Update
                </button>
                <button
                  className="btn btn-sm btn-danger rounded-0"
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="project_modal ">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-6  ">
                <div className="modal_content">
                  <h2>{isUpdateMode ? 'Update Project' : 'Add Project'}</h2>
                  <form className="admin_form" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="projectTitle">Project Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="projectTitle"
                        placeholder="Project Title"
                        value={formData.projectTitle}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="githubLink">Github Link</label>
                      <input
                        type="text"
                        className="form-control"
                        name="githubLink"
                        placeholder="GitHub Link"
                        value={formData.githubLink}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-input mb-3">
                      <label htmlFor="liveLink">Live Link</label>
                      <input
                        type="text"
                        className="form-control"
                        name="liveLink"
                        placeholder="Live Link"
                        value={formData.liveLink}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="image">Image Url</label>
                      <input
                        type="text"
                        name="image"
                        placeholder="image url"
                        className="form-control"
                        value={formData.image}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="modal_btn d-flex gap-2">
                      <button className="btn btn-sm  rounded-0" type="submit">
                        {isUpdateMode ? 'Update Project' : 'Add Project'}
                      </button>
                      <button
                        className="btn btn-sm  rounded-0 "
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
