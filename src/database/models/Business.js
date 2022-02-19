import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema({
  name: String,
  currency: String
});

const model = mongoose.model('Business', businessSchema);

export default model;