import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  star: Number,
  describeHome: String,
  describeIndividual: String,
  picHome: String,
  picHomePublicId: String,
  picIndividual:String,
  id: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }],
},{timestamp: true})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant;
