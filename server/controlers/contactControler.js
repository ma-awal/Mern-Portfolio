import contactModel from '../models/contactModel.js';

export const getContact = async (req, res) => {
  try {
    const contact = await contactModel.find();
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateContact = async (req, res) => {
  try {
    const updateContact = await contactModel.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, upsert: true }
    );

    res.status(200).send(updateContact);
  } catch (error) {
    console.error(error);
    res.status(500).send('contact Update Failed');
  }
};
