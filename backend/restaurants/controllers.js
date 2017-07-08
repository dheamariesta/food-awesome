import Restaurant from './model';
import cloudinary from 'cloudinary';

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


          const newRestaurant = new Restaurant({
            name: req.body.name||"",
            star : req.body.star||"",
            describeHome : req.body.describeHome||"",
            describeIndividual : req.body.describeIndividual||"",
            picHome : req.body.picHome||"",
            picIndividual : req.body.picIndividual||"",
            id: req.body.id||""
          });

          newRestaurant.save((err) => {
            if(err){console.log(err); return;}
            res.json(newRestaurant);
          });

}

exports.updateRestaurant = (req,res) => {
  console.log("controller",req.body.urlpicHome)
  console.log("controller",req.body.urlpicIndividual)
  Restaurant.findOne({'_id':req.params.id}, (err,restaurant) => {
    restaurant.name = req.body.name || restaurant.name,
    restaurant.star = req.body.star ||restaurant.star,
    restaurant.describeHome = req.body.describeHome || restaurant.describeHome,
    restaurant.describeIndividual = req.body.describeIndividual|| restaurant.describeIndividual,
    restaurant.picHome = req.body.urlpicHome|| restaurant.picHome,
    restaurant.picIndividual = req.body.urlpicIndividual || restaurant.picIndividual,
    restaurant.save((err)=>{
      if(err){console.log(err); return;}
      res.json(restaurant)
    });
  });
}

exports.deleteRestaurant = (req,res) => {
  Restaurant.findOneAndRemove({'_id':req.params.id}, (err,restaurant) => {
      if(err){console.log(err); return;}
      res.json(restaurant);
  })
}
