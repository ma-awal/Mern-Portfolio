import express from 'express';
import { getAbout, updateAbout } from '../controlers/aboutControler.js';

const aboutRouter = express.Router();

aboutRouter.get('/', getAbout);
aboutRouter.put('/update', updateAbout);
export default aboutRouter;
