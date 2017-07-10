import Review from './model';
import Restaurant from '../restaurants/model';
import cloudinary from 'cloudinary';
import fs from 'fs';

exports.getReview = (req, res) => {
  Review.find({},(err,review) => {
    res.json(review);
  })
}

exports.getSpecificReview = (req, res) => {
  Review.findOne({'_id':req.params.id},(err,review) => {
    res.json(review);
  })
}

exports.postReview = (req, res) => {
  const newReview = new Review({
    title: req.body.title||"",
    star: req.body.star||"",
    votes: req.body.votes||"",
    description: req.body.description||"",
    id: req.body.id||"",
    //to be configured
    //user: req.body.user_id
  });
  cloudinary.uploader.upload(req.file.path,(result) => {
    newReview.picReview = result.secure_url
    newReview.picReviewPublicId = result.public_id
    newReview.save((err) => {
      if(err){console.log(err); return;}
    });
    console.log("line 44 reached");
    Restaurant.findOne({"_id": req.params.restaurant_id}, (err,restaurant) => {
      restaurant.reviews.push(newReview._id)
      restaurant.save((err)=>{
        if(err){console.log(err); return;}
      });
      res.json({
        newReview,
        restaurant
      });
    })
  })
  .then(
    fs.unlink(req.file.path, (err) => {
      if (err) {
            console.log("failed to delete local image:"+err);
        } else {
            console.log('successfully deleted local image');
        }
    })
  );

}

exports.updateReview = (req,res) => {
  Review.findOne({'_id':req.params.id}, (err,review) => {
    review.title = req.body.title || review.title,
    review.star = req.body.star || review.star,
    review.votes = req.body.votes|| review.votes,
    review.description = req.body.description || review.description,

    cloudinary.uploader.upload(req.file.path,(result) => {
        review.picReview = result.secure_url || review.picReview;
    }, {public_id: req.body.picReviewPublicId})
    .then(
      fs.unlink(req.file.path, (err) => {
        if (err) {
              console.log("failed to delete local image:"+err);
          } else {
              console.log('successfully deleted local image');
          }
      })
    );

    review.save((err)=>{
      if(err){console.log(err); return;}
      res.json(review)
    });
  });
}

exports.deleteReview = (req,res) => {
  Review.findOneAndRemove({'_id':req.params.id}, (err,review) => {
      if(err){console.log(err); return;}
      res.json(review);
  })
}
