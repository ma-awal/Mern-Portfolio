import express from 'express';
import { authRegister, authLogin } from '../controlers/authControler.js';
const authRouter = express.Router();

authRouter.post('/register', authRegister);
authRouter.post('/login', authLogin);
export default authRouter;
