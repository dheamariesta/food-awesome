import axios from 'axios';
import cloudinary from 'cloudinary';

export default function fileUploadMiddleware(req, res) {
  cloudinary.uploader.upload_stream((result) => {
    let object = {};
    object = req.body;
    object.picHome = result.secure_url;
    axios.post('http://localhost:3001/api/', object)
    .then((response) => {
      res.json(response.data);
    }).catch((error) => {
      res.status(500).json(error.response.data);
    })
  })
  .end(req.file.buffer);
}

// codes for multiple upload file -- not successful
// console.log(result)
// console.log(req.body.name)
// console.log(req.body.)
// let object = {};
// object["url"+req.body.name] = result.secure_url;
// console.log(object)
// axios.put('http://localhost:3001/api/'+ req.body.id, object)
// .then((response) => {
//   console.log(response)
//   res.json(response);
// }).catch((error) => {
//   console.log(error)
//   //res.status(500).json(error.response.data);
// });
