import mongoose from 'mongoose';

const introShema = new mongoose.Schema({
  welcomeText: { type: String, require: true },
  introName: { type: String, require: true },
  caption: { type: String, require: true },
  description: { type: String, require: true },
});

const IntroModel = mongoose.model('intro', introShema);
export default IntroModel;
