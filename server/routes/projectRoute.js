import express from 'express';
import {
  createProject,
  deleteProject,
  getProject,
  updateProject,
} from '../controlers/projectControler.js';

const projectRouter = express.Router();

projectRouter.get('/', getProject);
projectRouter.post('/', createProject);
projectRouter.put('/:id', updateProject);
projectRouter.delete('/:id', deleteProject);
export default projectRouter;
