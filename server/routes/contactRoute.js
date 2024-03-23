import express from 'express';

import { getContact, updateContact } from '../controlers/contactControler.js';

const contactRouter = express.Router();

contactRouter.get('/', getContact);
contactRouter.put('/', updateContact);

export default contactRouter;
