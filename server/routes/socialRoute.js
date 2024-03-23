import express from 'express';
import { getSocial, updateSocial } from '../controlers/socialControler.js';

const socialRouter = express.Router();
socialRouter.get('/', getSocial);
socialRouter.put('/', updateSocial);
export default socialRouter;
