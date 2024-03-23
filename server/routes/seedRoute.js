import express from 'express';
import {
  aboutData,
  contactData,
  introData,
  projectsData,
  socialData,
} from './../data/data.js';
import IntroModel from '../models/introModel.js';
import aboutModel from '../models/aboutModel.js';
import projcetModel from '../models/projectModel.js';
import socialModel from '../models/socialModel.js';
import contactModel from '../models/contactModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  try {
    await IntroModel.deleteMany();
    await aboutModel.deleteMany();
    await projcetModel.deleteMany();
    await socialModel.deleteMany();
    await contactModel.deleteMany();
    const createProject = await projcetModel.insertMany(projectsData);
    const createIntro = await IntroModel.insertMany(introData);
    const createAbout = await aboutModel.insertMany(aboutData);
    const createSocial = await socialModel.insertMany(socialData);
    const createContact = await contactModel.insertMany(contactData);

    res.send({
      createIntro,
      createAbout,
      createProject,
      createContact,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default seedRouter;
