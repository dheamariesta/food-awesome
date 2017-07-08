import axios from 'axios';
import cloudinary from 'cloudinary';

export default function fileUploadMiddleware(req, res) {
  cloudinary.uploader.upload_stream((result) => {
    console.log(result)
    console.log(req.body.name)
    let object = {};
    object["url"+req.body.name] = result.secure_url;
    console.log(object)
    axios.put('http://localhost:3001/api/'+ req.body.id, object)
    .then((response) => {
      console.log(response)
      res.json(response);
    }).catch((error) => {
      console.log(error)
      //res.status(500).json(error.response.data);
    });
  })
  .end(req.file.buffer);
}
