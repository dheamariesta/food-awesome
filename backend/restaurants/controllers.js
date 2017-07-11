import Restaurant from './model';
import cloudinary from 'cloudinary';
import fs from 'fs';

exports.getRestaurant = (req, res) => {
  Restaurant.find({},(err,restaurant) => {
    res.json(restaurant);
  })
}

exports.getSpecificRestaurant = (req, res) => {
  Restaurant.findOne({'_id':req.params.id},(err,restaurant) => {
    res.json(restaurant);
  })
}

exports.postRestaurant = (req, res) => {
  cloudinary.uploader.upload(req.file.path,(result) => {
    const newRestaurant = new Restaurant({
      name: req.body.name||"",
      star : req.body.star||"",
      address: req.body.address || "",
      describeHome : req.body.describeHome||"",
      describeIndividual : req.body.describeIndividual||"",
      picHome : result.secure_url||"",
      picHomePublicId: result.public_id||"",
      picIndividual : req.body.picIndividual||"",
      id: req.body.id||""
    });

    newRestaurant.save((err) => {
      if(err){console.log(err); return;}
      res.json(newRestaurant);
    });
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

exports.updateRestaurant = (req,res) => {
  // let secure_url;
  // if(typeof(req.file)!=="undefined"){
    cloudinary.uploader.upload(req.file.path,(result) => {
      Restaurant.findOne({'_id':req.params.id}, (err,restaurant) => {
        restaurant.name = req.body.name || restaurant.name;
        restaurant.star = req.body.star ||restaurant.star;
        restaurant.address = req.body.address || restaurant.address;
        restaurant.describeHome = req.body.describeHome || restaurant.describeHome;
        restaurant.describeIndividual = req.body.describeIndividual|| restaurant.describeIndividual;
        restaurant.picHome = result.secure_url || restaurant.picHome;
        restaurant.picIndividual = req.body.picIndividual || restaurant.picIndividual;
        restaurant.save((err)=>{
          if(err){console.log(err); return;}
          res.json(restaurant)
        });
      });
    }, {public_id: req.body.picHomePublicId})
    .then(
      fs.unlink(req.file.path, (err) => {
        if (err) {
              console.log("failed to delete local image:"+err);
          } else {
              console.log('successfully deleted local image');
          }
      })
    );
  // }

}

exports.deleteRestaurant = (req,res) => {
  Restaurant.findOneAndRemove({'_id':req.params.id}, (err,restaurant) => {
      if(err){console.log(err); return;}
      res.json(restaurant);
  })
}
