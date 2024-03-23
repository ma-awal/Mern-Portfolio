import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import seedRouter from './routes/seedRoute.js';
import introRouter from './routes/introRoute.js';
import aboutRouter from './routes/aboutRoute.js';
import projectRouter from './routes/projectRoute.js';
import skillRouter from './routes/skillRoute.js';
import contactRouter from './routes/contactRoute.js';
import socialRouter from './routes/socialRoute.js';
import authRouter from './routes/authRoute.js';
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, join(__dirname, 'public', 'images'));
//   },
//   filename: (req, file, cb) => {
//     const name = Date.now() + '_' + file.originalname;
//     cb(null, name);
//   },
// });

// const upload = multer({
//   storage: storage,
// });

app.use('/api/seed', seedRouter);
app.use('/api/intro', introRouter);
app.use('/api/about', aboutRouter);
app.use('/api/project', projectRouter);
app.use('/api/skill', skillRouter);
app.use('/api/social', socialRouter);
app.use('/api/contact', contactRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;
