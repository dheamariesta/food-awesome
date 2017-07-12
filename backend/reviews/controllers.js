import Review from './model';
import Restaurant from '../restaurants/model';
import User from '../user/model';
import cloudinary from 'cloudinary';
import fs from 'fs';

exports.getAllReview = (req,res) => {
  Review.find({}, (err,restaurant) => {
    res.json(restaurant);
  })
}


exports.getReview = (req, res) => {
  Restaurant.findById(req.params.restaurant_id).populate('reviews').exec((err,reviewContent) => {
    res.json(reviewContent.reviews)
  })
}

exports.getUserReview = (req, res) => {
  User.findById(req.params.user_id).populate('reviews').exec( (err,user) => {
    res.json(user.reviews);
  })
}

exports.postReviewWithPic = (req, res) => {
  const newReview = new Review({
    title: req.body.title||"",
    star: req.body.star||"",
    votes: req.body.votes||"",
    description: req.body.description||"",
    id: req.body.id||"",
    user: req.body.user_id,
    restaurant: req.params.restaurant_id
  });

  cloudinary.uploader.upload(filePath,(result) => {
    newReview.picReview = result.secure_url
    newReview.picReviewPublicId = result.public_id
    newReview.save((err) => {
      if(err){console.log(err); return;}
    });

    Restaurant.findOne({"_id": req.params.restaurant_id}, (err,restaurant) => {
      restaurant.reviews.push(newReview._id)
      restaurant.save((err)=>{
        if(err){console.log(err); return;}
      });
    })
    User.findOne({"_id": req.body.user_id}, (err,user) => {
      user.reviews.push(newReview._id)
      user.save((err)=>{
        if(err){console.log(err); return;}
      });
    })
    res.json(newReview);
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

exports.postReviewWithoutPic = (req, res) => {
  const newReview = new Review({
    title: req.body.title||"",
    star: req.body.star||"",
    votes: req.body.votes||"",
    description: req.body.description||"",
    id: req.body.id||"",
    picReview: "",
    picReviewPublicId: "",
    user: req.body.user_id,
    restaurant: req.params.restaurant_id
  });

  newReview.save((err) => {
    if(err){console.log(err); return;}
  });

  Restaurant.findOne({"_id": req.params.restaurant_id}, (err,restaurant) => {
    restaurant.reviews.push(newReview._id)
    restaurant.save((err)=>{
      if(err){console.log(err); return;}
    });
  })
  User.findOne({"_id": req.body.user_id}, (err,user) => {
    user.reviews.push(newReview._id)
    user.save((err)=>{
      if(err){console.log(err); return;}
    });
  })
  res.json(newReview);

}

exports.updateReviewWithPic = (req,res) => {
  Review.findOne({'_id':req.params.id}, (err,review) => {
    review.title = req.body.title || review.title,
    review.star = req.body.star || review.star,
    review.votes = req.body.votes|| review.votes,
    review.description = req.body.description || review.description,

    cloudinary.uploader.upload(req.file.path,(result) => {
      console.log(result.secure_url);
        review.picReview = result.secure_url || review.picReview;
        review.save((err)=>{
          if(err){console.log(err); return;}
          res.json(review)
        });
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
  });
}

exports.updateReviewWithoutPic = (req,res) => {
  Review.findOne({'_id':req.params.id}, (err,review) => {
    review.title = req.body.title || review.title,
    review.star = req.body.star || review.star,
    review.votes = req.body.votes|| review.votes,
    review.description = req.body.description || review.description,

    review.save((err)=>{
      if(err){console.log(err); return;}
      res.json(review)
    });
  });
}

exports.deleteReview = (req,res) => {
  Review.findOneAndRemove({'_id':req.params.id}, (err,review) => {

    Restaurant.findOneAndUpdate({'_id':review.restaurant}, {
      '$pull':{'reviews': req.params.id}
    },(err, restraurant) => {
      if(err){console.log(err); return;}
    })

    User.findOneAndUpdate({'_id':review.user},{
      '$pull':{'reviews': req.params.id}
    },(err, user) => {
      if(err){console.log(err); return;}
    })

    if(err){console.log(err); return;}
    res.json(review);
  })

}
