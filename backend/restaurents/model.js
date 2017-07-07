import mongoose from 'mongoose';

const restaurentSchema = new mongoose.Schema({
  name: String,
  star: Number,
  describeHome: String,
  describeIndividual: String,
  picHome: String,
  picIndividual:String
},{timestamp: true})

const Restaurent = mongoose.model('Restaurent', restaurentSchema)

module.exports = Restaurent;
