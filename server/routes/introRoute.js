import express from 'express';
import { getIntro, updateIntro } from '../controlers/introControler.js';
const introRouter = express.Router();

introRouter.get('/', getIntro);
introRouter.post('/create');
introRouter.put('/update', updateIntro);
export default introRouter;
