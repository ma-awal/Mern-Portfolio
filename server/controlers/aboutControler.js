import aboutModel from '../models/aboutModel.js';

export const getAbout = async (req, res) => {
  try {
    const about = await aboutModel.find();
    res.status(200).send(about);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateAbout = async (req, res) => {
  try {
    const updateAbout = await aboutModel.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, upsert: true }
    );

    res.status(200).send(updateAbout);
  } catch (error) {
    console.error(error);
    res.status(500).send('About Update Failed');
  }
};
