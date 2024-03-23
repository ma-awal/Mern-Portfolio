import projcetModel from '../models/projectModel.js';

export const getProject = async (req, res) => {
  try {
    const projects = await projcetModel.find();
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createProject = async (req, res) => {
  try {
    const { projectTitle, githubLink, liveLink, image } = req.body;

    const newProject = new projcetModel({
      projectTitle,
      githubLink,
      liveLink,
      image,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id; // Extract project id from request parameters
    const { projectTitle, githubLink, liveLink, image } = req.body;

    // Check if the project exists
    const existingProject = await projcetModel.findById(projectId);
    if (!existingProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update project fields including the image
    existingProject.projectTitle = projectTitle;
    existingProject.githubLink = githubLink;
    existingProject.liveLink = liveLink;
    existingProject.image = image;

    // Save the updated project
    const updatedProject = await existingProject.save();
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id; // Extract project id from request parameters

    console.log('Deleting project with ID:', projectId);

    // Check if the project exists
    const existingProject = await projcetModel.findByIdAndDelete(projectId);
    if (!existingProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).send(error.message);
  }
};
