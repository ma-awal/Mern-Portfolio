import express from 'express';
import {
  getSkill,
  createSkill,
  deleteSkill,
  updateSkill,
} from '../controlers/skillControler.js';

const skillRouter = express.Router();

skillRouter.get('/', getSkill);
skillRouter.post('/', createSkill);
skillRouter.put('/:id', updateSkill);
skillRouter.delete('/:id', deleteSkill);
export default skillRouter;
