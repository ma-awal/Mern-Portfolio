import socialModel from '../models/socialModel.js';
export const getSocial = async (req, res) => {
  try {
    const social = await socialModel.find();
    res.status(200).send(social);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateSocial = async (req, res) => {
  try {
    const updatedSocial = await socialModel.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true }
    );

    res.status(200).send(updatedSocial);
  } catch (error) {
    console.error(error);
    res.status(500).send('About Update Failed');
  }
};
