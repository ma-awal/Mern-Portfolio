import IntroModel from '../models/introModel.js';

export const getIntro = async (req, res) => {
  try {
    const intro = await IntroModel.find();
    res.status(200).send(intro);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createIntro = async (req, res) => {
  try {
    const newIntro = new IntroModel(req.body);
    const savedIntro = await newIntro.save();

    res.status(201).send(savedIntro);
  } catch (error) {
    console.error(error);
    res.status(500).send('About Creation Failed');
  }
};
export const updateIntro = async (req, res) => {
  try {
    const updateIntro = await IntroModel.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, upsert: true }
    );

    res.status(200).send(updateIntro);
  } catch (error) {
    res.status(500).send('Intro Update Failed');
  }
};
