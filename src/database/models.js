import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema({
  _id: Schema.Types.ObjectId,
  businessId: String,
  name: String,
  currency: String,
  frontPageImage: String,
  avatarImage: String,
  menu: [{type: Schema.Types.ObjectId, ref: 'Section'}]
});

const BusinessModel = mongoose.model('Business', businessSchema);

const sectionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  business: {type: Schema.Types.ObjectId, ref: 'Business'},
  items: [{type: Schema.Types.ObjectId, ref: 'MenuItem'}]
});

const SectionModel = mongoose.model('Section', sectionSchema);

const menuItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  business: {type: Schema.Types.ObjectId, ref: 'Business'},
  section: {type: Schema.Types.ObjectId, ref: 'Section'}
});

const MenuItemModel = mongoose.model('MenuItem', menuItemSchema);

export default {BusinessModel, SectionModel, MenuItemModel};