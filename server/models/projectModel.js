import mongoose from 'mongoose';

const projectShema = new mongoose.Schema({
  projectTitle: { type: String, require: true },
  image: { type: String, require: true },
  githubLink: { type: String, require: true },
  liveLink: { type: String, require: true },
});

const projcetModel = mongoose.model('projects', projectShema);
export default projcetModel;
