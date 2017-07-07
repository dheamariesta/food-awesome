import Restaurent from './model';

exports.getRestaurent = (req, res) => {
  Restaurent.find({},(err,restaurent) => {
    res.json(restaurent);
  })
}

exports.postRestaurent = (req, res) => {
  const newRestaurent = new Restaurent({
    name: req.body.name,
    star : req.body.star,
    describeHome : req.body.describeHome,
    describeIndividual : req.body.describeIndividual,
    picHome : req.body.picHome,
    picIndividual : req.body.picIndividual
  });

  newRestaurent.save((err) => {
    if(err){console.log(err); return;}
  });
  res.json('save to database successfully');
}

exports.updateRestaurent = (req,res) => {
  Restaurent.findOne({'name':req.body.name}, (err,restaurent) => {
    restaurent.name = req.body.name || restaurent.name,
    restaurent.star = req.body.star ||restaurent.star,
    restaurent.describeHome = req.body.describeHome || restaurent.describeHome,
    restaurent.describeIndividual = req.body.describeIndividual|| restaurent.describeIndividual,
    restaurent.picHome = req.body.picHome|| restaurent.picHome,
    restaurent.picIndividual = req.body.picIndividual || restaurent.picIndividual,
    restaurent.save((err)=>{
      if(err){console.log(err); return;}
      res.json('updated successfully')
    });
  });
}

exports.deleteRestaurent = (req,res) => {
  Restaurent.findOneAndRemove({'name':req.body.name}, (err,restaurent) => {
      if(err){console.log(err); return;}
      res.json('removed successfully');
  })
}
