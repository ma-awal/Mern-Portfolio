import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  aboutHeading: { type: String, required: true },
  aboutDesc: { type: String, required: true },
  aboutImg: { type: String, required: true },
});

const aboutModel = mongoose.model('About', aboutSchema);
export default aboutModel;
