import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  cMail: { type: String, required: true },
  cLocation: { type: String, required: true },
  cMobile: { type: String, required: true },
});

const contactModel = mongoose.model('contact', contactSchema);
export default contactModel;
