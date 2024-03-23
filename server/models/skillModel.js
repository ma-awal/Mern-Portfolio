import mongoose from 'mongoose';

const skillShema = new mongoose.Schema({
  skillTitle: { type: String, require: true },
  image: { type: String, require: true },
});

const skillModel = mongoose.model('skills', skillShema);
export default skillModel;
