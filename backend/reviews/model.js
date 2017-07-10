import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  title: String,
  star: Number,
  votes: Number,
  description: String,
  pic: String,
  picPublicId:String,
  id: String,
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
},{timestamp: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;
