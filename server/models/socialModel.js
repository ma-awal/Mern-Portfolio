import mongoose from 'mongoose';

const socialSchema = new mongoose.Schema({
  socialHeading: { type: String, required: true },
  facebookUrl: { type: String, required: true },
  linkedinUrl: { type: String, required: true },
  instagramUrl: { type: String, required: true },
});

const socialModel = mongoose.model('social', socialSchema);
export default socialModel;
