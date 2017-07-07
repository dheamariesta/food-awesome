import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  star: Number,
  describeHome: String,
  describeIndividual: String,
  picHome: String,
  picIndividual:String
},{timestamp: true})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant;
